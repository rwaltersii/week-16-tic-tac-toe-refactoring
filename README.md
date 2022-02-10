## Project Name:

Tic - Tac - Toe Refactoring

## Project Description:

Take an assignment with a Tic-Tac-Toe game and refactor things about the game for improvements

## Setup

npm install
npm start

## Roadmap of Future Improvements:

1.  Transferred the code from a standalone to a full React Application-
    a. Used the npx create-react-app for the boiler plate application-
    b. Broke up the single jsx file into three separate js component files (App.js, Board.js, Square.js)-

2.  Do not allow a square to be clicked again once it has been click before-
    a. Created a variable to hold the state for the value of the disable property for the button-
    b. Default value is set to false; once a square is clicked; I used useState to set it to true-

3.  The color of the starting id is different from the Red X and White O-
    a. Created another color in the styles.css file
    b. Setup a ternary conditional chain to set the color if it is not and X or O-

4.  Lock all the squares from being clicked once there is a winner-
    a. Set the pointer-event to none if a winner was determined-

5.  Have a reset button-
    a. Set an onClick to a button to reload the page
