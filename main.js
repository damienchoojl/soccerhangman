/*----- constants -----*/
const mainPageName = prompt("Enter your name: ");
const mainPageTitle = document.querySelector("h1");
mainPageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
const gamePageTitle = document.querySelector("#gamePageTitle");

/*----- state variables -----*/
let categories = ["Premier League", "La Liga", "Serie A", "Ligue 1"];
let lives = 10;
let word = "";
let convertedWordsPL;
let convertedWordsLL;
let convertedWordsSA;
let convertedWordsL1;
const premierLeagueQuestion = ["TEST", "HELLO", "HI"];
const laLigaQuestion = ["D", "E", "F"];
const serieAQuestion = ["G", "H", "I"];
const ligue1Question = ["J", "K", "L"];

/*----- cached elements  -----*/
// Pages
const mainPage = document.querySelector("#mainPage");
const gamePage = document.querySelector("#gamePage");

// Buttons
const premierLeagueButton = document.querySelector("#premierLeagueButton");
const laLigaButton = document.querySelector("#laLigaButton");
const serieAButton = document.querySelector("#serieAButton");
const ligue1Button = document.querySelector("#ligue1Button");
const clearButton = document.querySelector("#clearButton");
const restartButton = document.querySelector("#restartButton");
const hintButton = document.querySelector("#hintButton");
const guessButton = document.querySelector("#guessButton");

// Label
const bodyMessage = document.querySelector("h2");
const gamePageLabel = document.querySelector("#gamePageLabel");
const mainPageLabel = document.querySelector("#mainPageLabel");
const hintLabel = document.querySelector("h4");
const questionLabel = document.querySelector("#questionLabel");
const showLives = document.querySelector("#myLives");
const rightWrongMessage = document.querySelector("#rightWrongMessage");

// Input
const answerInput = document.querySelector("#answerInput");

/*----- event listeners -----*/
premierLeagueButton.addEventListener("click", handlePremierLeagueButton);
laLigaButton.addEventListener("click", handleLaLigaButton);
serieAButton.addEventListener("click", handleSerieAButton);
ligue1Button.addEventListener("click", handleLigue1Button);
clearButton.addEventListener("click", handleClearButton);
restartButton.addEventListener("click", handleRestartButton);
hintButton.addEventListener("click", handleHintButton);
guessButton.addEventListener("click", handleGuessButton);

/*----- functions -----*/
// Convert Questions to _
function getRandomWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length);
  word = words[randomIndex]; //
  const underscoreWord = word
    .split("")
    .map((questionLabel) => (questionLabel === " " ? " " : "_"))
    .join(" ");
  return underscoreWord;
}

function startHangman() {
  if (categories === "Premier League") {
    convertedWordsPL = getRandomWord(premierLeagueQuestion);
    console.log(convertedWordsPL);
  } else if (categories === "La Liga") {
    convertedWordsLL = getRandomWord(laLigaQuestion);
  } else if (categories === "Serie A") {
    convertedWordsSA = getRandomWord(serieAQuestion);
  } else if (categories === "Ligue 1") {
    convertedWordsL1 = getRandomWord(ligue1Question);
  }

  convertedWordsPL =
    convertedWordsPL || premierLeagueQuestion.map(() => "_").join(" ");
  convertedWordsLL =
    convertedWordsLL || laLigaQuestion.map(() => "_").join(" ");
  convertedWordsSA =
    convertedWordsSA || serieAQuestion.map(() => "_").join(" ");
  convertedWordsL1 =
    convertedWordsL1 || ligue1Question.map(() => "_").join(" ");
}

// Button functions
function handleClearButton() {
  answerInput.value = "";
}

function handleRestartButton() {
  gamePage.classList.add("hide");
  mainPage.classList.remove("hide");
  mainPageLabel.classList.remove("hide");
}

