import Image from 'next/image';
import styles from './AlbumPaste.module.css';
import { House } from 'phosphor-react';
import Link from 'next/link';

interface Props {
  name: string;
}

export default function AlbumPaste({ name }: Props) {
  return (
    <>
      <div className={styles.backHome}>
        <Link href='/' legacyBehavior>
          <a>
            <House weight='fill' size={26} /> Inicio
          </a>
        </Link>
      </div>
      <div className={styles.container}>
        <h1>{name}</h1>
        <Image
          src={`/album/${name}/${name}1.jpg`}
          width={1280}
          height={1280}
          alt=''
          className={styles.photoNumberOne}
        />
        <Image
          src={`/album/${name}/${name}2.jpg`}
          width={1280}
          height={1280}
          alt=''
          className={styles.photoNumberTwo}
        />
        <Image
          src={`/album/${name}/${name}3.jpg`}
          width={1280}
          height={1280}
          alt=''
          className={styles.photoNumberThree}
        />
      </div>
    </>
  );
}
