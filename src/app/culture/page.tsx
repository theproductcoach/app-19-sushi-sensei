import styles from "./page.module.css";

export default function CulturePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Sushi Culture</h1>
        <p>
          Discover the rich history and traditions behind Japan&apos;s most iconic
          cuisine
        </p>
      </section>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>History</h2>
          <p>
            Sushi&apos;s origins date back to Southeast Asia, where fish was
            fermented in rice to preserve it. This method spread to Japan around
            the 8th century. The modern form of sushi (nigiri-zushi) was
            invented in Edo (now Tokyo) around 1824 by Hanaya Yohei as a
            fast-food option for workers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Cultural Significance</h2>
          <p>
            Sushi in Japan represents more than just food—it&apos;s an art form and
            cultural institution. Sushi chefs (itamae) train for years to master
            their craft, learning everything from knife skills to rice
            preparation. The preparation and presentation of sushi embodies many
            Japanese cultural values: precision, attention to detail, and
            respect for ingredients.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Types of Sushi Establishments</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Traditional Sushi-ya</h3>
              <p>
                Intimate establishments where customers sit at a counter and
                interact directly with the sushi chef. These restaurants often
                serve omakase (chef&apos;s choice) meals.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Kaiten-zushi</h3>
              <p>
                Conveyor belt sushi restaurants where plates of sushi rotate
                past customers on a conveyor belt. These establishments are more
                casual and budget-friendly.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Modern Sushi Restaurants</h3>
              <p>
                Contemporary establishments that may fusion elements or creative
                interpretations while maintaining respect for traditional
                techniques.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Regional Variations</h2>
          <p>
            Different regions of Japan have developed their own unique sushi
            styles:
          </p>
          <ul className={styles.list}>
            <li>
              <strong>Kansai Style:</strong> Features pressed sushi (oshi-zushi)
              and tends to use more cured and cooked ingredients
            </li>
            <li>
              <strong>Edo Style:</strong> The Tokyo style that&apos;s most recognized
              globally, featuring nigiri-zushi with fresh fish
            </li>
            <li>
              <strong>Kyushu Style:</strong> Known for using local specialties
              like mentaiko (spicy cod roe)
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Modern Influence</h2>
          <p>
            While sushi has spread globally and evolved to incorporate local
            tastes and ingredients, the fundamental principles of quality
            ingredients, skilled preparation, and beautiful presentation remain
            central to sushi culture. The global popularity of sushi has helped
            spread appreciation for Japanese cuisine and culture worldwide.
          </p>
        </section>
      </div>
    </main>
  );
}
