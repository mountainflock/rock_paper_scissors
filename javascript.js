function getComputerChoice() {
  let computerSelection;
  let randomChoise = Math.floor(Math.random() * 3);
  if (randomChoise === 0) {
    computerSelection = "Rock";
  } else if (randomChoise === 1) {
    computerSelection = "Paper";
  } else {
    computerSelection = "Scissors";
  }
  return computerSelection;
}

function getUserChoise() {
  let playerSelection = prompt("Enter your choise:");
  while (
    playerSelection.toLowerCase() !== "rock" &&
    playerSelection.toLowerCase() !== "scissors" &&
    playerSelection.toLowerCase() !== "paper"
  ) {
    console.log("Enter Rock, Paper or Scissors!");
    console.log;
    playerSelection = prompt("Enter your choise:");
  }
  return playerSelection;
}

function playRound() {
  const computerSelection = getComputerChoice();
  let playerSelection = getUserChoise();
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    return "You Lose! Paper beats rock!";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    return "You Win! Paper beats rock!";
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    return "You Win! Scissors beats paper!";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    return "You Lose! Scissors beats paper!";
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    return "You Win! Rock beats scissors!";
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    return "You Lose! Rock beats scissors!";
  } else {
    return "It's a tie!";
  }
}

function game() {
  let computerScore = 0;
  let userScore = 0;
  for (let i = 0; i < 5; i++) {
    const round = playRound();
    console.log(round);
    if (round.includes("You Win!")) {
      userScore += 1;
    } else if (round.includes("You Lose!")) {
      computerScore += 1;
    }

    console.log(`The score is ${userScore} - ${computerScore}`);
    console.log();
  }
  if (userScore > computerScore) {
    console.log("You are the winner! Congrats!");
  } else if (userScore < computerScore) {
    console.log("You lose!");
  } else {
    console.log("It's a tie!");
  }
}

game();
