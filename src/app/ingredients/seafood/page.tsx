import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card";
import type { SeafoodItem } from "../types";

const otherSeafood: SeafoodItem[] = [
  {
    id: "ebi",
    name: "Ebi (Shrimp)",
    japaneseName: "海老",
    scientificName: "Penaeus monodon",
    description:
      "Cooked tiger shrimp, butterflied and typically served as nigiri. The cooking process brings out its natural sweetness.",
    taste: "Sweet and delicate with a subtle briny flavor",
    texture: "Firm and snappy",
    seasonality: ["Year-round"],
    commonPreparations: ["Nigiri", "Tempura rolls", "Sushi rolls"],
    imageUrl: "/ingredients/ebi.png",
    nutrition: {
      protein: "24g per 100g",
      calories: "85 per 100g",
    },
  },
  {
    id: "ikura",
    name: "Ikura (Salmon Roe)",
    japaneseName: "いくら",
    description:
      "Large, glistening orange pearls of salmon roe. Each egg bursts in your mouth with a rich, oceanic flavor.",
    taste: "Rich, salty, with a distinct ocean freshness",
    texture: "Firm eggs that pop in your mouth",
    seasonality: ["Fall", "Winter"],
    commonPreparations: ["Gunkan-maki", "Rice bowls", "Garnish"],
    imageUrl: "/ingredients/ikura.png",
    nutrition: {
      protein: "29g per 100g",
      omega3: "Very high",
      calories: "250 per 100g",
    },
  },
  {
    id: "hotate",
    name: "Hotate (Scallop)",
    japaneseName: "帆立",
    scientificName: "Patinopecten yessoensis",
    description:
      "Sweet, delicate Japanese scallops. Often served raw to highlight their natural sweetness.",
    taste: "Sweet and delicate with a clean finish",
    texture: "Tender and buttery",
    seasonality: ["Winter", "Spring"],
    commonPreparations: ["Nigiri", "Sashimi", "Special rolls"],
    imageUrl: "/ingredients/hotate.png",
    nutrition: {
      protein: "16g per 100g",
      calories: "80 per 100g",
    },
  },
  {
    id: "tako",
    name: "Tako (Octopus)",
    japaneseName: "蛸",
    scientificName: "Octopus vulgaris",
    description:
      "Carefully tenderized octopus, typically poached before serving. Known for its distinctive texture and mild flavor.",
    taste: "Mild and sweet",
    texture: "Tender yet chewy",
    seasonality: ["Year-round"],
    commonPreparations: ["Nigiri", "Sashimi", "Sunomono"],
    imageUrl: "/ingredients/tako.png",
    nutrition: {
      protein: "15g per 100g",
      calories: "74 per 100g",
    },
  },
];

export default function OtherSeafoodPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/seafood-platter.jpg"
            alt="Various seafood ingredients"
            fill
            className={styles.backgroundImage}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <h1>Other Seafood</h1>
          <p>Explore non-fish seafood ingredients used in sushi</p>
        </div>
      </section>

      <div className={styles.content}>
        <div className={styles.grid}>
          {otherSeafood.map((seafood) => (
            <Card key={seafood.id} className={styles.seafoodCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={seafood.imageUrl}
                  alt={seafood.name}
                  className={styles.image}
                  width={400}
                  height={300}
                />
                <p className={styles.japaneseName}>{seafood.japaneseName}</p>
              </div>
              <div className={styles.details}>
                <header>
                  <h3>{seafood.name}</h3>
                  {seafood.scientificName && (
                    <p className={styles.scientific}>
                      {seafood.scientificName}
                    </p>
                  )}
                </header>
                <p className={styles.description}>{seafood.description}</p>

                <div className={styles.properties}>
                  <div>
                    <h4>Taste</h4>
                    <p>{seafood.taste}</p>
                  </div>
                  <div>
                    <h4>Texture</h4>
                    <p>{seafood.texture}</p>
                  </div>
                </div>

                <div className={styles.info}>
                  <div>
                    <h4>Best Seasons</h4>
                    <ul>
                      {seafood.seasonality.map((season) => (
                        <li key={season}>{season}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Common Preparations</h4>
                    <ul>
                      {seafood.commonPreparations.map((prep) => (
                        <li key={prep}>{prep}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {seafood.nutrition && (
                  <div className={styles.nutrition}>
                    <h4>Nutrition Facts</h4>
                    <ul>
                      {seafood.nutrition.protein && (
                        <li>Protein: {seafood.nutrition.protein}</li>
                      )}
                      {seafood.nutrition.omega3 && (
                        <li>Omega-3: {seafood.nutrition.omega3}</li>
                      )}
                      {seafood.nutrition.calories && (
                        <li>Calories: {seafood.nutrition.calories}</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
