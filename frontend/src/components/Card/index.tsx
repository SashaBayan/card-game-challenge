import React from 'react';
import styles from './Card.module.css';

import { Card as CardData, suitToColor, suitToSVG, valueToDisplay } from 'utilities';

interface Props {
  card: CardData;
}

const Card: React.FC<Props> = ({ card: { suit, value } }: Props) => {
  const color = suitToColor(suit);
  const colorClass = colorToClass(color);
  return (
    <div className={styles.card}>
      <p className={`${styles.text} ${colorClass}`}> {valueToDisplay(value)} </p>
      <img className={styles.smallSuit} src={suitToSVG(suit)} alt={suit} />
      <img className={styles.largeSuit} src={suitToSVG(suit)} alt={suit} />
    </div>
  );
};

function colorToClass(color: string): string {
  return color === 'black' ? 'text-black' : 'text-red-500';
}

export default Card;
