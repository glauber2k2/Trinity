import Image from 'next/image';

import Slider from '../../slides/Slider';

import styles from './Projects.module.css';

export default function Projects() {
  return (
    <div className={styles.containerProjects}>
      <div className={`${styles.box} ${styles.box1}`}>
        <h1>PROJETOS</h1>

        <Image
          src='/images/trinityLogo.jpeg'
          width={420}
          height={420}
          alt=''
          className={styles.trinityLogo}
        />

        <Image
          src='/images/cadeiras.png'
          width={420}
          height={420}
          alt=''
          className={styles.chair}
        />

        <Image
          src='/images/sofa.png'
          width={420}
          height={420}
          alt=''
          className={styles.chair}
        />
      </div>

      <div className={`${styles.box} ${styles.box2}`}>
        <Slider />
      </div>

      <div className={`${styles.box} ${styles.box3}`}>
        <p>Interiores</p>
        <p>Projetos</p>
        <p>Reformas</p>
      </div>

      <div className={`${styles.box} ${styles.box4}`}>
        <div>
          <h1>CONFIRA</h1>
          <h1>NOSSA</h1>
          <h1>GALERIA</h1>
        </div>
        <button>VAMOS LÁ</button>
        <Image src='/images/project2.png' width={420} height={420} alt='' />
      </div>
    </div>
  );
}
