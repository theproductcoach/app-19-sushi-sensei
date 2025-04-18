import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card";
import type { IngredientItem } from "../types";

const ingredients: IngredientItem[] = [
  {
    id: "soy-sauce",
    name: "Soy Sauce (Shoyu)",
    japaneseName: "醤油",
    description:
      "A fundamental condiment in sushi dining, made from fermented soybeans, wheat, salt, and koji mold. Essential for dipping and seasoning.",
    usage:
      "Used for dipping sushi and sashimi, or as a seasoning component in various rolls.",
    tips: [
      "Never pour directly over sushi rice",
      "Dip fish-side down, not rice-side",
      "Use light soy sauce for delicate fish",
      "Avoid drowning sushi in sauce",
    ],
    varieties: [
      "Koikuchi (dark)",
      "Usukuchi (light)",
      "Tamari (wheat-free)",
      "Artisanal aged",
    ],
    imageUrl: "/ingredients/soy-sauce.jpg",
    storageInfo:
      "Store in a cool, dark place. Once opened, refrigeration can extend shelf life but is not required.",
  },
  {
    id: "nikiri",
    name: "Nikiri Sauce",
    japaneseName: "煮切り",
    description:
      "A sweet and savory glaze made from reduced soy sauce, mirin, and sake. Used by sushi chefs to brush on nigiri.",
    usage:
      "Brushed lightly on top of nigiri sushi to add flavor and create a glossy finish.",
    tips: [
      "Apply sparingly with a brush",
      "Make fresh regularly",
      "Store in an airtight container",
      "Can be customized with dashi",
    ],
    varieties: [
      "Traditional (soy-based)",
      "Light (usukuchi-based)",
      "Dashi-infused",
    ],
    imageUrl: "/ingredients/nikiri.jpg",
    storageInfo:
      "Store in an airtight container in the refrigerator for up to 2 weeks.",
  },
  {
    id: "ponzu",
    name: "Ponzu Sauce",
    japaneseName: "ポン酢",
    description:
      "A citrus-based sauce made with yuzu, sudachi, or other citrus fruits combined with soy sauce. Adds brightness to sushi.",
    usage:
      "Used as a dipping sauce for sashimi or as a finishing touch on certain rolls.",
    tips: [
      "Best when freshly made",
      "Can be mixed with other sauces",
      "Use sparingly to avoid overpowering",
      "Great with white fish",
    ],
    varieties: [
      "Yuzu ponzu",
      "Sudachi ponzu",
      "Kabosu ponzu",
      "Citrus-free (straight)",
    ],
    imageUrl: "/ingredients/ponzu.jpg",
    storageInfo:
      "Refrigerate after opening and use within 3 months for best flavor.",
  },
  {
    id: "sesame",
    name: "Sesame (Goma)",
    japaneseName: "胡麻",
    description:
      "Both whole seeds and oil are used in sushi preparation, adding nutty flavor and texture to various rolls and dishes.",
    usage:
      "Toasted seeds are sprinkled on rolls, while oil may be used in sauce preparation.",
    tips: [
      "Toast seeds before use",
      "Store in airtight container",
      "Can mix black and white seeds",
      "Grind fresh for maximum flavor",
    ],
    varieties: ["White sesame", "Black sesame", "Golden sesame", "Sesame oil"],
    imageUrl: "/ingredients/sesame.jpg",
    storageInfo:
      "Store seeds in an airtight container in a cool, dark place. Oil should be refrigerated after opening.",
  },
  {
    id: "furikake",
    name: "Furikake",
    japaneseName: "ふりかけ",
    description:
      "A dry seasoning mixture typically containing seaweed, sesame seeds, dried fish, sugar, and salt. Adds flavor and texture to rolls.",
    usage:
      "Sprinkled on top of rolls or used as a coating for uramaki (inside-out rolls).",
    tips: [
      "Check ingredients for allergies",
      "Store in cool, dry place",
      "Can make custom blends",
      "Use fresh for best texture",
    ],
    varieties: [
      "Nori Komi (seaweed)",
      "Sake (salmon)",
      "Wasabi",
      "Umeboshi (plum)",
    ],
    imageUrl: "/ingredients/furikake.jpg",
    storageInfo:
      "Store in an airtight container in a cool, dry place. Use within 2-3 months of opening.",
  },
];

export default function SaucesAndSeasoningsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/sauces-banner.jpg"
            alt="Various sushi sauces and seasonings"
            fill
            className={styles.backgroundImage}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <h1>Sauces & Seasonings</h1>
          <p>
            Essential condiments and seasonings that enhance and complement
            sushi
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
