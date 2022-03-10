import { useEffect, useState } from 'react';

const TIME_PAUSE_IN_SECONDS = 8000;
const TIME_SHOW_BUTTON = 10000;

const messages = [
  {
    message: 'Desculpa kkkkkk',
    timeToShowInSeconds: 7,
  },
  {
    message: 'Falando sério agora, preciso te mostrar uma coisa 👀',
    timeToShowInSeconds: 9,
  },
  {
    message: 'Fica de boa, não vou te rickrolled mais de uma vez',
    timeToShowInSeconds: 15,
  }
];

import localStyles from './style.module.css';
import styles from '../../styles/styles.module.css';
import { useRouter } from 'next/router';

export function NeverGonnaGiveYouUp() {
  const [isButton, setIsButton] = useState(false);

  const router = useRouter();

  function handleClick() {
    router.push('/secret');
  }

  useEffect(() => {
    const timeIds = messages.map((message) => {
      const container = document.querySelector('#container');

      const timeId = setTimeout(() => {
        const paragraph = document.createElement('p');
        paragraph.innerText = message.message;
        paragraph.className = styles.paragraph;

        container?.append(paragraph);
      }, message.timeToShowInSeconds * 1000);

      return timeId;
    });
    
    const time1Id = setTimeout(() => {
      const video = document.getElementById('video') as HTMLVideoElement;

      if(!video) return;

      video.pause();
    }, TIME_PAUSE_IN_SECONDS);

    const time2Id = setTimeout(() => {
      setIsButton(true);
    }, TIME_SHOW_BUTTON);


    timeIds.push(...[time1Id, time2Id]);

    return () => {
      timeIds.map((timeId) => clearTimeout(timeId));
    }
  }, []);

  return (
    <div id="container" className={styles.container}>
      <h1 className={styles.title}>Você acaba de ser rickrolled!</h1>

      <video className={localStyles.video} id="video" width="600" height="300" autoPlay>
        <source src="/rick.mp4" />
      </video>

      {
        isButton && <button onClick={handleClick} className={styles.button}>Me mostra</button>
      }
    </div>
  );
}
