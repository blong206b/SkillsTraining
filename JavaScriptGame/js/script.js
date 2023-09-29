const guessList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const input = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const remain = document.querySelector(".remaining");
const span = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

let word = "magnolia";
let guessLetters = [];
let remainingGuesses = 8;

const getWord = async function() {
    const response = await fetch(
        "https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await response.text();
    const wordArray = words.split("\n");
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    word = wordArray[randomIndex].trim();
    placeholder(word);
};
getWord();

const placeholder = function(word) {
    const placeholderLetters = [];
    for (const letter of word) {
        //  console.log(letter);
        placeholderLetters.push("●");
    }
    wordProgress.innerText = placeholderLetters.join("");
};

guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    message.innerText = "";
    const guess = input.value;
    const goodGuess = validInput(guess);
    if (goodGuess) {
        makeGuess(guess);
    }
    input.value = "";
});

const validInput = function(input) {
    const acceptLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptLetter)) {
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        return input;
    }
};
const makeGuess = function(guess) {
    guess = guess.toUpperCase();
    if (guessLetters.includes(guess)) {
        message.innerText = "You already guessed that letter. Please try again."
    } else {
        guessLetters.push(guess);
        console.log(guessLetters);
        updateRemaining(guess);
        showLetters();
        updateProgress(guessLetters);
    }
};
const showLetters = function() {
    guessList.innerHTML = "";
    for (const letter of guessLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessList.append(li);
    }
};

const updateProgress = function(guessLetters) {
    const upperCase = word.toUpperCase();
    const wordArray = upperCase.split("");
    //  console.log(wordArray);
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●");
        }
    }
    wordProgress.innerText = revealWord.join("");
    checkWin();
};

const updateRemaining = function(guess) {
    const upperCase = word.toUpperCase();
    if (!upperCase.includes(guess)) {
        message.innerText = `Sorry, wrong ${guess}.`;
        remainingGuesses -= 1;
    } else {
        message.innerText = `Good guess! The word has the letter ${guess} in it.`;
    }
    if (remainingGuesses === 0) {
        message.innerHTML = `Game over! The word was <span class="highlight">${word}</span>.`;
        startOver();
    } else if (remainingGuesses === 1) {
        span.innerText = `${remainingGuesses} guess`;
    } else {
        span.innerText = `${remainingGuesses} guess`;
    }
};

const checkWin = function() {
    if (word.toUpperCase() === wordProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
        startOver();
    }
};

const startOver = function() {
    guessButton.classList.add("hide");
    remain.classList.add("hide");
    guessList.classList.add("hide");
    playAgain.classList.remove("hide");
};

playAgain.addEventListener("click", function() {
    message.classList.remove("win");
    guessLetters = [];
    remainingGuesses = 8;
    span.innerText = `${remainingGuesses} guesses`;
    guessList.innerHTML = "";
    message.innerText = "";
    getWord();
    guessButton.classList.remove("hide");
    remain.classList.remove("hide");
    guessList.classList.remove("hide");
    playAgain.classList.add("hide");
});