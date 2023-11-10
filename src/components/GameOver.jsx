export default function GameOver({ player, restart }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      <p>Congrats! player {player} won.</p>
      <p>
        <button onClick={restart}>restart</button>
      </p>
    </div>
  );
}
