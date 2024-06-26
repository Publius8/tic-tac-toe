let playreX = document.querySelector("#playreX");
let playerO = document.querySelector("#playerO");
let cells = document.querySelectorAll(".cell");

document.addEventListener("DOMContentLoaded", function() {
    const audioplay = document.querySelector("#audioplay");
    audioplay.currentTime = 0;
    audioplay.play();
});



let scoreX = 0;
let scoreO = 0;

let currentPlayer = "X";

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function() {
        if (this.textContent === '') {
            this.textContent = currentPlayer;
            let winningCombination = isVictory(cells);
            if (winningCombination) {
                // colorWinningCells(winningCombination);
                updateScore(currentPlayer);
                alert(currentPlayer + " wins!");
                clean();
            } else if (isDraw(cells)) {
                alert('Draw!');
                clean();
            } else {
                currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            }
        }
    });
}

function isVictory(cells) {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let comb of combs) {
        if (
            cells[comb[0]].textContent === cells[comb[1]].textContent &&
            cells[comb[1]].textContent === cells[comb[2]].textContent &&
            cells[comb[0]].textContent !== ''
        ) {
            return comb;
        }
    }

    return null;
}

function isDraw(cells) {
    for (let cell of cells) {
        if (cell.textContent === '') {
            return false;
        }
    }
    return true;
}

function clean() {
    for (let cell of cells) {
        cell.textContent = "";
        cell.style.backgroundColor = "";
    }
}
let head = document.createElement("h1");
function updateScore(winner) {
    if (winner === 'X') {
        scoreX++;
        playreX.textContent = "Score X: " + scoreX;
        if (scoreX === 5) {
            alert("Player X wins the game with 5 points! Refresh to start again.");
            mainContainer.innerHTML = " ";
            head.textContent = "Player X wins the game with 5 points! Refresh to start again.";
            head.style.color = "cyan";
            head.style.fontSize = "25px";
            head.style.textAlign = "center";
            document.body.appendChild(head);
        }
    } else if (winner === 'O') {
        scoreO++;
        playerO.textContent = "Score O: " + scoreO;
        if (scoreO === 5) {
            alert("Player O wins the game with 5 points! Refresh to start again.");
            mainContainer.innerHTML = " ";
            head.textContent = "Player O wins the game with 5 points! Refresh to start again.";
            head.style.color = "cyan";
            head.style.fontSize = "25px";
            head.style.textAlign = "center";
            document.body.appendChild(head);
        }
    }
}


function colorWinningCells(winningCombination) {
    for (let index of winningCombination) {
        cells[index].style.color = "red";
    }
}