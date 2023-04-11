var $ltMAx$confettijs = require("confetti-js");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

const $4fa36e821943b400$var$confettiSettings = {
    target: "my-canvas"
};
const $4fa36e821943b400$var$confetti = new (0, ($parcel$interopDefault($ltMAx$confettijs)))($4fa36e821943b400$var$confettiSettings);
const $4fa36e821943b400$var$confettiId = document.querySelector("#my-canvas");
const $4fa36e821943b400$var$gameIcon = document.querySelectorAll(".player-container .fa-solid");
const $4fa36e821943b400$var$computerIcon = document.querySelectorAll(".player-computer .fa-solid");
const $4fa36e821943b400$var$rockComputer = document.querySelector("#rockComp");
const $4fa36e821943b400$var$paperComputer = document.querySelector("#paperComp");
const $4fa36e821943b400$var$scissorsComputer = document.querySelector("#scissorsComp");
const $4fa36e821943b400$var$lizardComputer = document.querySelector("#lizardComp");
const $4fa36e821943b400$var$spockComputer = document.querySelector("#spockComp");
const $4fa36e821943b400$var$markGamer = document.querySelector("#mark-gamer");
const $4fa36e821943b400$var$markComputer = document.querySelector("#mark-computer");
let $4fa36e821943b400$var$computerChoice;
const $4fa36e821943b400$var$resultText = document.querySelector(".result-text");
function $4fa36e821943b400$var$activeIcon(arrIcon, choiceIcon) {
    arrIcon.forEach((icon)=>icon.classList.remove("blue"));
    choiceIcon.classList.add("blue");
}
function $4fa36e821943b400$var$countingPoints(mark) {
    let value = Number(mark.innerHTML);
    value++;
    mark.innerHTML = value;
}
function $4fa36e821943b400$var$caseGame(choice) {
    switch(choice){
        case 1:
            $4fa36e821943b400$var$activeIcon($4fa36e821943b400$var$computerIcon, $4fa36e821943b400$var$rockComputer);
            choice = "rock";
            break;
        case 2:
            $4fa36e821943b400$var$activeIcon($4fa36e821943b400$var$computerIcon, $4fa36e821943b400$var$paperComputer);
            choice = "paper";
            break;
        case 3:
            $4fa36e821943b400$var$activeIcon($4fa36e821943b400$var$computerIcon, $4fa36e821943b400$var$scissorsComputer);
            choice = "scissors";
            break;
        case 4:
            $4fa36e821943b400$var$activeIcon($4fa36e821943b400$var$computerIcon, $4fa36e821943b400$var$lizardComputer);
            choice = "lizard";
            break;
        case 5:
            $4fa36e821943b400$var$activeIcon($4fa36e821943b400$var$computerIcon, $4fa36e821943b400$var$spockComputer);
            choice = "spock";
            break;
    }
    $4fa36e821943b400$var$computerChoice = choice;
}
function $4fa36e821943b400$var$randomChoice() {
    let randomNum = Math.ceil(Math.random() * 5);
    $4fa36e821943b400$var$caseGame(randomNum);
}
function $4fa36e821943b400$var$youDraw() {
    $4fa36e821943b400$var$resultText.innerHTML = "Draw!";
    $4fa36e821943b400$var$confettiId.classList.add("none");
}
function $4fa36e821943b400$var$youWon() {
    $4fa36e821943b400$var$resultText.innerHTML = "Won!";
    $4fa36e821943b400$var$countingPoints($4fa36e821943b400$var$markGamer);
    $4fa36e821943b400$var$confetti.render();
    $4fa36e821943b400$var$confettiId.classList.remove("none");
}
function $4fa36e821943b400$var$youLoss() {
    $4fa36e821943b400$var$resultText.innerHTML = "Loss!";
    $4fa36e821943b400$var$countingPoints($4fa36e821943b400$var$markComputer);
    $4fa36e821943b400$var$confettiId.classList.add("none");
}
function $4fa36e821943b400$var$determineWinner(gamer, computer) {
    console.log(gamer, computer);
    gamer === "rock" && computer === "scissors" || gamer === "paper" && computer === "rock" || gamer === "scissors" && computer === "paper" || gamer === "lizard" && computer === "spock" || gamer === "spock" && computer === "scissors" ? $4fa36e821943b400$var$youWon() : $4fa36e821943b400$var$youLoss();
}
function $4fa36e821943b400$var$comparison(myChoice) {
    if (myChoice !== $4fa36e821943b400$var$computerChoice) $4fa36e821943b400$var$determineWinner(myChoice, $4fa36e821943b400$var$computerChoice);
    if (myChoice === $4fa36e821943b400$var$computerChoice) $4fa36e821943b400$var$youDraw();
}
function $4fa36e821943b400$var$choice() {
    $4fa36e821943b400$var$activeIcon($4fa36e821943b400$var$gameIcon, this);
    $4fa36e821943b400$var$randomChoice();
    $4fa36e821943b400$var$comparison(this.id);
}
const $4fa36e821943b400$var$rock = document.querySelector("#rock");
$4fa36e821943b400$var$rock.addEventListener("click", $4fa36e821943b400$var$choice);
const $4fa36e821943b400$var$paper = document.querySelector("#paper");
$4fa36e821943b400$var$paper.addEventListener("click", $4fa36e821943b400$var$choice);
const $4fa36e821943b400$var$scissors = document.querySelector("#scissors");
$4fa36e821943b400$var$scissors.addEventListener("click", $4fa36e821943b400$var$choice);
const $4fa36e821943b400$var$lizard = document.querySelector("#lizard");
$4fa36e821943b400$var$lizard.addEventListener("click", $4fa36e821943b400$var$choice);
const $4fa36e821943b400$var$spock = document.querySelector("#spock");
$4fa36e821943b400$var$spock.addEventListener("click", $4fa36e821943b400$var$choice);
const $4fa36e821943b400$var$contentLoaded = document.querySelector(".fa-rotate");
$4fa36e821943b400$var$contentLoaded.addEventListener("click", ()=>document.location.reload());


//# sourceMappingURL=index.js.map
