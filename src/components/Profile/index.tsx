import { useEffect, useState } from 'react';
import profileImage from '../../../public/profile.jpg';

import localStyles from './style.module.css';
import styles from '../../styles/styles.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const SECONDS = 3000;

export function Profile() {
  const [isMessage, setIsMessage] = useState(false);

  const router = useRouter()

  function handleNavigateToRick() {
    router.push('/rickrolled')
  }

  useEffect(() => {
    const timeId = setTimeout(() => {
      setIsMessage(true);
    }, SECONDS);

    return () => {
      clearTimeout(timeId)
    }
  }, []);

  return (
    <div className={styles.container}>
      <Image 
        className={localStyles.imageProfile} 
        src={profileImage} 
        alt="profile" 
        width={170}
        height={170}
      />

      <h1 className={styles.title}>👋 Olá, eu sou o Jão do Discord!</h1>

      <button className={styles.button} onClick={handleNavigateToRick}>Clique aqui!</button>

      {
        isMessage && <p className={styles.paragraph}>Pode confiar 😉</p>
      }
    </div>
  );
}
