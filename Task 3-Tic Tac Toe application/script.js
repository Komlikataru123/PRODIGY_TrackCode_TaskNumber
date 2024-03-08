let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const messageElement = document.getElementById('message');

function handleClick(cellIndex) {
    if (gameActive && gameBoard[cellIndex] === '') {
        gameBoard[cellIndex] = currentPlayer;
        renderGameBoard();
        if (checkWin()) {
            messageElement.innerText = `${currentPlayer} wins!`;
            gameActive = false;
        } else if (checkDraw()) {
            messageElement.innerText = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function renderGameBoard() {
    gameBoard.forEach((cell, index) => {
        document.getElementsByClassName('cell')[index].innerText = cell;
    });
}

function checkWin() {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return gameBoard[index] === currentPlayer;
        });
    });
}

function checkDraw() {
    return gameBoard.every(cell => {
        return cell !== '';
    });
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    messageElement.innerText = '';
    renderGameBoard();
}
