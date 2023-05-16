/*----- constants -----*/
const mainPageName = prompt("Enter your name: ");
const mainPageTitle = document.querySelector("h1");
mainPageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
const gamePageTitle = document.querySelector("#gamePageTitle");

/*----- state variables -----*/
let categories = "";

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
const hintLabel = document.querySelector("#hintLabel");

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
    hintLabel.innerText = "Hi";
  } else if (categories === "La Liga") {
    hintLabel.innerText = "A";
  } else if (categories === "Serie A") {
    hintLabel.innerText = "B";
  } else if (categories === "Ligue 1") {
    hintLabel.innerText = "C";
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
}

function handleLaLigaButton() {
  mainPage.classList.add("hide");
  gamePage.classList.remove("hide");
  mainPageLabel.classList.add("hide");
  bodyMessage.classList.add("hide");
  gamePageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
  categories = "La Liga";
  gamePageLabel.innerText = `The Category You Chose is ${categories}`;
}

function handleSerieAButton() {
  mainPage.classList.add("hide");
  gamePage.classList.remove("hide");
  mainPageLabel.classList.add("hide");
  bodyMessage.classList.add("hide");
  gamePageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
  categories = "Serie A";
  gamePageLabel.innerText = `The Category You Chose is ${categories}`;
}

function handleLigue1Button() {
  mainPage.classList.add("hide");
  gamePage.classList.remove("hide");
  mainPageLabel.classList.add("hide");
  bodyMessage.classList.add("hide");
  gamePageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
  categories = "Ligue 1";
  gamePageLabel.innerText = `The Category You Chose is ${categories}`;
}

// // Timer
// `setInterval(() => {
//   console.log("Beep");
// }, 3000);
// `;
