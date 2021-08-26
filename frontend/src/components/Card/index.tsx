import React from 'react';
import styles from './Card.module.css';
import Clover from '../../assets/Clover.svg';

const Card: React.FC = () => {
  return (
    <div className={styles.card}>
      <p className={styles.text}> 5</p>
      <img className={styles.smallSuit} src={Clover} />
      <img className={styles.largeSuit} src={Clover} />
    </div>
  );
};

export default Card;
