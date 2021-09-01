## Frontend challenge

The task is to build a simple card game. The designs are in Figma, you can see [desktop](https://www.figma.com/file/TQSDNvCd0WJFhYQuwtUS8c/Interview-Card-Game?node-id=0%3A1) and [mobile](https://www.figma.com/file/TQSDNvCd0WJFhYQuwtUS8c/Interview-Card-Game?node-id=2%3A352) pages. The fonts should be available in Google Fonts, but we also included them in assets if they ever take them down (has happened before). It doesn't have to be pixel perfect, but it should look nice.

The program should perform the following functions.

1. Assuming a standard deck (52 cards of 4 suits: ♣ Clubs, ♦ Diamonds, ♥ Hearts, ♠ Spades).
2. Press a "Deal" button to deal 5 random cards.
3. Pressing the button again should deal 5 unique, random cards. Within the same game, you should never get the same cards again that you got in the past (just like a physical deck).
4. Add a card counter which shows how many cards are dealt/left.
5. Add an ace counter which shows how many aces are left.
6. Add a button to reset the game.
7. When all the cards have been dealt, Game Over should be displayed. If no aces are left, Game Over should be displayed.
8. If there is an ace in the last draw, display Winner, otherwise display You Lose. Better luck next time!
9. Bonus: Animations. Wow us!

Requirements:

- React
- Tailwind

Please write tests.

Feel free to use any additional libraries.

[Example implementation.](https://drive.google.com/file/d/1uIYhG-74wrWs7YZx6Zz9Bdn3WSEtaIWY/view?usp=sharing)

### Troubleshooting & Tips

If you have any issues with husky/commit hooks, you may remove the \*.py section of "lint-staged" in package.json

### Design

![desktop](https://www.figma.com/file/TQSDNvCd0WJFhYQuwtUS8c/Interview-Card-Game?node-id=2%3A352)

![mobile](https://www.figma.com/file/TQSDNvCd0WJFhYQuwtUS8c/Interview-Card-Game?node-id=2%3A352)

### Requirements

- Node 12+ (tested on 12.3.1)
- Yarn 1+ (tested on 1.16.0)

### Getting Started

    yarn install

Then:

    yarn start

Your browser will automatically open to http://localhost:3000 by Create React App. Changes should be reflected automatically.

See [CRA documentation](https://facebook.github.io/create-react-app/).

You are welcome to use Next.js instead, we just set up CRA for convenience.
