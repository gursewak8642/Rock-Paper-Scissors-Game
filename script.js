let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#computer-score");

const genComChoice = () => {
  //rock, paper, scissors
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = () => {
  // console.log("Game was Drawn");
  msg.innerText = "Game was Draw. Play Again";
  msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    // console.log(userScore);
    // console.log("You win");
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    CompScorePara.innerText = computerScore;
    // console.log(computerScore);
    // console.log("You Lose");
    msg.innerText = `You Lost!Computer's ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  // console.log("user Choice = ", userChoice);
  //Generate computer Choice -> modular\
  const compChoice = genComChoice();
  // console.log("Computer choice =", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log();
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
