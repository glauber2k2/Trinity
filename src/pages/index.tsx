import Head from 'next/head';

import styles from '@/styles/Home.module.css';
import Presentation from '../components/sessions/Presentation';
import Projects from '../components/sessions/Projects';
import Contact from '../components/sessions/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='O melhor arquiteto que você poderá ter'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Presentation />
      <Projects />
      <Contact />
    </>
  );
}
