import ClubSVG from '../assets/Club.svg';
import DiamondSVG from '../assets/Diamond.svg';
import HeartSVG from '../assets/Heart.svg';
import SpadeSVG from '../assets/Spade.svg';
import {
  createDeck,
  createSuit,
  drawFromDeck,
  valueToDisplay,
  suitToColor,
  suitToSVG,
  Suit,
  dealCards,
  Card,
} from '../utilities';

const { Diamonds, Hearts, Spades, Clubs } = Suit;

describe('createSuit', () => {
  const cards = createSuit(Clubs);
  it('returns an array of 13 cards', () => {
    expect(cards.length).toBe(13);
  });
  it('returns an an array of a single suit type', () => {
    cards.forEach((card) => {
      expect(card.suit).toBe(Clubs);
    });
  });
});

describe('createDeck', () => {
  const deck = createDeck();
  it('returns a deck with 52 cards', () => {
    expect(deck.length).toBe(52);
  });
  it('creates a deck with 4 suits', () => {
    const hasDiamonds = deck.some(({ suit }) => suit === Diamonds);
    const hasClubs = deck.some(({ suit }) => suit === Clubs);
    const hasHearts = deck.some(({ suit }) => suit === Hearts);
    const hasSpades = deck.some(({ suit }) => suit === Spades);
    expect(hasDiamonds).toBe(true);
    expect(hasClubs).toBe(true);
    expect(hasHearts).toBe(true);
    expect(hasSpades).toBe(true);
  });
});

describe('valueToDisplay', () => {
  it('returns "A" when the card value is 1', () => {
    expect(valueToDisplay(1)).toBe('A');
  });
  it('returns the card value as a string when the card value is > 1 and < 10', () => {
    expect(valueToDisplay(2)).toBe('2');
    expect(valueToDisplay(5)).toBe('5');
    expect(valueToDisplay(10)).toBe('10');
  });
  it('returns "J" when the card value is 11', () => {
    expect(valueToDisplay(11)).toBe('J');
  });
  it('returns "Q" when the card value is 12', () => {
    expect(valueToDisplay(12)).toBe('Q');
  });
  it('returns "K" when the card value is 13', () => {
    expect(valueToDisplay(13)).toBe('K');
  });
});

describe('drawFromDeck', () => {
  it('removes one card from the deck', () => {
    const deck = createDeck();
    while (deck.length) {
      const cardCount = deck.length;
      drawFromDeck(deck);
      expect(deck.length).toBe(cardCount - 1);
    }
  });

  it('removes a unique card from the deck', () => {
    const deck = createDeck();
    const discardPile = [];
    while (deck.length) {
      const draw = drawFromDeck(deck);
      discardPile.push(draw);
      discardPile.some((card) => {
        const sameSuit = card.suit === draw.suit;
        const sameVal = card.value === draw.value;
        return !sameSuit || !sameVal;
      });
    }
  });
});

describe('dealCards', () => {
  it('returns a hand of 5 cards when deck has more than 5 cards', () => {
    const deck = createDeck();
    const hand = dealCards(deck);
    expect(hand.length).toBe(5);
  });
  it('returns a hand of less than 5 cards when deck.length < 5', () => {
    const deck = createDeck();
    const smallDeck = [];
    smallDeck.push(deck[0], deck[1]);
    const hand = dealCards(smallDeck);
    expect(hand.length).toBe(2);
  });
});

describe('suitToColor', () => {
  it('returns black for Clubs', () => {
    expect(suitToColor(Clubs)).toBe('black');
  });
  it('returns black for Spades', () => {
    expect(suitToColor(Spades)).toBe('black');
  });

  it('returns black for Hearts', () => {
    expect(suitToColor(Hearts)).toBe('red');
  });

  it('returns black for Diamonds', () => {
    expect(suitToColor(Diamonds)).toBe('red');
  });
});

describe('suitToSVG', () => {
  it('returns the SVG for Clubs', () => {
    expect(suitToSVG(Clubs)).toBe(ClubSVG);
  });
  it('returns the SVG for Spades', () => {
    expect(suitToSVG(Spades)).toBe(SpadeSVG);
  });
  it('returns the SVG for Hearts', () => {
    expect(suitToSVG(Hearts)).toBe(HeartSVG);
  });
  it('returns the SVG for Diamond', () => {
    expect(suitToSVG(Diamonds)).toBe(DiamondSVG);
  });
});
