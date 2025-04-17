import Image from "next/image";
import styles from "./page.module.css";
import type { SeafoodItem } from "../types";

const commonFish: SeafoodItem[] = [
  {
    id: "maguro",
    name: "Bluefin Tuna",
    japaneseName: "本鮪 (hon-maguro)",
    scientificName: "Thunnus thynnus",
    description:
      "One of the most prized fish in sushi. Different parts offer varying levels of fat content and flavor intensity.",
    taste: "Rich, buttery, with a clean finish",
    texture: "Firm yet tender, melts in your mouth",
    seasonality: ["Winter", "Spring"],
    commonPreparations: ["Sashimi", "Nigiri", "Tuna rolls"],
    imageUrl: "/ingredients/tuna-bluefin.jpg",
    nutrition: {
      protein: "23g per 100g",
      omega3: "High",
      calories: "144 per 100g",
    },
  },
  {
    id: "sake",
    name: "Salmon",
    japaneseName: "鮭 (sake)",
    scientificName: "Salmo salar",
    description:
      "A popular fish known for its rich flavor and vibrant orange color. Farm-raised salmon is most common in sushi.",
    taste: "Rich, fatty, slightly sweet",
    texture: "Soft, buttery, tender",
    seasonality: ["Year-round"],
    commonPreparations: ["Nigiri", "Salmon rolls", "Sashimi"],
    imageUrl: "/ingredients/salmon.jpg",
    nutrition: {
      protein: "20g per 100g",
      omega3: "Very high",
      calories: "208 per 100g",
    },
  },
  {
    id: "hamachi",
    name: "Yellowtail",
    japaneseName: "魬 (hamachi)",
    scientificName: "Seriola quinqueradiata",
    description:
      "Also known as Japanese Amberjack, this fish is prized for its buttery texture and rich flavor.",
    taste: "Rich, buttery, clean",
    texture: "Firm yet fatty",
    seasonality: ["Winter"],
    commonPreparations: ["Sashimi", "Nigiri", "Rolls"],
    imageUrl: "/ingredients/yellowtail.jpg",
    nutrition: {
      protein: "23g per 100g",
      omega3: "High",
      calories: "146 per 100g",
    },
  },
];

export default function CommonFishPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Common Sushi Fish</h1>
        <p>Essential fish varieties found in most sushi restaurants</p>
      </section>

      <section className={styles.content}>
        <div className={styles.grid}>
          {commonFish.map((fish) => (
            <article key={fish.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={fish.imageUrl}
                  alt={fish.name}
                  width={400}
                  height={300}
                  className={styles.image}
                />
                <h2 className={styles.japaneseName}>{fish.japaneseName}</h2>
              </div>
              <div className={styles.details}>
                <header>
                  <h3>{fish.name}</h3>
                  {fish.scientificName && (
                    <p className={styles.scientific}>{fish.scientificName}</p>
                  )}
                </header>
                <p className={styles.description}>{fish.description}</p>

                <div className={styles.properties}>
                  <div>
                    <h4>Taste</h4>
                    <p>{fish.taste}</p>
                  </div>
                  <div>
                    <h4>Texture</h4>
                    <p>{fish.texture}</p>
                  </div>
                </div>

                <div className={styles.info}>
                  <div>
                    <h4>Best Seasons</h4>
                    <ul>
                      {fish.seasonality.map((season) => (
                        <li key={season}>{season}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Common Preparations</h4>
                    <ul>
                      {fish.commonPreparations.map((prep) => (
                        <li key={prep}>{prep}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {fish.nutrition && (
                  <div className={styles.nutrition}>
                    <h4>Nutrition Facts</h4>
                    <ul>
                      {fish.nutrition.protein && (
                        <li>Protein: {fish.nutrition.protein}</li>
                      )}
                      {fish.nutrition.omega3 && (
                        <li>Omega-3: {fish.nutrition.omega3}</li>
                      )}
                      {fish.nutrition.calories && (
                        <li>Calories: {fish.nutrition.calories}</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
