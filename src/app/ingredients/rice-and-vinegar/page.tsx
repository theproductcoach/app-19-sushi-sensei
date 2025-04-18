import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import type { IngredientItem } from "../types";

const ingredients: IngredientItem[] = [
  {
    id: "sushi-rice",
    name: "Sushi Rice",
    japaneseName: "寿司飯",
    description:
      "Short-grain Japanese rice specially prepared for sushi. Known for its sticky texture and balanced seasoning.",
    usage:
      "Forms the base of all sushi varieties, providing structure and subtle flavor that complements fish and other toppings.",
    tips: [
      "Wash the rice thoroughly until water runs clear",
      "Use a 1:1 rice to water ratio",
      "Let rice rest for 10-15 minutes after cooking",
      "Fan the rice while adding vinegar mixture",
    ],
    varieties: ["Koshihikari", "Calrose", "Hitomebore"],
    imageUrl: "/ingredients/sushi-rice.png",
    nutrition: {
      calories: "130 per 100g",
      carbs: "28g per 100g",
      protein: "2.4g per 100g",
      fiber: "0.4g per 100g",
    },
    storageInfo:
      "Store uncooked rice in a cool, dry place. Use cooked sushi rice within 6 hours for best results.",
    preparationSteps: [
      "Rinse rice until water runs clear",
      "Cook with equal parts water",
      "Mix rice vinegar, sugar, and salt",
      "Fold vinegar mixture into hot rice",
      "Fan while mixing to achieve glossy finish",
    ],
  },
  {
    id: "rice-vinegar",
    name: "Rice Vinegar",
    japaneseName: "米酢",
    description:
      "A mild, slightly sweet vinegar made from fermented rice. Essential for seasoning sushi rice and creating the characteristic flavor of sushi.",
    usage:
      "Mixed with sugar and salt to create sushi vinegar (sushi-zu), which seasons the rice and helps preserve it.",
    tips: [
      "Use pure rice vinegar, not seasoned vinegar",
      "Add vinegar mixture to hot rice",
      "Mix vinegar solution thoroughly before adding",
      "Don't over-season the rice",
    ],
    varieties: [
      "Pure rice vinegar",
      "Seasoned rice vinegar",
      "Brown rice vinegar",
    ],
    imageUrl: "/ingredients/rice-vinegar.png",
    storageInfo:
      "Store in a cool, dark place. Can last for several years when properly stored.",
    preparationSteps: [
      "Combine rice vinegar, sugar, and salt",
      "Heat mixture until sugar dissolves",
      "Cool to room temperature",
      "Add to hot rice while mixing",
    ],
  },
];

export default function RiceAndVinegarPage() {
  return (
    <main className={styles.main}>
      <Hero
        title="Rice & Vinegar"
        subtitle="The essential foundation of sushi-making"
        backgroundImage="/rice-banner.png"
        backgroundAlt="Sushi rice and vinegar preparation"
      />

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
                      {ingredient.nutrition.carbs && (
                        <li>Carbs: {ingredient.nutrition.carbs}</li>
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

                {ingredient.preparationSteps && (
                  <div className={styles.preparation}>
                    <h4>Preparation Steps</h4>
                    <ol>
                      {ingredient.preparationSteps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
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
