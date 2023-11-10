export default function Log({ log }) {
  console.log("log", log[0]);
  return (
    <ol id="log">
      {log.map((item, id) => (
        <li key={id}>
          Pos: {item.pose.row} {item.pose.col}, Player: {item.player}{" "}
        </li>
      ))}
    </ol>
  );
}
