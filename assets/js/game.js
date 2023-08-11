let words = ["testOne", "testTwo", "testThree", "testFour"];

const game = {
    currentWord: "",
    currentWordArray: [],
    letterElements: [],
    lettersRemaining: 0,
};

const sButton = document.querySelector("button");
sButton.addEventListener("click", startGame);

function startGame() {
    console.log("testOutput");
    game.currentWord = "";
    game.currentWordArray = "";
    game.lettersremaining = 0;
    getWord();
}

function getWord() {
    let num = Math.floor(Math.random() * 4);
    game.currentWord = words[num];
    console.log(game.currentWord);
    console.log(num);
}