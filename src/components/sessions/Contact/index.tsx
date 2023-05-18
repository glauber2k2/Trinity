import Link from 'next/link';
import { InstagramLogo, WhatsappLogo } from 'phosphor-react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <div></div>
      <div className={styles.contact}>
        <h1>Contact-me:</h1>
        <h3>
          Fale comigo por alguma de minhas redes sociais, ou me envie um email
          que estarei retornando seu contato.
        </h3>
        <div className={styles.redes}>
          <h2>Minhas redes:</h2>

          <Link href='/' legacyBehavior>
            <a>
              <InstagramLogo size={42} weight='bold' />
            </a>
          </Link>

          <Link href='/' legacyBehavior>
            <a>
              <WhatsappLogo size={42} weight='bold' />
            </a>
          </Link>
        </div>

        <form
          action='https://formsubmit.co/69079625f263f6861d9c3bff3ab50743'
          method='POST'
        >
          <label htmlFor='email'>Seu Email:</label>
          <input type='email' name='email' required />
          <label htmlFor='message'>Sua Proposta:</label>
          <textarea name='message' required />

          <button type='submit'> Enviar </button>
        </form>
      </div>
    </div>
  );
}