function handleHintButton() {
  hintLabel.classList.remove("hide");
  if (categories === "Premier League") {
    if (word === "HI") {
      hintLabel.innerText = "Hi";
    } else if (word === "TEST") {
      hintLabel.innerText = "Hello";
    } else if (word === "HELLO") {
      hintLabel.innerText = "Yo";
    }
  } else if (categories === "La Liga") {
    if (word === "D") {
      hintLabel.innerText = "Lilo";
    } else if (word === "E") {
      hintLabel.innerText = "Damien";
    } else if (word === "F") {
      hintLabel.innerText = "hehe";
    }
  } else if (categories === "Serie A") {
    if (word === "G") {
      hintLabel.innerText = "Test";
    } else if (word === "H") {
      hintLabel.innerText = "Happy";
    } else if (word === "I") {
      hintLabel.innerText = "Sad";
    }
  } else if (categories === "Ligue 1") {
    if (word === "J") {
      hintLabel.innerText = "Angry";
    } else if (word === "K") {
      hintLabel.innerText = "Whale";
    } else if (word === "L") {
      hintLabel.innerText = "Cat";
    }
  }
}

function handlePremierLeagueButton() {
  categories = "Premier League";
  startHangman();
  mainPage.classList.add("hide");
  gamePage.classList.remove("hide");
  mainPageLabel.classList.add("hide");
  bodyMessage.classList.add("hide");
  gamePageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
  gamePageLabel.innerText = `The Category You Chose is ${categories}`;
  questionLabel.innerText = convertedWordsPL;
  console.log(convertedWordsPL);
}

function handleLaLigaButton() {
  categories = "La Liga";
  startHangman();
  mainPage.classList.add("hide");
  gamePage.classList.remove("hide");
  mainPageLabel.classList.add("hide");
  bodyMessage.classList.add("hide");
  gamePageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
  gamePageLabel.innerText = `The Category You Chose is ${categories}`;
  questionLabel.innerText = convertedWordsLL;
}

function handleSerieAButton() {
  categories = "Serie A";
  startHangman();
  mainPage.classList.add("hide");
  gamePage.classList.remove("hide");
  mainPageLabel.classList.add("hide");
  bodyMessage.classList.add("hide");
  gamePageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
  gamePageLabel.innerText = `The Category You Chose is ${categories}`;
  questionLabel.innerText = convertedWordsSA;
}

function handleLigue1Button() {
  categories = "Ligue 1";
  startHangman();
  mainPage.classList.add("hide");
  gamePage.classList.remove("hide");
  mainPageLabel.classList.add("hide");
  bodyMessage.classList.add("hide");
  gamePageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
  gamePageLabel.innerText = `The Category You Chose is ${categories}`;
  questionLabel.innerText = convertedWordsL1;
}

