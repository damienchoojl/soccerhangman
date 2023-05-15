/*----- constants -----*/
const mainPageName = prompt("Enter your name: ");
const mainPageTitle = document.querySelector("h1");
mainPageTitle.innerText = `Welcome to Soccer Hangman, ${mainPageName}!`;

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

/*----- event listeners -----*/
premierLeagueButton.addEventListener("click", handlePremierLeagueButton);

/*----- functions -----*/
function handlePremierLeagueButton() {
  mainPage.classList.add("hide");
  gamePage.classList.remove("hide");
  bodyMessage.classList.add("hide");
}
