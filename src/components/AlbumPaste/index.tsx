import Image from 'next/image';
import styles from './AlbumPaste.module.css';

interface Props {
  name: string;
}

export default function AlbumPaste({ name }: Props) {
  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <Image
        src={`/images/${name}1.png`}
        width={1280}
        height={1280}
        alt=''
        className={styles.photoNumberOne}
      />
      <Image
        src={`/images/${name}2.png`}
        width={1280}
        height={1280}
        alt=''
        className={styles.photoNumberTwo}
      />
      <Image
        src={`/images/${name}1.png`}
        width={1280}
        height={1280}
        alt=''
        className={styles.photoNumberThree}
      />
    </div>
  );
}
