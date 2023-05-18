import { Link as ScrollLink } from 'react-scroll';

import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <ScrollLink to='projects' smooth={true} duration={1000}>
            <p>Projects</p>
          </ScrollLink>
        </li>

        <li>
          <ScrollLink to='contact' smooth={true} duration={1000}>
            <button>Contact</button>
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
}
