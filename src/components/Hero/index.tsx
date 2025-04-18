import Image from "next/image";
import styles from "./styles.module.css";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  backgroundAlt: string;
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  backgroundAlt,
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          className={styles.backgroundImage}
          priority
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.heroContent}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
