export {};

describe("createSuit", () => {
  it("returns an array of 13 cards", () => {});
  it("returns an an array of a single suit type", () => {});
});

describe("createDeck", () => {
  it("returns a deck with 52 cards", () => {});
  it("creates a deck with 4 suits", () => {});
});

describe("valueToDisplay", () => {
  it('returns "A" when the card value is 1', () => {});
  it("returns the card value as a string when the card value is > 1 and < 10", () => {});
  it('returns "J" when the card value is 11', () => {});
  it('returns "Q" when the card value is 12', () => {});
  it('returns "K" when the card value is 13', () => {});
});

describe("drawFromDeck", () => {
  it("removes one card from the deck", () => {});
  it("removes a unique card from the deck", () => {});
});

describe("when all cards are dealt", () => {
  it("switches the Game Over flag to true", () => {});

  describe("and when aces remain in the deck", () => {
    it("switches the Winner flag to true", () => {});
  });
  describe("and when NO aces remain in the deck", () => {
    it("switches the Winner flag to false", () => {});
  });
});
