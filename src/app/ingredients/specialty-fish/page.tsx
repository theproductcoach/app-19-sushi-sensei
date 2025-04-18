import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card";
import type { SeafoodItem } from "../types";

const specialtyFish: SeafoodItem[] = [
  {
    id: "otoro",
    name: "Otoro (Fatty Tuna Belly)",
    japaneseName: "大トロ",
    description:
      "The fattiest and most prized part of bluefin tuna, found in the belly near the head. Known for its intense marbling and melt-in-your-mouth texture.",
    taste: "Extremely rich and buttery with a sweet finish",
    texture: "Very tender, melts in your mouth",
    seasonality: ["Winter"],
    commonPreparations: ["Nigiri", "Premium sashimi"],
    imageUrl: "/ingredients/otoro.png",
    nutrition: {
      calories: "225 per 100g",
      omega3: "Very high",
    },
  },
  {
    id: "uni",
    name: "Uni (Sea Urchin)",
    japaneseName: "雲丹",
    scientificName: "Strongylocentrotus",
    description:
      "Sea urchin roe, considered a delicacy in Japanese cuisine. Has a distinctive briny-sweet taste and custard-like texture.",
    taste: "Sweet and briny with an ocean-fresh flavor",
    texture: "Creamy, custard-like",
    seasonality: ["Winter", "Spring"],
    commonPreparations: ["Nigiri", "Gunkan-maki", "Special rolls"],
    imageUrl: "/ingredients/uni.png",
    nutrition: {
      protein: "13g per 100g",
      calories: "120 per 100g",
    },
  },
  {
    id: "kinmedai",
    name: "Kinmedai (Golden Eye Snapper)",
    japaneseName: "金目鯛",
    scientificName: "Beryx splendens",
    description:
      "A deep-sea fish with a beautiful red color and rich flavor. Highly prized in Japanese cuisine for its elegant taste.",
    taste: "Sweet and rich with a clean aftertaste",
    texture: "Firm but tender",
    seasonality: ["Spring", "Summer"],
    commonPreparations: ["Nigiri", "Sashimi", "Kobujime (kelp-cured)"],
    imageUrl: "/ingredients/kinmedai.png",
  },
  {
    id: "shima-aji",
    name: "Shima-aji (Striped Jack)",
    japaneseName: "縞鯵",
    scientificName: "Pseudocaranx dentex",
    description:
      "A premium white-fleshed fish known for its clean taste and firm texture. Often considered the king of the jack family.",
    taste: "Clean, subtle sweetness with a rich finish",
    texture: "Firm and crisp",
    seasonality: ["Summer", "Fall"],
    commonPreparations: ["Nigiri", "Sashimi"],
    imageUrl: "/ingredients/shima-aji.png",
  },
];

export default function SpecialtyFishPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Specialty Fish</h1>
        <p>
          Discover unique and seasonal fish varieties used in high-end sushi
        </p>
      </section>

      <div className={styles.content}>
        <div className={styles.grid}>
          {specialtyFish.map((fish) => (
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
                <div className={styles.nutrition}>
                  <h4>Key Nutrients</h4>
                  <ul>
                    {fish.nutrition && (
                      <>
                        {fish.nutrition.protein && (
                          <li>Protein: {fish.nutrition.protein}</li>
                        )}
                        {fish.nutrition.calories && (
                          <li>Calories: {fish.nutrition.calories}</li>
                        )}
                        {fish.nutrition.omega3 && (
                          <li>Omega-3: {fish.nutrition.omega3}</li>
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
