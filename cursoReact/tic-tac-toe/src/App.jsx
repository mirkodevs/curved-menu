import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti"
import {Square} from "./components/Square.jsx";
import { checkEndWinner,checkWinner } from "./logic/board";
import { TURNS} from "./costants";
import {WinnerModal } from "./components/WinnerModal"


function App() {
  //todos los estados nunca en un if siempre en el cuerpo de la funcion
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    if (boardFromStorage) {
      return JSON.parse(boardFromStorage);
    }
    return Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    if (turnFromStorage) {
      return turnFromStorage;
    }
    return TURNS.X;
  });

  const [winner, setWinner] = useState(null);

  const restartGame = () => {
    setWinner(null);
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);

    window.localStorage.removeItem("board")
    window.localStorage.removeItem("turn")
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];

    // const newBoard = structuredClone(board)
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //save
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);

    const newWinner = checkWinner(newBoard);
    if (checkWinner(newBoard)) {
      confetti()
      setWinner(newWinner);

      // las actualizasioned del los estados es asincrono
    } else if (checkEndWinner(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={restartGame}>Reset</button>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>X</Square>
        <Square isSelected={turn === TURNS.O}>O</Square>
      </section>
    <WinnerModal
    winner = {winner}
    restartGame = {restartGame}
     />
    </main>
  );
}

export default App;
