import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card";
import type { IngredientItem } from "../types";

const ingredients: IngredientItem[] = [
  {
    id: "nori",
    name: "Nori (Seaweed)",
    japaneseName: "海苔",
    description:
      "Dried sheets of edible seaweed used to wrap sushi rolls and as a garnish. Essential for maki and temaki sushi.",
    usage:
      "Used as a wrapper for maki rolls, as a base for gunkan-maki, or as a garnish when shredded.",
    tips: [
      "Store in an airtight container with a desiccant packet",
      "Toast briefly before use to enhance flavor and crispness",
      "Handle with dry hands to prevent sticking",
      "Check the color - good nori should be dark green to black",
    ],
    varieties: [
      "Gold grade (premium)",
      "Silver grade (standard)",
      "Green grade (casual)",
      "Toasted nori",
    ],
    imageUrl: "/ingredients/nori.jpg",
    nutrition: {
      calories: "35 per sheet",
      protein: "6g per sheet",
      fiber: "0.9g per sheet",
    },
    storageInfo:
      "Store in an airtight container in a cool, dry place. Once opened, use within 2-3 weeks for best quality.",
  },
  {
    id: "wasabi",
    name: "Wasabi",
    japaneseName: "山葵",
    description:
      "A pungent green paste made from Japanese horseradish. Adds heat and helps prevent bacterial growth in raw fish.",
    usage:
      "Applied in small amounts between fish and rice in nigiri, or served on the side for dipping.",
    tips: [
      "Use sparingly - a small pea-sized amount is sufficient",
      "Mix with soy sauce only if preferred",
      "Real wasabi loses flavor within 15 minutes",
      "Store paste in an airtight container",
    ],
    varieties: [
      "Fresh wasabi root",
      "Real wasabi paste",
      "Horseradish-based paste",
    ],
    imageUrl: "/ingredients/wasabi.jpg",
    storageInfo:
      "Fresh wasabi root should be used within a week. Paste should be refrigerated after opening.",
  },
  {
    id: "gari",
    name: "Gari (Pickled Ginger)",
    japaneseName: "ガリ",
    description:
      "Thinly sliced young ginger that has been pickled in vinegar and sugar. Used as a palate cleanser between different types of sushi.",
    usage:
      "Eaten between different types of sushi to cleanse the palate and aid digestion.",
    tips: [
      "Eat a small piece between different fish types",
      "Don't place directly on sushi",
      "Natural gari should have a pale pink color",
      "Can be used to add a zingy flavor to rolls",
    ],
    varieties: [
      "Young ginger (pink)",
      "Mature ginger (white)",
      "Red pickled ginger",
    ],
    imageUrl: "/ingredients/gari.jpg",
    storageInfo:
      "Store in its pickling liquid in an airtight container in the refrigerator for up to 6 months.",
  },
  {
    id: "shiso",
    name: "Shiso Leaves",
    japaneseName: "紫蘇",
    description:
      "Aromatic herb leaves with a unique flavor combining mint, basil, and citrus notes. Used as a wrap or garnish.",
    usage:
      "Used as a wrap for sashimi, a garnish for presentation, or chopped and added to rolls.",
    tips: [
      "Handle leaves gently to prevent bruising",
      "Rinse and pat dry before use",
      "Store wrapped in damp paper towels",
      "Can be used whole or finely chopped",
    ],
    varieties: ["Green shiso", "Red shiso", "Brittle shiso"],
    imageUrl: "/ingredients/shiso.jpg",
    storageInfo:
      "Wrap in slightly damp paper towels and store in a plastic bag in the refrigerator for up to 1 week.",
  },
];

export default function NoriAndGarnishesPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/nori-banner.jpg"
            alt="Nori sheets and traditional sushi garnishes"
            fill
            className={styles.backgroundImage}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <h1>Nori & Garnishes</h1>
          <p>
            Essential wrapping and garnishing ingredients in sushi preparation
          </p>
        </div>
      </section>

      <div className={styles.content}>
        <div className={styles.grid}>
          {ingredients.map((ingredient) => (
            <Card key={ingredient.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={ingredient.imageUrl}
                  alt={ingredient.name}
                  className={styles.image}
                  width={400}
                  height={300}
                />
                <p className={styles.japaneseName}>{ingredient.japaneseName}</p>
              </div>
              <div className={styles.details}>
                <header>
                  <h3>{ingredient.name}</h3>
                </header>
                <p className={styles.description}>{ingredient.description}</p>

                <div className={styles.usage}>
                  <h4>Usage</h4>
                  <p>{ingredient.usage}</p>
                </div>

                <div className={styles.tips}>
                  <h4>Tips</h4>
                  <ul>
                    {ingredient.tips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>

                {ingredient.varieties && (
                  <div className={styles.varieties}>
                    <h4>Varieties</h4>
                    <ul>
                      {ingredient.varieties.map((variety, index) => (
                        <li key={index}>{variety}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {ingredient.nutrition && (
                  <div className={styles.nutrition}>
                    <h4>Nutrition Facts</h4>
                    <ul>
                      {ingredient.nutrition.calories && (
                        <li>Calories: {ingredient.nutrition.calories}</li>
                      )}
                      {ingredient.nutrition.protein && (
                        <li>Protein: {ingredient.nutrition.protein}</li>
                      )}
                      {ingredient.nutrition.fiber && (
                        <li>Fiber: {ingredient.nutrition.fiber}</li>
                      )}
                    </ul>
                  </div>
                )}

                {ingredient.storageInfo && (
                  <div className={styles.storage}>
                    <h4>Storage</h4>
                    <p>{ingredient.storageInfo}</p>
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
