let computerScore = 0;
let userScore = 0;

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

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection.toLowerCase() === "paper") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection.toLowerCase() === "scissors") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection.toLowerCase() === "rock")
  ) {
    computerScore += 1;
    return `Computer's choise is ${computerSelection}! 
    His ${computerSelection} beats your ${playerSelection}! 
    The score is ${userScore} - ${computerScore}`;
  } else if (
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection.toLowerCase() === "rock") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection.toLowerCase() === "paper") ||
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection.toLowerCase() === "scissors")
  ) {
    userScore += 1;
    return `Computer's choise is ${computerSelection}! 
    Your ${playerSelection} beats his ${computerSelection}! 
    The score is ${userScore} - ${computerScore}`;
  } else {
    return `Computer's choise is also ${computerSelection}!
    It's a tie! The score is ${userScore} - ${computerScore}`;
  }
}

function calculateWinner() {
  if (userScore > computerScore) {
    return `You win! The result is ${userScore} - ${computerScore}!`;
  } else {
    return `Computer wins! The final score is ${userScore} - ${computerScore}`;
  }
}

const buttons = document.getElementsByTagName("button");

for (let button of buttons) {
  button.addEventListener("click", () => {
    playerSelection = button.textContent;
    computerSelection = getComputerChoice();
    document.getElementById("result").textContent = playRound(
      playerSelection,
      computerSelection
    );
    if (userScore === 5 || computerScore === 5) {
      const winner = calculateWinner();
      document.getElementById("result").textContent = winner;
      const buttonsContainer = document.getElementById("buttons");
      buttonsContainer.parentNode.removeChild(buttonsContainer);
    }
  });
}
