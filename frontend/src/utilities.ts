import Club from './assets/Club.svg';
import Diamond from './assets/Diamond.svg';
import Heart from './assets/Heart.svg';
import Spade from './assets/Spade.svg';

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

export function createDeck(): Card[] {
  return [
    ...createSuit(Suit.Clubs),
    ...createSuit(Suit.Diamonds),
    ...createSuit(Suit.Hearts),
    ...createSuit(Suit.Spades),
  ];
}

export function createSuit(suit: Suit): Card[] {
  const cards = [];
  for (let i = 1; i < 14; i += 1) {
    cards.push({
      value: i,
      suit,
    });
  }
  return cards;
}

export function drawFromDeck(deck: Card[]): Card {
  // NOTE: this function mutates the original deck
  // Considering rewriting to keep deck immutable by using slice
  // But given the nature of the exercise, may be simpler to keep it mutuable
  const randomIndex = Math.floor(Math.random() * deck.length);
  return deck.splice(randomIndex, 1)[0];
}

export function valueToDisplay(val: number): string {
  switch (val) {
    case 1:
      return 'A';
    case 11:
      return 'J';
    case 12:
      return 'Q';
    case 13:
      return 'K';
    default:
      return val.toString();
  }
}

export function suitToColor(suit: Suit): string {
  switch (suit) {
    case Suit.Clubs:
      return 'black';
    case Suit.Spades:
      return 'black';
    case Suit.Hearts:
      return 'red';
    case Suit.Diamonds:
      return 'red';
    default:
      return '';
  }
}

export function suitToSVG(suit: Suit): string {
  switch (suit) {
    case Suit.Clubs:
      return Club;
    case Suit.Spades:
      return Spade;
    case Suit.Hearts:
      return Heart;
    case Suit.Diamonds:
      return Diamond;
    default:
      return '';
  }
}
