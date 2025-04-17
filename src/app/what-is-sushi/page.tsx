import styles from "./page.module.css";
import Link from "next/link";
import Navigation from "@/components/Navigation/Navigation";

export default function WhatIsSushiPage() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1>What is Sushi?</h1>
          <p>
            A beginner&apos;s guide to understanding and appreciating Japanese sushi
          </p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <div className="section-divider" />
            <h2 className="jp-heading">The Basics</h2>
            <div className={styles.grid}>
              <div className={`${styles.card} traditional-card`}>
                <h3>Definition</h3>
                <p>
                  Sushi is a Japanese dish featuring specially prepared rice
                  (sushi-meshi) combined with various ingredients, including raw
                  fish, seafood, vegetables, and sometimes tropical fruits.
                </p>
              </div>
              <div className={`${styles.card} traditional-card`}>
                <h3>Sushi Rice</h3>
                <p>
                  The foundation of sushi is vinegared rice (sushi-meshi), made
                  with short-grain Japanese rice seasoned with rice vinegar,
                  sugar, and salt.
                </p>
              </div>
              <div className={`${styles.card} traditional-card`}>
                <h3>Fresh Ingredients</h3>
                <p>
                  Quality sushi relies on the freshness of its ingredients,
                  particularly the fish and seafood, which must meet strict
                  standards for raw consumption.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className="section-divider" />
            <h2 className="jp-heading">Common Types of Sushi</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>Nigiri</h3>
                <p>
                  Hand-pressed rice topped with fish or seafood. The most
                  traditional form of sushi, showcasing the pure flavors of the
                  fish.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Maki</h3>
                <p>
                  Rice and fillings wrapped in nori (seaweed). These are the
                  familiar sushi rolls, available in various sizes and styles.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Uramaki</h3>
                <p>
                &lsquo;Inside-out&lsquo; rolls with rice on the outside and nori inside.
                  Popular worldwide, including the famous California Roll.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Temaki</h3>
                <p>
                  Hand-rolled cone-shaped sushi made with nori, filled with rice
                  and various ingredients. Perfect for casual dining.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Essential Accompaniments</h2>
            <ul className={styles.list}>
              <li>
                <strong>Wasabi</strong>A spicy green paste made from Japanese
                horseradish, used to add heat and enhance flavors
              </li>
              <li>
                <strong>Soy Sauce</strong>A salty, fermented condiment used for
                dipping. Look for &lsquo;shoyu&lsquo; at sushi restaurants
              </li>
              <li>
                <strong>Ginger</strong>
                Pickled ginger (gari) serves as a palate cleanser between
                different types of sushi
              </li>
              <li>
                <strong>Green Tea</strong>
                Traditional Japanese green tea (ocha) complements sushi and aids
                digestion
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Getting Started</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>Begin with Simple Rolls</h3>
                <p>
                  Start with basic rolls like cucumber maki or California rolls.
                  These familiar flavors will help you develop your sushi
                  appreciation.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Try Different Styles</h3>
                <p>
                  Gradually explore various types of sushi, from simple nigiri
                  to more complex specialty rolls, to discover your preferences.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Ask Questions</h3>
                <p>
                  Don&apos;t be afraid to ask your sushi chef or server for
                  recommendations and explanations. They&apos;re usually happy to
                  guide beginners.
                </p>
              </div>
            </div>
          </section>

          <div className={styles.navigation}>
            <h2>Ready to Learn More?</h2>
            <div className={styles.navGrid}>
              <Link href="/etiquette" className={styles.navCard}>
                <h3>Sushi Etiquette →</h3>
                <p>Learn the proper way to eat and enjoy sushi</p>
              </Link>
              <Link href="/culture" className={styles.navCard}>
                <h3>Sushi Culture →</h3>
                <p>Discover the rich history and traditions</p>
              </Link>
              <Link href="/cultural-context" className={styles.navCard}>
                <h3>Cultural Context →</h3>
                <p>
                  Understand the deeper meaning of sushi in Japanese society
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
