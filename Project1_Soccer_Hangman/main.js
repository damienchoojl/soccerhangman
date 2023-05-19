/*----- constants -----*/
const mainPageName = prompt("Enter your name: ");
const mainPageTitle = document.querySelector("h1");
mainPageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
const gamePageTitle = document.querySelector("#gamePageTitle");

/*----- state variables -----*/
let categories = "";
const premierLeagueQuestion = ["A", "B", "C"];
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

// Label
const bodyMessage = document.querySelector("h2");
const gamePageLabel = document.querySelector("#gamePageLabel");
const mainPageLabel = document.querySelector("#mainPageLabel");
const hintLabel = document.querySelector("h4");
const questionLabel = document.querySelector("#questionLabel");

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

/*----- functions -----*/
// Convert Questions to _

// Shuffle PL Question
function shufflePLArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// Shuffle LaLiga Question
function shuffleLLArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// Shuffle Serie A Question
function shuffleSAArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// Shuffle Ligue 1 Question
function shuffleL1Array(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Calling ShuffledArrays function
shuffledPLArray = shufflePLArray(premierLeagueQuestion);
shuffledLLArray = shuffleLLArray(laLigaQuestion);
shuffledSAArray = shuffleLLArray(serieAQuestion);
shuffledL1Array = shuffleL1Array(ligue1Question);

// Assigning new random shuffled array
randomshuffledPLArray =
  shuffledPLArray[Math.floor(Math.random() * shuffledPLArray.length)];
randomshuffledLLArray =
  shuffledLLArray[Math.floor(Math.random() * shuffledLLArray.length)];
randomshuffledSAArray =
  shuffledSAArray[Math.floor(Math.random() * shuffledSAArray.length)];
randomshuffledL1Array =
  shuffledL1Array[Math.floor(Math.random() * shuffledL1Array.length)];

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
    if (randomshuffledPLArray === "A") {
      hintLabel.innerText = "Hi";
    } else if (randomshuffledPLArray === "B") {
      hintLabel.innerText = "Hello";
    } else if (randomshuffledPLArray === "C") {
      hintLabel.innerText = "Yo";
    }
  } else if (categories === "La Liga") {
    if (randomshuffledLLArray === "D") {
      hintLabel.innerText = "Lilo";
    } else if (randomshuffledLLArray === "E") {
      hintLabel.innerText = "Damien";
    } else if (randomshuffledLLArray === "F") {
      hintLabel.innerText = "hehe";
    }
  } else if (categories === "Serie A") {
    if (randomshuffledSAArray === "G") {
      hintLabel.innerText = "Test";
    } else if (randomshuffledSAArray === "H") {
      hintLabel.innerText = "Happy";
    } else if (randomshuffledSAArray === "I") {
      hintLabel.innerText = "Sad";
    }
  } else if (categories === "Ligue 1") {
    if (randomshuffledL1Array === "J") {
      hintLabel.innerText = "Angry";
    } else if (randomshuffledL1Array === "K") {
      hintLabel.innerText = "Whale";
    } else if (randomshuffledL1Array === "L") {
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
  questionLabel.innerText = randomshuffledPLArray;
}

function handleLaLigaButton() {
  mainPage.classList.add("hide");
  gamePage.classList.remove("hide");
  mainPageLabel.classList.add("hide");
  bodyMessage.classList.add("hide");
  gamePageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
  categories = "La Liga";
  gamePageLabel.innerText = `The Category You Chose is ${categories}`;
  questionLabel.innerText = randomshuffledLLArray;
}

function handleSerieAButton() {
  mainPage.classList.add("hide");
  gamePage.classList.remove("hide");
  mainPageLabel.classList.add("hide");
  bodyMessage.classList.add("hide");
  gamePageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
  categories = "Serie A";
  gamePageLabel.innerText = `The Category You Chose is ${categories}`;
  questionLabel.innerText = randomshuffledSAArray;
}

function handleLigue1Button() {
  mainPage.classList.add("hide");
  gamePage.classList.remove("hide");
  mainPageLabel.classList.add("hide");
  bodyMessage.classList.add("hide");
  gamePageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
  categories = "Ligue 1";
  gamePageLabel.innerText = `The Category You Chose is ${categories}`;
  questionLabel.innerText = randomshuffledL1Array;
}

// // Timer
// `setInterval(() => {
//   console.log("Beep");
// }, 3000);
// `;
