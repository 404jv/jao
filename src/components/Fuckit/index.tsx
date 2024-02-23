
import { useEffect, useState } from 'react';
import styles from './style.module.css'

export function FuckIt() {
  const [text, setText] = useState(" F*DA-SE ");
  const [text1, setText1] = useState(" People don't forget, they choose to leave. ");

  useEffect(() => {
    const interval = setInterval(() => {
      setText(prevText => prevText.substring(1) + prevText.charAt(0));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.ledSign}>
        <div className={styles.ledDisplay}>{text}</div>
      </div>
      <div className={styles.ledSign1}>
        <div className={styles.ledDisplay1}>{text1}</div>
      </div>
    </div>
  );
}
