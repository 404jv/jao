import { useEffect, useRef, useState } from "react";

const TIME_SHOW_PHOTO_MJ_IN_SECONDS = 15000; // 15 seconds
const TIME_SHOW_BUTTON_IN_SECONDS = 20000; // 20 seconds

import localStyles from './style.module.css';
import styles from '../../styles/styles.module.css';
import Image from "next/image";

const messages = [
  {
    message: 'Eu sei... Não faz sentido esse site',
    timeToShowInSeconds: 2,
  },
  {
    message: 'É que eu estou com tédio e resolvi fazer isso ,-,',
    timeToShowInSeconds: 4,
  },
  {
    message: 'Só que estou com preguiça de terminar kkkkkkk',
    timeToShowInSeconds: 7,
  },
  {
    message: 'Só pra não dizer que eu não fiz nada',
    timeToShowInSeconds: 10,
  },
  {
    message: 'Escuta Michael Jackson enquanto eu desenvolvo essa parte',
    timeToShowInSeconds: 13,
  },
  {
    message: 'Não gosta de MJ?',
    timeToShowInSeconds: 19,
  },
];

export default function Secret() {
  const [isPhoto, setIsPhoto] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const [isAlreadyPlayNegobamMusic, setIsAlreadyPlayNegobamMusic] = useState(false);

  function handleClick() {
    if (isAlreadyPlayNegobamMusic) return;

    const container = document.querySelector('#container');
    
    const video = document.createElement('video');
    video.width = 600;
    video.height = 300;
    video.autoplay = true;
    video.className = localStyles.video;

    const source = document.createElement('source');
    source.src = '/negobam-music.mp4'

    const mjMusic = document.getElementById("mj-music") as any;
    if (!mjMusic) return;
    mjMusic.pause();

    video.appendChild(source);
    container.appendChild(video);

    setIsAlreadyPlayNegobamMusic(true);
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
      setIsPhoto(true);

      const mjMusic = document.getElementById("mj-music") as any;

      if (!mjMusic) return;

      mjMusic.play();
    }, TIME_SHOW_PHOTO_MJ_IN_SECONDS);

    const time2Id = setTimeout(() => {
      setIsButton(true);
    }, TIME_SHOW_BUTTON_IN_SECONDS);

    timeIds.push(...[time1Id, time2Id]);

    return () => {
      timeIds.map((timeId) => clearTimeout(timeId));
    }
  }, []);

  return (
    <div id="container" className={styles.container}>
      <h1>Não tem nada por aqui ainda</h1>
      {
        isPhoto && 
          <>
            <Image 
              className={localStyles.michaelPhoto}
              src="/mj.png" 
              width={170}
              height={170}
              alt="MJ"
            />
            <audio src="/mj-music.mp4" id="mj-music"></audio>
          </>
      }
      {
        isButton && <button onClick={handleClick} className={styles.button}>Talvez curta isso</button>
      }

    </div>
  );
}
