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
    setEventLis();
}
/* 
function setEventLis() {
    let elements = document.querySelectorAll("#lettrs");
    elements.forEach((item) => {
        item.addEventListener('click', checker())
    });
}    
*/
function getWord() {
    let num = Math.floor(Math.random() * 4);
    game.currentWord = words[num];
    console.log(game.currentWord);
    console.log(num);
    game.currentWordArray = game.currentWord.split("");
    console.log(game.currentWordArray);
}

function createPuzzleElements(elementType, parentEl, output, cls) {
    const temp = document.createElement(elementType);
    temp.classList.add(cls);
    parentEl.append(temp);
    temp.textContent = output;
    return temp;
}

function createPuzzle() {
    wordOut.innerHTML = "";
    game.currentWordArray.forEach((letr) => {
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
    });

}

function checker(element, checkLett) {
    element.classList.remove("letters_norm");
    element.classList.add("letters_correct");
    console.log(checkLett);
    console.log(element);
}