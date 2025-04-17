import styles from "./page.module.css";

export default function CulturalContextPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1>Cultural Context of Sushi</h1>
        <p>
          Understanding the deeper cultural significance and social aspects of
          sushi in Japanese society
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Social Significance</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Business Relations</h3>
              <p>
                In Japanese business culture, high-end sushi restaurants are
                often chosen for important meetings and negotiations. The
                intimate setting and shared experience help build trust and
                strengthen relationships.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Celebrations</h3>
              <p>
                Sushi is often featured in special occasions and celebrations,
                from graduations to business successes. The quality and
                presentation of sushi reflect the importance of the event.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Gift-Giving</h3>
              <p>
                High-quality sushi can be given as a gift in Japan, particularly
                during special occasions. The presentation and packaging are as
                important as the sushi itself.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Cultural Values</h2>
          <ul className={styles.list}>
            <li>
              <strong>Shokunin Spirit</strong>
              The dedication to mastery and craftsmanship embodied by sushi
              chefs who train for years to perfect their art
            </li>
            <li>
              <strong>Mottainai</strong>
              The concept of avoiding waste, reflected in the careful use of
              every part of the fish
            </li>
            <li>
              <strong>Ichigo Ichie</strong>
              The philosophy of treasuring each moment, as each sushi dining
              experience is unique
            </li>
            <li>
              <strong>Wa</strong>
              The importance of harmony and balance, seen in the careful
              composition of flavors and textures
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Seasonal Connection</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Shun (Seasonality)</h3>
              <p>
                The Japanese concept of eating ingredients at their peak season.
                Different fish and seafood are considered to be at their best
                during specific times of the year.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Seasonal Presentations</h3>
              <p>
                Sushi presentation often incorporates seasonal elements, from
                the garnishes used to the serving vessels chosen, reflecting
                Japan&apos;s deep connection to nature.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Local Traditions</h3>
              <p>
                Different regions in Japan have their own seasonal specialties
                and traditions around sushi, often tied to local festivals and
                celebrations.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Restaurant Hierarchy</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Master-Apprentice Dynamic</h3>
              <p>
                The traditional system where apprentices spend years learning
                from master chefs, passing down techniques and knowledge through
                generations.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Customer Relations</h3>
              <p>
                Regular customers (常連, jōren) often develop special
                relationships with sushi chefs, receiving personalized service
                and special items not on the menu.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Restaurant Rankings</h3>
              <p>
                The unofficial but important hierarchy of sushi restaurants,
                from exclusive establishments with Michelin stars to casual
                conveyor belt restaurants.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Modern Evolution</h2>
          <ul className={styles.list}>
            <li>
              <strong>Global Influence</strong>
              How international appreciation has both preserved and transformed
              traditional sushi culture
            </li>
            <li>
              <strong>Innovation</strong>
              The balance between maintaining tradition and embracing new
              techniques and ingredients
            </li>
            <li>
              <strong>Sustainability</strong>
              Growing emphasis on sustainable fishing practices while
              maintaining cultural traditions
            </li>
            <li>
              <strong>Accessibility</strong>
              The democratization of sushi through various price points and
              styles while preserving high-end traditions
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
