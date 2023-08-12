let words = ["testOne", "testTwo", "testThree", "testFour"];

const game = {
    currentWord: "",
    currentWordArray: [],
    letterElements: [],
    lettersRemaining: 0,
};

let wordOut = document.querySelector(".current_word");

const sButton = document.querySelector("button");
sButton.addEventListener("click", startGame);

function startGame() {
    console.log("testOutput");
    game.currentWord = "";
    game.currentWordArray = "";
    game.lettersremaining = 0;
    getWord();
    createPuzzle();
}

function getWord() {
    let num = Math.floor(Math.random() * 4);
    game.currentWord = words[num];
    console.log(game.currentWord);
    console.log(num);
    game.currentWordArray = game.currentWord.split("");
    console.log(game.currentWordArray);
}

function createPuzzle() {
    wordOut.textContent = game.currentWord;
}