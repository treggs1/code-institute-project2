let words = ["testOne", "testTwo", "testThree", "testFour"];

const game = {
    currentWord: "",
    currentSolution: "",
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
    game.currentWordArray = [];
    game.lettersremaining = 0;
    getWord();
    createPuzzle();
    setEventLis();
}
 
function setEventLis() {
    let elements = document.querySelectorAll("#lettrs");
    elements.forEach((item) => {
        item.addEventListener('click', function() {
            checker(item, item.textContent);
        });
    });
}    

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
    });

}

function checker(element, checkLett) {
    let isCorrect = false;
    
    game.currentSolution.forEach((lett, index) => {
        lett = lett.toString();
        if (lett.toUpperCase() === checkLett) {
            game.currentWordArray[index].textContent = checkLett;
            isCorrect = true;
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
}