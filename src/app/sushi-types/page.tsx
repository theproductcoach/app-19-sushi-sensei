import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card";
import Hero from "@/components/Hero";

type SushiType = {
  id: string;
  name: string;
  japameseName: string;
  description: string;
  ingredients: string[];
  category: string;
  imageUrl: string;
};

const sushiTypes: SushiType[] = [
  {
    id: "nigiri-salmon",
    name: "Salmon Nigiri",
    japameseName: "サーモン握り",
    description:
      "Fresh salmon served on hand-pressed vinegared rice. One of the most popular nigiri choices worldwide.",
    ingredients: ["Salmon", "Sushi rice", "Wasabi"],
    category: "Nigiri",
    imageUrl: "/sushi/nigiri-salmon.png",
  },
  {
    id: "maki-california",
    name: "California Roll",
    japameseName: "カリフォルニアロール",
    description:
      "Inside-out roll with crab meat, avocado, and cucumber. A Western-inspired roll that has become a global favorite.",
    ingredients: [
      "Crab meat",
      "Avocado",
      "Cucumber",
      "Sushi rice",
      "Nori",
      "Tobiko",
    ],
    category: "Maki",
    imageUrl: "/sushi/california-roll.png",
  },
  {
    id: "sashimi-tuna",
    name: "Tuna Sashimi",
    japameseName: "鮪刺身",
    description:
      "Premium cuts of raw tuna served without rice. The purest way to enjoy the flavor of the fish.",
    ingredients: ["Bluefin tuna"],
    category: "Sashimi",
    imageUrl: "/sushi/tuna-sashimi.png",
  },
  {
    id: "temaki-spicy",
    name: "Spicy Tuna Temaki",
    japameseName: "スパイシーツナ手巻き",
    description:
      "Hand-rolled cone sushi with spicy tuna mixture. A perfect blend of heat and fresh fish.",
    ingredients: ["Tuna", "Spicy mayo", "Nori", "Sushi rice"],
    category: "Temaki",
    imageUrl: "/sushi/spicy-tuna-temaki.png",
  },
  {
    id: "uramaki-dragon",
    name: "Dragon Roll",
    japameseName: "ドラゴンロール",
    description:
      "An elaborate roll topped with avocado and eel, creating a dragon-like appearance.",
    ingredients: [
      "Eel",
      "Avocado",
      "Cucumber",
      "Sushi rice",
      "Nori",
      "Eel sauce",
    ],
    category: "Uramaki",
    imageUrl: "/sushi/dragon-roll.png",
  },
  {
    id: "inari",
    name: "Inari Sushi",
    japameseName: "稲荷寿司",
    description:
      "Sushi rice stuffed in sweet, fried tofu pouches. A vegetarian favorite with a unique sweet and savory taste.",
    ingredients: ["Fried tofu pouch", "Sushi rice", "Sesame seeds"],
    category: "Inari",
    imageUrl: "/sushi/inari-sushi.png",
  },
];

export default function SushiTypesPage() {
  return (
    <main className={styles.main}>
      <Hero
        title="Types of Sushi"
        subtitle="Discover the diverse world of sushi, from traditional to modern varieties"
        backgroundImage="/sushi-types-banner.jpg"
        backgroundAlt="Various types of sushi on a traditional wooden board"
      />

      <div className={styles.content}>
        <section className={styles.content}>
          <div className={styles.filters}>
            <h2>Categories</h2>
            <ul>
              <li className={styles.active}>All Types</li>
              <li>Nigiri</li>
              <li>Maki</li>
              <li>Sashimi</li>
              <li>Temaki</li>
              <li>Uramaki</li>
            </ul>
          </div>

          <div className={styles.grid}>
            {sushiTypes.map((sushi) => (
              <Card key={sushi.id} className={styles.sushiCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={sushi.imageUrl}
                    alt={sushi.name}
                    width={400}
                    height={300}
                    className={styles.image}
                    priority={sushi.id === "nigiri-salmon"}
                  />
                  <span className={styles.category}>{sushi.category}</span>
                </div>
                <div className={styles.cardContent}>
                  <h3>{sushi.name}</h3>
                  <p className={styles.japaneseName}>{sushi.japameseName}</p>
                  <p className={styles.description}>{sushi.description}</p>
                  <div className={styles.ingredients}>
                    <h4>Key Ingredients:</h4>
                    <ul>
                      {sushi.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
