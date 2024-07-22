import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [board, setBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, x) =>
          row.map((s, y) => (
            <div className={styles.cell} key={`${x}-${y}`}>
              nyanko
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
