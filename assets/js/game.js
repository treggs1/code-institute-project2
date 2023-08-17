let words = ["testOne", "testTwo", "test Three", "testFour"];

const game = {
    currentWord: "",
    currentSolution: "",
    currentWordArray: [],
    letterElements: [],
    lettersRemaining: 0,
};

const wordOut = document.querySelector(".current_word");
const scoreOut = document.querySelector(".score");
const sButton = document.querySelector("button");
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
    getWord();
    createPuzzle();
    setEventLis();
    updateScore();
}
 
/**
 * Function sets up event listeners on the letter divs for user input
 */
function setEventLis() {
    let elements = document.querySelectorAll("#lettrs");
    
    elements.forEach((item) => {
        item.addEventListener('click', function() {
            checker(item, item.textContent);
        });
    });
}    

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
        if (letr == " ") {
            div.style.borderColor = "white";
            div.textContent = " ";
        } else {
            game.lettersRemaining++;
        }
        game.currentWordArray.push(div);
        //update total
        console.log(game.currentWordArray);
        console.log(game.lettersRemaining);
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
            updateScore();
        }
    });

    if (isCorrect) {
        element.classList.remove("letters_norm");
        element.classList.add("letters_correct");
    } else {
        element.classList.remove("letters_norm");
        element.classList.add("letters_wrong");
    }
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
    scoreOut.textContent = `Letters Left: ${game.lettersRemaining}`;
}