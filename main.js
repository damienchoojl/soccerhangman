/*----- constants -----*/
const mainPageName = prompt("Enter your name: ");
const mainPageTitle = document.querySelector("h1");
mainPageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
const gamePageTitle = document.querySelector("#gamePageTitle");

/*----- state variables -----*/
let categories = "";
let lives = 10;
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
  const word = words[randomIndex];
  console.log(word);
  const underscoreWord = word
    .split("")
    .map((questionLabel) => (questionLabel === " " ? " " : "_"))
    .join(" ");
  return underscoreWord;
}

function startHangman() {
  convertedWordsPL = getRandomWord(premierLeagueQuestion);
  convertedWordsLL = getRandomWord(laLigaQuestion);
  convertedWordsSA = getRandomWord(serieAQuestion);
  convertedWordsL1 = getRandomWord(ligue1Question);
}
startHangman();

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
    if (convertedWordsPL === "_,_") {
      hintLabel.innerText = "Hi";
    } else if (convertedWordsPL === "_,_,_,_") {
      hintLabel.innerText = "Hello";
    } else if (convertedWordsPL === "_,_,_,_,_") {
      hintLabel.innerText = "Yo";
    }
  } else if (categories === "La Liga") {
    if (convertedWordsLL === "D") {
      hintLabel.innerText = "Lilo";
    } else if (convertedWordsLL === "E") {
      hintLabel.innerText = "Damien";
    } else if (convertedWordsLL === "F") {
      hintLabel.innerText = "hehe";
    }
  } else if (categories === "Serie A") {
    if (convertedWordsSA === "G") {
      hintLabel.innerText = "Test";
    } else if (convertedWordsSA === "H") {
      hintLabel.innerText = "Happy";
    } else if (convertedWordsSA === "I") {
      hintLabel.innerText = "Sad";
    }
  } else if (categories === "Ligue 1") {
    if (convertedWordsL1 === "J") {
      hintLabel.innerText = "Angry";
    } else if (convertedWordsL1 === "K") {
      hintLabel.innerText = "Whale";
    } else if (convertedWordsL1 === "L") {
      hintLabel.innerText = "Cat";
    }
  }
}

function handlePremierLeagueButton() {
  mainPage.classList.add("hide");
  gamePage.classList.remove("hide");
  mainPageLabel.classList.add("hide");
  bodyMessage.classList.add("hide");
  gamePageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
  categories = "Premier League";
  gamePageLabel.innerText = `The Category You Chose is ${categories}`;
  questionLabel.innerText = convertedWordsPL;
}

function handleLaLigaButton() {
  mainPage.classList.add("hide");
  gamePage.classList.remove("hide");
  mainPageLabel.classList.add("hide");
  bodyMessage.classList.add("hide");
  gamePageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
  categories = "La Liga";
  gamePageLabel.innerText = `The Category You Chose is ${categories}`;
  questionLabel.innerText = convertedWordsLL;
}

function handleSerieAButton() {
  mainPage.classList.add("hide");
  gamePage.classList.remove("hide");
  mainPageLabel.classList.add("hide");
  bodyMessage.classList.add("hide");
  gamePageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
  categories = "Serie A";
  gamePageLabel.innerText = `The Category You Chose is ${categories}`;
  questionLabel.innerText = convertedWordsSA;
}

function handleLigue1Button() {
  mainPage.classList.add("hide");
  gamePage.classList.remove("hide");
  mainPageLabel.classList.add("hide");
  bodyMessage.classList.add("hide");
  gamePageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
  categories = "Ligue 1";
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
