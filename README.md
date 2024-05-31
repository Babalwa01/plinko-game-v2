# plinko-game-v2

### Overview

This is a Plinko game which I created using PIXI.js. Plinko is a game of luck that involves
dropping a ball from the top of a triangular board of pegs and watching the ball bounce off
the pegs until it lands in a slot at the bottom, each slot having different point values.

### Features

- Interactive game with animated ball movement
- Triangular grid layout wit pegs and slots
- Score points tracking
- Play button
- Responsive design for different screens (mobile-first styling)

### How to Play

1. Click on the **_Play_** button to start the game
2. Starting with 100 points, watch the ball randomly moves down the Plinko board and bounce off pegs
3. Each ball drop costs 10 points
4. The ball will land in a slot at the bottom, earning points based on the slot's value
5. Continue playing to earn more points

### Technologies Used

- **HTML & SCSS**: For the basic structure and styling of the game
- **PIXI.js**: For rendering graphics and animations
- **Tween.js**: For smooth animations of the ball movements
- **Webpack**: For bundling Javascript files
- **Git and Github**: For version control

### Getting Started

1. Clone the repository

```
git clone https://github.com/Babalwa01/plinko-game-v2.git
```

2. Install the dependencies:

```
npm install
```

3. Build the project

```
npm run build
```

4. Run the project locally

```
npm run dev
```

5. View from different screen sizes using Chrome developer tools

### Features to be improved to be improved and some technical issues to be fixed

- **Mobile responsiveness**: Each time you switch to a different screen size, the page needs to be refreshed to show the UI fully
- **Testing**: Look into adding unit tests to ensure full functionality of the game
- **Game functionality**: Fix ball to land on its respective slot at the end of ball movement, and not on empty space above respective slot.

### Steps followed to create project

- Following through instructions to build project structure
- Research on Game development tools
- Setup environment (Node Package Manager, Webpack)
- Learn basics of PIXI.js
- Learn basics of Tween.js
- Make use of AI tool like ChatGPT and also stack overflow to gather knowledge when stuck
