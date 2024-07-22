import { useState } from 'react';
import styles from './index.module.css';

let n = 0;
const Home = () => {
  const [board, setBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [numberSerect, setNumberSerect] = useState(1);
  const clickHandler = (x: number, y: number) => {
    const newboard = structuredClone(board);
    //ここに処理を書く
    if (newboard[y][x] !== 0 || n === 10) return;
    if (newboard[y][x] === 0) {
      newboard[y][x] = numberSerect;
    }
    //勝つ条件
    for (let z = 0; z < 3; z++) {
      if (
        (newboard[z][0] === numberSerect &&
          newboard[z][1] === numberSerect &&
          newboard[z][2] === numberSerect) ||
        (newboard[2][z] === numberSerect &&
          newboard[1][z] === numberSerect &&
          newboard[0][z] === numberSerect) ||
        (newboard[0][0] === numberSerect &&
          newboard[1][1] === numberSerect &&
          newboard[2][2] === numberSerect) ||
        (newboard[2][0] === numberSerect &&
          newboard[1][1] === numberSerect &&
          newboard[0][2] === numberSerect)
      ) {
        console.log(100000);
        n = 10;
      }
    }
    setNumberSerect(2 / numberSerect);
    setBoard(newboard);
  };

  return (
    <div className={styles.container}>
      <p>hello world</p>
      {n === 10 && <div className={styles.comment}> {2 / numberSerect}の勝ち</div>}
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((s, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => clickHandler(x, y)}>
              {s === 0 ? '' : s}
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Home;
