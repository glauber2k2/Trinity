import Link from 'next/link';

import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <Link href='/' legacyBehavior>
            <a>Projects</a>
          </Link>
        </li>

        <li>
          <Link href='/' legacyBehavior>
            <a>About</a>
          </Link>
        </li>

        <li>
          <Link href='/' legacyBehavior>
            <button>Contact</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
