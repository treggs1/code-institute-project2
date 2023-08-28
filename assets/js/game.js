let words = ["testOne", "testTwo", "testThree", "testFour"];

const game = {
    currentWord: "",
    currentSolution: "",
    currentWordArray: [],
    letterElements: [],
    lettersRemaining: 0,
    guessesRemaining: 10,
    clickHandlers: [],
};

const wordOut = document.querySelector(".current_word");
const hangmanImage = document.querySelector(".hangman_image");
const scoreOut = document.querySelector(".score");
const sButton = document.querySelector(".button");
sButton.addEventListener("click", startGame);

/**
 * Function resets variables and starts game
 */
function startGame() {
    console.log("testOutput");
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
        game.clickHandlers.push(handler); // store click handler reference so it can be removed to reset game
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
    console.log(game.currentWord);
    console.log(num);
    game.currentSolution = game.currentWord.split("");
    console.log(game.currentSolution);
}


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
function createPuzzle() {
    wordOut.innerHTML = "";
    game.currentSolution.forEach((letr) => {
        let div = createPuzzleElements("div", wordOut, "-", "puzzle_letters");
        game.lettersRemaining++;
        game.currentWordArray.push(div);
        //update total
        console.log(game.currentWordArray);
        console.log(game.lettersRemaining);
    });
    hangmanImage.innerHTML = `<img src="assets/images/hangman-${game.guessesRemaining}.jpg">`;

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
    updateScore();
    console.log(checkLett);
    console.log(element);
    console.log(game.currentWordArray);
    console.log(wordOut);
    console.log(game.lettersRemaining);
}

/**
 * Function to update score to user
 */
function updateScore() {
    scoreOut.innerHTML = `<p>Letters Remaining: ${game.lettersRemaining}</p>
    <p>Guesses Remaining: ${game.guessesRemaining}</p>`;
}

/**
 * Function for instructions popup from https://www.w3schools.com/howto/howto_js_popup.asp
 */
function instructions() {
    var popup = document.getElementById("instructions");
    popup.classList.toggle("show");
  }

/**
 * Function for gameover popup from https://www.w3schools.com/howto/howto_js_popup.asp
 */
function gameOver() {
    var popup = document.getElementById("game_over");
    popup.classList.toggle("show");
  }