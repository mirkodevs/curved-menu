import { winnerCombos } from "../costants";

export const checkWinner = (board) => {
    for (const combo of winnerCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c])
        return board[a];
    }

    return null;
  };



  export function checkEndWinner(newBoard) {
    return newBoard.every((square) => square !== null);
  }