function handleGuessButton() {
  const guess = answerInput.value.toUpperCase();

  if (guess.length !== 1) {
    alert("Please enter a single letter as your guess!");
    return;
  }

  let convertedWord;
  let isCorrect = false;

  if (categories === "Premier League") {
    convertedWord = convertedWordsPL.split(" ");
    premierLeagueQuestion.forEach((word, index) => {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          convertedWord[i] = guess;
          isCorrect = true; // Mark as correct if a letter matches
        }
      }
    });
    convertedWordsPL = convertedWord.join(" ");
    questionLabel.innerText = convertedWordsPL;
  } else if (categories === "La Liga") {
    convertedWord = convertedWordsLL.split(" ");
    laLigaQuestion.forEach((word, index) => {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          convertedWord[i] = guess;
          isCorrect = true; // Mark as correct if a letter matches
        }
      }
    });
    convertedWordsLL = convertedWord.join(" ");
    questionLabel.innerText = convertedWordsLL;
  } else if (categories === "Serie A") {
    convertedWord = convertedWordsSA.split(" ");
    serieAQuestion.forEach((word, index) => {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          convertedWord[i] = guess;
          isCorrect = true; // Mark as correct if a letter matches
        }
      }
    });
    convertedWordsSA = convertedWord.join(" ");
    questionLabel.innerText = convertedWordsSA;
  } else if (categories === "Ligue 1") {
    convertedWord = convertedWordsL1.split(" ");
    ligue1Question.forEach((word, index) => {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          convertedWord[i] = guess;
          isCorrect = true; // Mark as correct if a letter matches
        }
      }
    });
    convertedWordsL1 = convertedWord.join(" ");
    questionLabel.innerText = convertedWordsL1;
  }

  if (isCorrect) {
    if (
      convertedWordsPL.replace(/\s/g, "") ===
        premierLeagueQuestion.join("").toUpperCase() ||
      convertedWordsLL.replace(/\s/g, "") ===
        laLigaQuestion.join("").toUpperCase() ||
      convertedWordsSA.replace(/\s/g, "") ===
        serieAQuestion.join("").toUpperCase() ||
      convertedWordsL1.replace(/\s/g, "") ===
        ligue1Question.join("").toUpperCase()
    ) {
      rightWrongMessage.innerText = "Well done!"; // Display "Well done" if the entire answer is correct
    } else {
      rightWrongMessage.innerText = "Correct!"; // Display "Correct" if a letter matches
    }
  } else {
    rightWrongMessage.innerText = "Wrong!"; // Display "Wrong" if no letter matches
  }

  answerInput.value = ""; // Clear the input field after guessing
}

// // Hangman
// // Function to draw the stickman
// function drawStickman() {
//   context.beginPath();
//   context.arc(60, 25, 10, 0, Math.PI * 2, false); // Head
//   context.moveTo(60, 35);
//   context.lineTo(60, 50); // Body
//   context.lineTo(40, 70); // Left leg
//   context.moveTo(60, 50);
//   context.lineTo(80, 70); // Right leg
//   context.moveTo(60, 50);
//   context.lineTo(40, 45); // Left arm
//   context.moveTo(60, 50);
//   context.lineTo(80, 45); // Right arm
//   context.stroke();
// }

// // Function to update the stickman
// canvas = function updateStickman() {
//   const parts = ["head", "body", "leftLeg", "rightLeg", "leftArm", "rightArm"];
//   const missedParts = parts.slice(-lives);

//   missedParts.forEach((part) => {
//     switch (part) {
//       case "head":
//         // Draw head
//         context.beginPath();
//         context.arc(60, 25, 10, 0, Math.PI * 2, false);
//         context.stroke();
//         break;
//       case "body":
//         // Draw body
//         context.moveTo(60, 35);
//         context.lineTo(60, 50);
//         context.stroke();
//         break;
//       case "leftLeg":
//         // Draw left leg
//         context.moveTo(60, 50);
//         context.lineTo(40, 70);
//         context.stroke();
//         break;
//       case "rightLeg":
//         // Draw right leg
//         context.moveTo(60, 50);
//         context.lineTo(80, 70);
//         context.stroke();
//         break;
//       case "leftArm":
//         // Draw left arm
//         context.moveTo(60, 50);
//         context.lineTo(40, 45);
//         context.stroke();
//         break;
//       case "rightArm":
//         // Draw right arm
//         context.moveTo(60, 50);
//         context.lineTo(80, 45);
//         context.stroke();
//         break;
//       default:
//         break;
//     }
//   });
// };

// // Function to handle wrong guess
// function handleWrongGuess() {
//   updateStickman();
//   lives--;

//   if (lives === 0) {
//     // Game over logic
//     bodyMessage.classList.remove("hide");
//     bodyMessage.innerText = "Game Over! You've run out of lives.";
//     guessButton.disabled = true; // Disable the guess button
//   } else {
//     // Update UI with remaining lives
//     showLives.innerText = `Lives: ${lives}`;
//   }
// }
// // Timer
// `setInterval(() => {
//   console.log("Beep");
// }, 3000);
// `;
