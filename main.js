/*----- constants -----*/
const mainPageName = prompt("Enter your name: ");
const mainPageTitle = document.querySelector("h1");
mainPageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
const gamePageTitle = document.querySelector("#gamePageTitle");

/*----- state variables -----*/
let categories = ["Premier League", "La Liga", "Serie A", "Ligue 1"];
let word = "";
let numOfWrong = 0;
let guess;
let allGuessed;
let convertedWord;
let convertedWordsPL;
let convertedWordsLL;
let convertedWordsSA;
let convertedWordsL1;
const premierLeagueQuestion = [
  "LIVERPOOL",
  "CHELSEA",
  "ARSENAL",
  "MANUNITED",
  "TOTTENHAM",
  "MANCITY",
];
const laLigaQuestion = [
  "REALMADRID",
  "BARCELONA",
  "ATLETICOMADRID",
  "SEVILLA",
  "VILLARREAL",
  "VALENCIA",
];
const serieAQuestion = [
  "ACMILAN",
  "INTERMILAN",
  "JUVENTUS",
  "NAPOLI",
  "ROMA",
  "FIORENTINA",
];
const ligue1Question = ["PSG", "MARSEILLE", "MONACO", "LYON", "LOSC", "RENNES"];

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
const rightWrongMessage = document.querySelector("#rightWrongMessage");

// Input
const answerInput = document.querySelector("#answerInput");

// Canvas
const canvas = document.querySelector("#stickman");

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
// Button functions
function handleClearButton() {
  answerInput.value = "";
}

function handleRestartButton() {
  gamePage.classList.add("hide");
  mainPage.classList.remove("hide");
  mainPageLabel.classList.remove("hide");
  numOfWrong = 0;
}

function handleHintButton() {
  hintLabel.classList.remove("hide");
  if (categories === "Premier League") {
    if (word === "LIVERPOOL") {
      hintLabel.innerText = "The Club Who Won 6 Champions League Titles";
    } else if (word === "CHELSEA") {
      hintLabel.innerText = "The Club Who Was Managed By Jose Mourinho";
    } else if (word === "ARSENAL") {
      hintLabel.innerText =
        "The Club Who Won The Golden Premier League (Year 2003-2004)";
    } else if (word === "MANUNITED") {
      hintLabel.innerText = "The Club Who Won The Treble in Year 2007-2008";
    } else if (word === "TOTTENHAM") {
      hintLabel.innerText = "The Club Where Son Heung Min Plays For";
    } else if (word === "MANCITY") {
      hintLabel.innerText =
        "The Club Who Alf-Inge Haaland Played For (Year 2000-2003)";
    }
  } else if (categories === "La Liga") {
    if (word === "REALMADRID") {
      hintLabel.innerText = "The Club Who Won The Most Champions League Title";
    } else if (word === "BARCELONA") {
      hintLabel.innerText = "The Club Where Messi Used To Play For";
    } else if (word === "ATLETICOMADRID") {
      hintLabel.innerText = "Fernando Torres' Boyhood Club";
    } else if (word === "SEVILLA") {
      hintLabel.innerText = "The Club Who Won The Most Europa League Title";
    } else if (word === "VILLARREAL") {
      hintLabel.innerText =
        "The Club Whose Nickname Is Known As Yellow Submarine";
    } else if (word === "VALENCIA") {
      hintLabel.innerText = "The Club Whose Owner Is A Singaporean";
    }
  } else if (categories === "Serie A") {
    if (word === "ACMILAN") {
      hintLabel.innerText = "The Club Who Won 7 Champions League Titles";
    } else if (word === "INTERMILAN") {
      hintLabel.innerText = "The Club Who Won The Treble in Year 2009-2010";
    } else if (word === "JUVENTUS") {
      hintLabel.innerText =
        "The Club Whose Most Expensive Signing Is Cristiano Ronaldo";
    } else if (word === "NAPOLI") {
      hintLabel.innerText =
        "The Club's All-time Leading Goalscorer is Diego Maradona";
    } else if (word === "ROMA") {
      hintLabel.innerText =
        "The Club Who Won The Inaugural Europa Conference League Title in 2022";
    }
  } else if (categories === "Ligue 1") {
    if (word === "PSG") {
      hintLabel.innerText = "The Club That Mbappe Played For";
    } else if (word === "MARSEILLE") {
      hintLabel.innerText =
        "The Club That Won The Champions League in Year 1992";
    } else if (word === "MONACO") {
      hintLabel.innerText = "Thierry Henry Used To Play For (Year 1994-1999)";
    } else if (word === "LYON") {
      hintLabel.innerText = "Karim Benzema Used To Play For (Year 2004-2009(";
    }
  }
}

function handlePremierLeagueButton() {
  categories = "Premier League";
  startHangman();
  let { hookFrame } = stickmanCreator();
  hookFrame();
}

function handleLaLigaButton() {
  categories = "La Liga";
  startHangman();
  let { hookFrame } = stickmanCreator();
  hookFrame();
}

function handleSerieAButton() {
  categories = "Serie A";
  startHangman();
  let { hookFrame } = stickmanCreator();
  hookFrame();
}

function handleLigue1Button() {
  categories = "Ligue 1";
  startHangman();
  let { hookFrame } = stickmanCreator();
  hookFrame();
}

