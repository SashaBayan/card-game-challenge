import { createDeck, createSuit, drawFromDeck, valueToDisplay, Suit } from '../utilities';

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

describe('when all cards are dealt', () => {
  it('switches the Game Over flag to true', () => {
    return;
  });

  describe('and when aces remain in the deck', () => {
    it('switches the Winner flag to true', () => {
      return;
    });
  });
  describe('and when NO aces remain in the deck', () => {
    it('switches the Winner flag to false', () => {
      return;
    });
  });
});
