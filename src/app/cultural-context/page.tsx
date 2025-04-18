import styles from "./page.module.css";
import Card from "@/components/Card";

export default function CulturalContextPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Cultural Context</h1>
        <p>Understanding sushi's place in Japanese culture</p>
      </section>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Cultural Significance</h2>
          <div className={styles.grid}>
            <Card>
              <h3>Artisanal Craft</h3>
              <p>
                Sushi-making is considered a serious artisanal craft in Japan,
                requiring years of training and dedication to master.
              </p>
            </Card>
            <Card>
              <h3>Social Status</h3>
              <p>
                Historically, sushi was a luxury food item, and even today,
                high-end sushi restaurants remain symbols of refinement.
              </p>
            </Card>
            <Card>
              <h3>Seasonal Connection</h3>
              <p>
                The emphasis on seasonal ingredients in sushi reflects the
                Japanese cultural value of harmony with nature.
              </p>
            </Card>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Modern Context</h2>
          <div className={styles.grid}>
            <Card>
              <h3>Global Influence</h3>
              <p>
                Sushi's global popularity has led to creative adaptations while
                maintaining its Japanese essence.
              </p>
            </Card>
            <Card>
              <h3>Health Perception</h3>
              <p>
                Modern appreciation of sushi often focuses on its health
                benefits and clean eating aspects.
              </p>
            </Card>
            <Card>
              <h3>Cultural Exchange</h3>
              <p>
                Sushi has become a bridge between Japanese culture and global
                cuisine, fostering cultural understanding.
              </p>
            </Card>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Traditional Values</h2>
          <div className={styles.grid}>
            <Card>
              <h3>Respect</h3>
              <p>
                The formal etiquette surrounding sushi reflects Japanese values
                of respect and mindfulness.
              </p>
            </Card>
            <Card>
              <h3>Minimalism</h3>
              <p>
                The simplicity of nigiri sushi embodies the Japanese aesthetic
                principle of "less is more."
              </p>
            </Card>
            <Card>
              <h3>Craftsmanship</h3>
              <p>
                The dedication to perfection in sushi-making reflects the
                Japanese concept of shokunin (artisan) spirit.
              </p>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
