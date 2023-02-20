import Link from "next/link";

import styles from "./home.module.css";

export default function Home() {
  return (
    <main>
      <nav className={styles.primaryNav}>
        <Link className={styles.navLink + " " + styles.current} href="/home">
          Home
        </Link>
        <Link className={styles.navLink} href="/blog">
          Blog
        </Link>
        <Link className={styles.navLink} href="/contact">
          Contact me
        </Link>
      </nav>
      <dl>
        <dt className="visually-hidden">Name</dt>
        <dd>Tanner B. Hess Webber</dd>
      </dl>
    </main>
  );
}
