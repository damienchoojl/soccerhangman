/*----- constants -----*/
const mainPageName = prompt("Enter your name: ");
const mainPageTitle = document.querySelector("h1");
mainPageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
const gamePageTitle = document.querySelector("#gamePageTitle");

/*----- state variables -----*/

/*----- cached elements  -----*/
// Pages
const mainPage = document.querySelector("#mainPage");
const gamePage = document.querySelector("#gamePage");

// Buttons
const premierLeagueButton = document.querySelector("#premierLeagueButton");
const laLigaButton = document.querySelector("#laLigaButton");
const seriaAButton = document.querySelector("#seriaAButton");
const ligue1Button = document.querySelector("#ligue1Button");

// Label
const bodyMessage = document.querySelector("h2");
const gamePageLabel = document.querySelector("#gamePageLabel");

/*----- event listeners -----*/
premierLeagueButton.addEventListener("click", handlePremierLeagueButton);
laLigaButton.addEventListener("click", handleLaLigaButton);
seriaAButton.addEventListener("click", handleSeriaAButton);
ligue1Button.addEventListener("click", handleLigue1Button);

/*----- functions -----*/
function handlePremierLeagueButton() {
  mainPage.classList.add("hide");
  gamePage.classList.remove("hide");
  bodyMessage.classList.add("hide");
  gamePageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
  gamePageLabel.innerText = "The Category You Chose is Premier League";
}

function handleLaLigaButton() {
  mainPage.classList.add("hide");
  gamePage.classList.remove("hide");
  bodyMessage.classList.add("hide");
  gamePageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
  gamePageLabel.innerText = "The Category You Chose is La Liga";
}

function handleSeriaAButton() {
  mainPage.classList.add("hide");
  gamePage.classList.remove("hide");
  bodyMessage.classList.add("hide");
  gamePageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
  gamePageLabel.innerText = "The Category You Chose is Seria A";
}

function handleLigue1Button() {
  mainPage.classList.add("hide");
  gamePage.classList.remove("hide");
  bodyMessage.classList.add("hide");
  gamePageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;
  gamePageLabel.innerText = "The Category You Chose is Ligue 1";
}

// // Timer
// `setInterval(() => {
//   console.log("Beep");
// }, 3000);
// `;
