import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.kanji}>寿司</span>
          <span className={styles.text}>Sushi Sensei</span>
        </Link>
        <div className={styles.links}>
          <Link href="/what-is-sushi">Basics</Link>
          <Link href="/etiquette">Etiquette</Link>
          <Link href="/culture">Culture</Link>
          <Link href="/cultural-context">Context</Link>
        </div>
      </div>
    </nav>
  );
}
