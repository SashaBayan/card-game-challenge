import React, { useState } from 'react';
import styles from './App.module.css';
import Button from './components/Button';
import Card from 'components/Card';
import { createDeck, dealCards, drawFromDeck } from 'utilities';

const App: React.FC = () => {
  const [deck, setDeck] = useState(createDeck());
  const [hand, setHand] = useState([]);

  return (
    <div className={styles.body}>
      <div className={styles.top} />
      <div className={styles.middle}>
        {hand.map((card) => {
          return <Card card={card} />;
        })}
      </div>
      <div className={styles.bottom}>
        <Button
          onClick={() => {
            setHand(dealCards(deck) as any);
          }}
        >
          DEAL
        </Button>
      </div>
    </div>
  );
};

export default App;
