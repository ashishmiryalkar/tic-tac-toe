import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { useState } from "react";

import { initialGameBoard, winningPositions } from "./components/data";

export default function App() {
  const [log, setLog] = useState([]);

  let gameBoard = JSON.parse(JSON.stringify(initialGameBoard));
  function checkWinningConditions() {
    for (const item in winningPositions) {
      if (
        gameBoard[winningPositions[item][0][0]][
          winningPositions[item][0][1]
        ] !== null &&
        gameBoard[winningPositions[item][0][0]][
          winningPositions[item][0][1]
        ] ===
          gameBoard[winningPositions[item][1][0]][
            winningPositions[item][1][1]
          ] &&
        gameBoard[winningPositions[item][0][0]][
          winningPositions[item][0][1]
        ] ===
          gameBoard[winningPositions[item][2][0]][winningPositions[item][2][1]]
      ) {
        return {
          gameOver: true,
          winner:
            gameBoard[winningPositions[item][0][0]][
              winningPositions[item][0][1]
            ] === "X"
              ? 1
              : 2,
        };
      }
    }
    return { gameOver: false, winner: null };
  }

  function restart() {
    setLog([]);
  }

  function changeGameBoard(row, col, player) {
    let newLog = JSON.parse(JSON.stringify(log));
    newLog.push({ pose: { row: row, col: col }, player: player });
    setLog(newLog);
  }

  for (let i = 0; i < log.length; i++) {
    gameBoard[log[i].pose.row][log[i].pose.col] =
      log[i].player === 1 ? "X" : "O";
  }

  let { gameOver, winner } = checkWinningConditions();

  if (log.length === 0) {
    gameOver = false;
  }

  let player = 1;
  console.log(log);
  if (log.length > 0) {
    player = log[log.length - 1].player === 1 ? 2 : 1;
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={player === 1} />
          <Player initialName="Player 2" symbol="O" isActive={player === 2} />
        </ol>
        {gameOver === true ? (
          <GameOver player={winner} restart={restart} />
        ) : (
          <GameBoard
            gameBoard={gameBoard}
            changeGameBoard={changeGameBoard}
            player={player}
          />
        )}
      </div>
      <Log log={log} />
    </main>
  );
}
