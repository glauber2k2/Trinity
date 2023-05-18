import Link from 'next/link';
import { InstagramLogo, WhatsappLogo } from 'phosphor-react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container} id='contact'>
      <div></div>
      <div className={styles.contact}>
        <h1>Contact-me:</h1>
        <h3>
          Fale comigo por alguma de minhas redes sociais, ou me envie um email
          que estarei retornando seu contato.
        </h3>
        <div className={styles.redes}>
          <h2>Minhas redes:</h2>

          <Link
            href='https://www.instagram.com/trinityarquitetura_/'
            legacyBehavior
          >
            <a target='_blank'>
              <InstagramLogo size={42} weight='bold' />
            </a>
          </Link>

          <Link
            href='https://api.whatsapp.com/send/?phone=5583996067361&text=Olá%2C+gostaria+de+fazer+um+orçamento%3F&type=phone_number&app_absent=0'
            legacyBehavior
          >
            <a target='_blank'>
              <WhatsappLogo size={42} weight='bold' />
            </a>
          </Link>
        </div>

        <form
          action='https://formsubmit.co/igorpessoa.arq@gmail.com'
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
