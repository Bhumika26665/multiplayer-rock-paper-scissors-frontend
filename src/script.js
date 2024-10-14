// let playerScore = 0;
// let computerScore = 0;
// const messageElement = document.querySelector('#message h2');
// const scoreboardElement = document.getElementById('scoreboard');

// // Function to update scores
// function updateScores(winner) {
//     if (winner === "player") {
//         playerScore++;
//     } else if (winner === "computer") {
//         computerScore++;
//     }

//     document.getElementById('player-score').textContent = playerScore;
//     document.getElementById('computer-score').textContent = computerScore;
// }

// // Function to check the winner based on the input
// function checkWinner() {
//     const inputs = document.querySelectorAll('input[type="radio"]:checked');
//     let playerMove, computerMove;

//     if (inputs.length) {
//         const id = inputs[0].id;
//         [playerMove, computerMove] = id.split('-');

//         if (playerMove === computerMove) {
//             // Tie
//             updateWinner('tie');
//         } else if (
//             (playerMove === "rock" && computerMove === "scissors") ||
//             (playerMove === "paper" && computerMove === "rock") ||
//             (playerMove === "scissors" && computerMove === "paper")
//         ) {
//             // Player wins
//             updateWinner('player');
//         } else {
//             // Computer wins
//             updateWinner('computer');
//         }
//     }
// }

// // Function to update the winner, message, and scoreboard color
// function updateWinner(winner) {
//     if (winner === 'player') {
//         messageElement.textContent = 'You Win!';
//         messageElement.className = 'winner-player'; // Lime for user win
//         scoreboardElement.className = 'scoreboard-player-win'; // Lime background for user win
//         updateScores("player");
//     } else if (winner === 'computer') {
//         messageElement.textContent = 'Computer Wins!';
//         messageElement.className = 'winner-computer'; // Gold for computer win
//         scoreboardElement.className = 'scoreboard-computer-win'; // Gold background for computer win
//         updateScores("computer");
//     } else {
//         messageElement.textContent = 'It\'s a Tie!';
//         messageElement.className = 'tied'; // Red for tie
//         scoreboardElement.className = 'scoreboard-tied'; // Red background for tie
//     }
// }

// // Function to reset the scores and messages
// document.querySelector('input[type="reset"]').addEventListener('click', () => {
//     playerScore = 0;
//     computerScore = 0;
//     messageElement.textContent = '';
//     messageElement.className = '';
//     scoreboardElement.className = ''; // Reset scoreboard background color
//     updateScores(); // Resets scoreboard to 0
// });

// // Add event listeners to radio buttons
// document.querySelectorAll('input[type="radio"]').forEach(input => {
//     input.addEventListener('change', checkWinner);
// });
