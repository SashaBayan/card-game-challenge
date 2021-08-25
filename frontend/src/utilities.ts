export enum Suit {
  Clubs = 'Clubs',
  Spades = 'Spades',
  Hearts = 'Hearts',
  Diamonds = 'Diamonds',
}

export interface Card {
  value: number;
  suit: Suit;
}
