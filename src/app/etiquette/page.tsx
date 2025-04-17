import styles from "./page.module.css";

export default function EtiquettePage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1>Sushi Dining Etiquette</h1>
        <p>
          Master the art of proper sushi dining with our comprehensive guide to
          Japanese sushi etiquette
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Essential Do's and Don'ts</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Do's</h3>
              <ul className={styles.list}>
                <li>
                  <strong>Clean Hands</strong> Use the provided oshibori (hot
                  towel) to clean your hands before eating
                </li>
                <li>
                  <strong>Chopsticks</strong> Place them on the holder when not
                  in use, pointing left
                </li>
                <li>
                  <strong>Soy Sauce</strong> Pour a small amount and dip
                  fish-side down
                </li>
                <li>
                  <strong>Appreciation</strong> Thank the chef by saying
                  "Gochisousama deshita" after finishing
                </li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3>Don'ts</h3>
              <ul className={styles.list}>
                <li>
                  <strong>Wasabi Mix</strong> Don't mix wasabi into your soy
                  sauce
                </li>
                <li>
                  <strong>Rice First</strong> Don't dip the rice side into soy
                  sauce
                </li>
                <li>
                  <strong>Chopsticks</strong> Don't rub them together or point
                  them at others
                </li>
                <li>
                  <strong>Piece Size</strong> Don't cut pieces in half; eat them
                  in one bite
                </li>
              </ul>
            </div>
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
                Eat maki rolls in one bite when possible. For larger rolls, it's
                acceptable to eat in two bites. No need to dip if sauce is
                already applied.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Ginger (Gari)</h3>
              <p>
                Use pickled ginger as a palate cleanser between different types
                of sushi. Don't eat it on top of your sushi or mix it with other
                ingredients.
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
              <strong>Chef's Choice</strong>
              Consider ordering "omakase" to experience the chef's selection of
              the day's best offerings
            </li>
            <li>
              <strong>Pace</strong>
              Eat each piece soon after it's served; don't let sushi sit for too
              long
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
                When drinking sake or beer, it's polite to pour for others and
                let them pour for you. Never pour your own drink first.
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
