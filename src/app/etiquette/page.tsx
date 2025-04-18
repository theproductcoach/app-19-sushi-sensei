import styles from "./page.module.css";
import Card from "@/components/Card";

export default function EtiquettePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Sushi Dining Etiquette</h1>
        <p>
          Master the art of proper sushi dining with our comprehensive guide to
          Japanese sushi etiquette
        </p>
      </section>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Essential Guidelines</h2>
          <div className={styles.grid}>
            <Card>
              <h3>Chopstick Basics</h3>
              <ul className={styles.list}>
                <li>
                  <strong>Proper Holding</strong>
                  Hold chopsticks towards their end, not in the middle
                </li>
                <li>
                  <strong>No Rubbing</strong>
                  Don't rub chopsticks together - it's considered rude
                </li>
                <li>
                  <strong>Between Bites</strong>
                  Rest chopsticks on the holder, not across your plate
                </li>
              </ul>
            </Card>

            <Card>
              <h3>Eating Sushi</h3>
              <ul className={styles.list}>
                <li>
                  <strong>One Bite</strong>
                  Eat nigiri in one bite when possible
                </li>
                <li>
                  <strong>Fish Side</strong>
                  Turn nigiri upside down, fish-side down on your tongue
                </li>
                <li>
                  <strong>No Wasabi</strong>
                  Don't add wasabi if it's already inside
                </li>
              </ul>
            </Card>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Soy Sauce Etiquette</h2>
          <div className={styles.grid}>
            <Card>
              <h3>Proper Technique</h3>
              <p>
                Dip fish-side only, briefly, in soy sauce. Rice should never
                touch the sauce.
              </p>
            </Card>
            <Card>
              <h3>Amount</h3>
              <p>Use soy sauce sparingly. Don't fill the dish to the brim.</p>
            </Card>
            <Card>
              <h3>Mixing</h3>
              <p>
                Never mix wasabi into your soy sauce - it's considered
                disrespectful.
              </p>
            </Card>
          </div>
        </section>

        <section className={styles.section}>
          <h2>At the Sushi Bar</h2>
          <div className={styles.grid}>
            <Card>
              <h3>Seating</h3>
              <p>
                Sit at the counter when possible - it shows respect and interest
                in the craft.
              </p>
            </Card>
            <Card>
              <h3>Interaction</h3>
              <p>
                Feel free to ask questions, but be mindful of the chef's
                concentration.
              </p>
            </Card>
            <Card>
              <h3>Ordering</h3>
              <p>
                Trust the chef's recommendations and consider ordering "omakase"
                style.
              </p>
            </Card>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Proper Eating Technique</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Nigiri Sushi</h3>
              <p>
                Pick up nigiri with chopsticks or clean fingers. Turn it upside
                down and dip only the fish lightly in soy sauce. Eat in one
                bite, fish-side down on your tongue.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Maki Rolls</h3>
              <p>
                Eat maki rolls in one bite when possible. For larger rolls,
                it&apos;s acceptable to eat in two bites. No need to dip if
                sauce is already applied.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Ginger (Gari)</h3>
              <p>
                Use pickled ginger as a palate cleanser between different types
                of sushi. Don&apos;t eat it on top of your sushi or mix it with
                other ingredients.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Ordering and Dining Tips</h2>
          <ul className={styles.list}>
            <li>
              <strong>Ordering Order</strong>
              Start with lighter, milder flavors and progress to stronger,
              richer ones
            </li>
            <li>
              <strong>Seating</strong>
              At the sushi bar, place your order directly with the chef for
              nigiri; order rolls from the server
            </li>
            <li>
              <strong>Chef&apos;s Choice</strong>
              Consider ordering &lsquo;omakase&lsquo; to experience the
              chef&apos;s selection of the day&apos;s best offerings
            </li>
            <li>
              <strong>Pace</strong>
              Eat each piece soon after it&apos;s served; don&apos;t let sushi
              sit for too long
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Additional Etiquette</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Respect for the Chef</h3>
              <p>
                The sushi chef (itamae) deserves utmost respect. Avoid
                distracting them unnecessarily, and show appreciation for their
                craft.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Drinking Customs</h3>
              <p>
                When drinking sake or beer, it&apos;s polite to pour for others
                and let them pour for you. Never pour your own drink first.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Special Requests</h3>
              <p>
                If you have dietary restrictions or preferences, mention them at
                the beginning of your meal. Most chefs will accommodate
                reasonable requests.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
