import React from 'react';
import styles from './App.module.css';
import Button from './components/Button';
import Card from 'components/Card';

const App: React.FC = () => {
  return (
    <div className={styles.body}>
      <div className={styles.top}></div>
      <div className={styles.middle}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className={styles.bottom}>
        <Button> DEAL </Button>
      </div>
    </div>
  );
};

export default App;
