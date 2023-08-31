/*jshint esversion: 6 */ // lets jshint know I am using some ES6 syntax

//Array of the words used in game
const words = ["banana", "puzzle", "chance", "guitar", "jacket", 
"orange", "butter", "saddle", "bottle", "museum", 
"sister", "planet", "ticket", "window", "pencil", 
"candle", "rocket", "camera", "forest", "author", 
"cheese", "design", "shadow", "flower", "biscuit", 
"quiver", "monkey", "doctor", "laptop", "cousin", 
"temple", "castle", "turtle", "market", "jumper", 
"mirror", "purple", "waffle", "racket", "parcel", 
"basket", "breeze", "pepper", "syrup", "whisky", 
"diamond", "jigsaw", "jungle", "muffin", "sunset",
"canada", "paris", "london", "tokyo", "sydney",
"berlin", "cairo", "moscow", "dublin", "athens",
"unique", "jazz"];

// game object to contain variables and make it easier to reset everything
const game = {
    currentWord: "",
    currentSolution: "",
    currentWordArray: [],
    letterElements: [],
    lettersRemaining: 0,
    guessesRemaining: 10,
    clickHandlers: [],
};

// Query selectors for use in functions
const wordOut = document.querySelector(".current_word");
const hangmanImage = document.querySelector(".hangman_image");
const scoreOut = document.querySelector(".score");
const sButton = document.querySelector(".button");
sButton.addEventListener("click", startGame);

/**
 * Function resets variables and starts game
 */
function startGame() {
    game.currentWord = "";
    game.currentSolution = "";
    game.currentWordArray = [];
    game.lettersRemaining = 0;
    game.guessesRemaining = 10;
    sButton.textContent = 'Restart Game';
    resetClass();
    removeEventLis();
    getWord();
    createPuzzle();
    setEventLis();
    updateScore();
}
 
/**
 * Function sets up click handler for event listeners on letters
 */
function letterClickHandler(item) {
    return function() {
        checker(item, item.textContent);
    };
}

/**
 * Function sets up event listeners on the letter divs for user input
 */
function setEventLis() {
    let elements = document.querySelectorAll(".lettrs");
    
    elements.forEach((item) => {
        const handler = letterClickHandler(item);
        // store click handler reference so it can be removed to reset game
        game.clickHandlers.push(handler);
        // store handler function as a property of the handler so it can be used to remove the handler when a letter is clicked
        item.clickHandler = handler; 
        item.addEventListener('click', handler);
    });
}

/**
 * Function removes event listeners on the letter divs so we dont have multiple of the
 * same event listeners which would mess up score calculations
 */
function removeEventLis() {
    let elements = document.querySelectorAll(".lettrs");
    if (game.clickHandlers.length > 0) {
    elements.forEach((item, index) => {
        item.removeEventListener('click', game.clickHandlers[index]);
    });

    // Clear the array of handler references
    game.clickHandlers = [];
}}

/**
 * Function randomly selects word from array and creates an array of the 
 * letters making up the word
 */
function getWord() {
    let num = Math.floor(Math.random() * 4);
    game.currentWord = words[num];
    game.currentSolution = game.currentWord.split("");
}

/**
 * Function creates and add elements to the DOM the elements are input from the createPuzzle function.
 * I originally thought I would have to create the letters for the user input also using this 
 * to make it easier to remove the event listeners from the letter when clicked, as I wanted the letters to always 
 * be visible on the page and not built when the startGame function I managed to find another way of making it work
 * but decided to keep this here for future reference instead of merging it with the createPuzzle function.
 */
//Function modified from - Javascript Beginner To Professional - Published by Packt
function createPuzzleElements(elementType, parentEl, output, cls) {
    const temp = document.createElement(elementType);
    temp.classList.add(cls);
    parentEl.append(temp);
    temp.textContent = output;
    return temp;
}

/**
 * Function creates the output of the word that the user will see and calculates the 
 * total letters for the user
 */
//Function modified from - Javascript Beginner To Professional - Published by Packt
function createPuzzle() {
    wordOut.innerHTML = "";
    game.currentSolution.forEach((letr) => {
        let div = createPuzzleElements("div", wordOut, "-", "puzzle_letters");
        game.lettersRemaining++;
        game.currentWordArray.push(div);
    });
    hangmanImage.innerHTML = `<img src="assets/images/hangman-${game.guessesRemaining}.jpg" width="200" height="350" alt="Hangman game images">`;

}

/**
 * Function to reset letter classes back to default
 */
function resetClass() {
    let elements = document.querySelectorAll(".lettrs");

    elements.forEach((element) => {
        element.classList.remove('letters_wrong');
        element.classList.remove('letters_correct');
        element.classList.remove('letters_norm');
        element.classList.add('letters_norm');
      });
    
}

/**
 * Function checks the user input against the current word to see if the guess is correct
 * and updates the current word output viewed by the user if the guess is correct, it also 
 * updates the user input letters to highlight that the letter was already clicked and wether
 * it was a correct guess or not.
 */
function checker(element, checkLett) {
    let isCorrect = false;
    
    game.currentSolution.forEach((lett, index) => {
        lett = lett.toString();
        if (lett.toUpperCase() === checkLett) {
            game.currentWordArray[index].textContent = checkLett;
            isCorrect = true;
            game.lettersRemaining--;
        }
    });

    if (isCorrect) {
        element.classList.remove("letters_norm");
        element.classList.add("letters_correct");
    } else {
        element.classList.remove("letters_norm");
        element.classList.add("letters_wrong");
        game.guessesRemaining--;
        hangmanImage.innerHTML = `<img src="assets/images/hangman-${game.guessesRemaining}.jpg">`;
    }

    // Remove event listener when a letter is clicked
    element.removeEventListener('click', element.clickHandler);

    // code to activate gameOver function and remove letter event listeners when 0 guesses remaining
    if(game.guessesRemaining <= 0){
        gameOver();
        removeEventLis();
    }

    // code to activate remove letter event listeners when puzzle is complete
    if(game.lettersRemaining <= 0){
        youWin();
        removeEventLis();
    }
    updateScore();
}

/**
 * Function to update score to user
 */
function updateScore() {
    scoreOut.innerHTML = `<p>Letters Remaining: ${game.lettersRemaining}<br>
    Guesses Remaining: ${game.guessesRemaining}</p>`;
}

/**
 * Function for instructions popup from https://www.w3schools.com/howto/howto_js_popup.asp
 */
function instructions() {
    var popup = document.getElementById("instructions");
    popup.classList.toggle("show");
  }

/**
 * Function for gameOver popup from https://www.w3schools.com/howto/howto_js_popup.asp
 */
function gameOver() {
    var popup = document.getElementById("game_over");
    popup.innerHTML = `<p>Oops! You've run out of guesses. The word was: ${game.currentWord}.
    Better luck next time.</p>
    <button class="new_game" onclick="startGame(); gameOver()">New Game</button>
    <button class="exit" onclick="gameOver()">Exit</button>`;
    popup.classList.toggle("show");
  }

  /**
 * Function for youWin popup from https://www.w3schools.com/howto/howto_js_popup.asp
 */
function youWin() {
    var popup = document.getElementById("you_win");
    popup.innerHTML = `<p>Congratulations! You've successfully guessed the word: ${game.currentWord}. 
    Well Done!</p>
    <button class="new_game" onclick="startGame(); youWin()">New Game</button>
    <button class="exit" onclick="youWin()">Exit</button>`;
    popup.classList.toggle("show");
  }