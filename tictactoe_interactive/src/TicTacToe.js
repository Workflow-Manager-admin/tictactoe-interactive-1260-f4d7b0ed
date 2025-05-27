import React, { useState } from 'react';
import './TicTacToe.css';

// PUBLIC_INTERFACE
const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  /**
   * Calculates the winner of the game by checking all possible winning combinations
   * @param {Array} squares - The current state of the game board
   * @returns {string|null} - Returns 'X' or 'O' if there's a winner, null otherwise
   */
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diagonal
      [2, 4, 6], // diagonal
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  /**
   * Checks if the game is a draw
   * @param {Array} squares - The current state of the game board
   * @returns {boolean} - Returns true if game is a draw, false otherwise
   */
  const isDraw = (squares) => {
    return squares.every(square => square !== null);
  };

  /**
   * Handles a player's move
   * @param {number} index - The index of the clicked cell
   */
  const handleClick = (index) => {
    const newBoard = [...board];
    
    // Return if cell is filled or if game is won
    if (calculateWinner(board) || board[index]) {
      return;
    }

    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  /**
   * Resets the game to its initial state
   */
  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  const winner = calculateWinner(board);
  const draw = isDraw(board);
  
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (draw) {
    status = 'Game is a draw!';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="game-container">
      <div className="status">{status}</div>
      <div className="board">
        {board.map((value, index) => (
          <button
            key={index}
            className={`cell ${value?.toLowerCase()}`}
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>
      <button className="btn btn-large restart-btn" onClick={handleRestart}>
        Restart Game
      </button>
    </div>
  );
};

export default TicTacToe;