function handleGuessButton() {
  guess = answerInput.value.toUpperCase();
  if (guess.length !== 1) {
    rightWrongMessage.innerText = "Please Enter A Single Letter As Your Guess!";
    return;
  }

  if (categories === "Premier League") {
    convertedWord = convertedWordsPL.split(" ");
    checkWords();
    convertedWordsPL = convertedWord.join(" ");
    questionLabel.innerText = convertedWordsPL;
  } else if (categories === "La Liga") {
    convertedWord = convertedWordsLL.split(" ");
    checkWords();
    convertedWordsLL = convertedWord.join(" ");
    questionLabel.innerText = convertedWordsLL;
  } else if (categories === "Serie A") {
    convertedWord = convertedWordsSA.split(" ");
    checkWords();
    convertedWordsSA = convertedWord.join(" ");
    questionLabel.innerText = convertedWordsSA;
  } else if (categories === "Ligue 1") {
    convertedWord = convertedWordsL1.split(" ");
    checkWords();
    convertedWordsL1 = convertedWord.join(" ");
    questionLabel.innerText = convertedWordsL1;
  }
}

// Convert Questions to "_" function
function getRandomWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length);
  word = words[randomIndex]; //
  const underscoreWord = word
    .split("")
    .map((questionLabel) => (questionLabel === " " ? " " : "_"))
    .join(" ");
  return underscoreWord;
}

// Start Game function
function startHangman() {
  mainPage.classList.add("hide");
  gamePage.classList.remove("hide");
  mainPageLabel.classList.add("hide");
  hintLabel.classList.add("hide");
  bodyMessage.classList.add("hide");
  restartButton.classList.add("hide");
  guessButton.classList.remove("hide");
  clearButton.classList.remove("hide");
  hintButton.classList.remove("hide");
  rightWrongMessage.innerText = "";
  answerInput.disabled = false;
  gamePageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;

  if (categories === "Premier League") {
    gamePageLabel.innerText = `The Category You Chose is ${categories}`;
    convertedWordsPL = getRandomWord(premierLeagueQuestion);
    questionLabel.innerText = convertedWordsPL;
  } else if (categories === "La Liga") {
    gamePageLabel.innerText = `The Category You Chose is ${categories}`;
    convertedWordsLL = getRandomWord(laLigaQuestion);
    questionLabel.innerText = convertedWordsLL;
  } else if (categories === "Serie A") {
    gamePageLabel.innerText = `The Category You Chose is ${categories}`;
    convertedWordsSA = getRandomWord(serieAQuestion);
    questionLabel.innerText = convertedWordsSA;
  } else if (categories === "Ligue 1") {
    gamePageLabel.innerText = `The Category You Chose is ${categories}`;
    convertedWordsL1 = getRandomWord(ligue1Question);
    questionLabel.innerText = convertedWordsL1;
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

// Comparing Words Function
function checkWords() {
  let allGuessed = true; // Flag to track if all letters are guessed correctly
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === guess) {
      if (convertedWord[i] === guess) {
        // To check if user key in the same correct letter
        rightWrongMessage.innerText = "You Have Already Guessed This Letter!";
        answerInput.value = "";
        return;
      }
      convertedWord[i] = guess;
    } else if (convertedWord[i] !== word.charAt(i)) {
      allGuessed = false; // Set flag to false if any letter is not guessed correctly
    }
  }
  if (allGuessed) {
    rightWrongMessage.innerText = "Well Done! You Guessed It!"; // Display "Well done, you guessed it!" if all letters are guessed correctly
    restartButton.classList.remove("hide");
    guessButton.classList.add("hide");
    hintButton.classList.add("hide");
    clearButton.classList.add("hide");
    answerInput.disabled = true;
  } else if (convertedWord.includes(guess)) {
    rightWrongMessage.innerText = "Correct!"; // Display "Correct" if at least one letter matches
  } else {
    rightWrongMessage.innerText = "Wrong!"; // Display "Wrong" if no letter matches
    numOfWrong += 1;
    drawStickMan(numOfWrong);
    if (numOfWrong == 6) {
      rightWrongMessage.innerText = "Game Over Loser!";
      restartButton.classList.remove("hide");
      guessButton.classList.add("hide");
      hintButton.classList.add("hide");
      clearButton.classList.add("hide");
      answerInput.disabled = true;
    }
  }
  answerInput.value = ""; // Clear the input field after guessing
}

//Canvas - Stickman Animation
function stickmanCreator() {
  let context = canvas.getContext("2d");
  context.strokeStyle = "black";
  context.lineWidth = 2;

  //For drawing StickMan
  function drawStickManParts(startX, startY, endX, endY) {
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();
  }

  function head() {
    context.beginPath();
    context.arc(150, 30, 10, 100, Math.PI, true);
    context.stroke();
  }

  function body() {
    drawStickManParts(150, 40, 150, 80);
  }

  function leftHand() {
    drawStickManParts(150, 50, 120, 70);
  }

  function rightHand() {
    drawStickManParts(150, 50, 180, 70);
  }

  function leftLeg() {
    drawStickManParts(150, 80, 130, 110);
  }

  function rightLeg() {
    drawStickManParts(150, 80, 170, 110);
  }

  //initial frame
  function hookFrame() {
    //clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    //bottom line
    drawStickManParts(75, 130, 230, 130);
    //left line
    drawStickManParts(100, 10, 100, 131);
    //top line
    drawStickManParts(100, 10, 150, 10);
    //small top line
    drawStickManParts(150, 10, 150, 20);
  }

  return {
    hookFrame,
    head,
    body,
    leftHand,
    rightHand,
    leftLeg,
    rightLeg,
  };
}

function drawStickMan(numOfWrong) {
  let { head, body, leftHand, rightHand, leftLeg, rightLeg } =
    stickmanCreator();
  switch (numOfWrong) {
    case 1:
      head();
      break;
    case 2:
      body();
      break;
    case 3:
      leftHand();
      break;
    case 4:
      rightHand();
      break;
    case 5:
      leftLeg();
      break;
    case 6:
      rightLeg();
      break;
    default:
      break;
  }
}
