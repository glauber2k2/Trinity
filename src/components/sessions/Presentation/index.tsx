import Image from 'next/image';
import { HandPointing } from 'phosphor-react';

import Navbar from '../../layout/Navbar';

import styles from './Presentation.module.css';

export default function Presentation() {
  return (
    <main className={styles.main}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <Navbar />
        <h1>TRINITY</h1>
        <h2>Arquitetura</h2>
        <h3>Venha nos conhecer!</h3>
        <button className={styles.containerBtn}>
          <HandPointing size={32} /> <p>LETS GO</p>
        </button>
      </div>
      <div className={styles.subContainer}>
        <h1>Conceito</h1>
        <h1>Modernidade</h1>
        <h1>Autenticidade</h1>
        <Image
          src='/images/igortransparent.png'
          width={420}
          height={420}
          alt=''
          className={styles.igorImage}
        />

        <Image
          src='/images/casatransparent.png'
          width={1280}
          height={1280}
          alt=''
          className={styles.houseImage}
        />
      </div>
    </main>
  );
}
