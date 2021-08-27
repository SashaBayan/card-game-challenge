import React, { useState } from 'react';
import styles from './App.module.css';
import Card from 'components/Card';
import WinnerBanner from 'assets/winner.svg';
import { dealCards, useDeck, Card as CardData, countAces } from 'utilities';

const App: React.FC = () => {
  const { deck, resetDeck } = useDeck();
  const [hand, setHand] = useState<CardData[]>([]);
  const acesInDeck = countAces(deck);
  const acesInHand = countAces(hand);

  const isGameOver = !acesInDeck || !deck.length;
  const isWinner = acesInHand && !deck.length;

  return (
    <div className={styles.body}>
      <div className={styles.top}>
        {isWinner ? (
          <img src={WinnerBanner} />
        ) : (
          <div className={styles.counter}>
            <div className={styles.count}>{deck.length}</div>
            <p>Cards Left</p>
          </div>
        )}
      </div>
      <div className={styles.middle}>
        {hand.map((card, i) => {
          const fullHand = hand.length === 5;
          return <Card card={card} key={`${card.value}${card.suit}`} />;
        })}
      </div>
      <div className={styles.bottom}>
        {!isGameOver && (
          <button
            type="button"
            className={styles.primary}
            onClick={() => {
              setHand(dealCards(deck) as any);
            }}
          >
            DEAL
          </button>
        )}
        {isGameOver && !isWinner && (
          <p className={styles.loser}> You lose. Better luck next time! </p>
        )}
        <div className={styles.row}>
          <button className={styles.aceCounter}>{acesInDeck} Aces Left</button>
          <div className={styles.placeholder}> </div>
          <button
            type="button"
            className={styles.secondary}
            onClick={() => {
              resetDeck();
              setHand([]);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
