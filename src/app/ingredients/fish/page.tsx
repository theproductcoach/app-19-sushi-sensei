import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card";
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
    imageUrl: "/ingredients/tuna-bluefin.png",
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
    imageUrl: "/ingredients/salmon.png",
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
    imageUrl: "/ingredients/yellowtail.png",
    nutrition: {
      protein: "23g per 100g",
      omega3: "High",
      calories: "146 per 100g",
    },
  },
];

export default function FishPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Common Fish Types</h1>
        <p>Learn about the most popular fish used in sushi</p>
      </section>

      <div className={styles.content}>
        <div className={styles.grid}>
          {commonFish.map((fish) => (
            <Card key={fish.id} className={styles.fishCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={fish.imageUrl}
                  alt={fish.name}
                  className={styles.image}
                  width={400}
                  height={300}
                />
                <p className={styles.japaneseName}>{fish.japaneseName}</p>
              </div>
              <div className={styles.details}>
                <header>
                  <h3>{fish.name}</h3>
                  <p className={styles.scientific}>{fish.scientificName}</p>
                </header>
                <p className={styles.description}>{fish.description}</p>
                <div className={styles.properties}>
                  <div>
                    <h4>Taste Profile</h4>
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
                      {fish.seasonality.map((season, index) => (
                        <li key={index}>{season}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Preparation Methods</h4>
                    <ul>
                      {fish.commonPreparations.map((prep, index) => (
                        <li key={index}>{prep}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.nutrition}>
                  <h4>Key Nutrients</h4>
                  <ul>
                    {fish.nutrition && (
                      <>
                        {fish.nutrition.protein && (
                          <li>Protein: {fish.nutrition.protein}</li>
                        )}
                        {fish.nutrition.omega3 && (
                          <li>Omega-3: {fish.nutrition.omega3}</li>
                        )}
                        {fish.nutrition.calories && (
                          <li>Calories: {fish.nutrition.calories}</li>
                        )}
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
