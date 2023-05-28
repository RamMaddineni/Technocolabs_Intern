let arr = ["rock", "paper", "scissors"];
let computerChoice = arr[Math.floor(Math.random() * 3)];
const getUserInput = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput != "rock" &&
    userInput != "paper" &&
    userInput != "scissors" &&
    userInput != "bomb"
  ) {
    console.log(`An input error occur , please provide valid input`);
    return "";
  }
  return userInput;
};
let userChoice = getUserInput("bomb");

const playGame = () => {
  if (userChoice == "bomb") {
    console.log("User Won!");
    return;
  }

  if (userChoice == "rock" && computerChoice == "scissors") {
    console.log("Computer Won!");
  }
  if (userChoice == "scissors" && computerChoice == "rock") {
    console.log("User Won!");
  }
  if (userChoice == "scissors" && computerChoice == "paper") {
    console.log("Computer Won!");
  }
  if (userChoice == "paper" && computerChoice == "scissors") {
    console.log("User Won!");
  }
  if (userChoice == "paper" && computerChoice == "rock") {
    console.log("Computer Won!");
  }
  if (userChoice == "rock" && computerChoice == "paper") {
    console.log("User Won!");
  }
  if (userChoice == computerChoice) {
    console.log("Its a Draw!");
  }
};
if (userChoice != "") playGame();
