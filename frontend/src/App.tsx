import React from 'react';
import styles from './App.module.css';
import Button from './components/Button';
import Card from 'components/Card';
import { createDeck, drawFromDeck } from 'utilities';

const App: React.FC = () => {
  const deck = createDeck();
  const card = drawFromDeck(deck);
  return (
    <div className={styles.body}>
      <div className={styles.top}></div>
      <div className={styles.middle}>
        <Card card={card}></Card>
        <Card card={card}></Card>
        <Card card={card}></Card>
        <Card card={card}></Card>
        <Card card={card}></Card>
      </div>
      <div className={styles.bottom}>
        <Button> DEAL </Button>
      </div>
    </div>
  );
};

export default App;
