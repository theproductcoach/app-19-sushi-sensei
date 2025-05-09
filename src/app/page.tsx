import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/home-bg.png"
            alt="Japanese Background Pattern"
            fill
            className={styles.backgroundImage}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <h1>Sushi Sensei</h1>
          <p>Master the art and etiquette of sushi dining</p>
          <Link href="/what-is-sushi" className={styles.button}>
            Start Here
          </Link>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2>Essential Sushi Knowledge</h2>
          <div className={styles.featureGrid}>
            <FeatureCard
              title="Sushi Styles"
              description="Learn about different types of sushi, from nigiri to rolls"
              icon="🍣"
              href="/sushi-types"
            />
            <FeatureCard
              title="Dining Etiquette"
              description="Master proper chopstick use and essential sushi bar manners"
              icon="🥢"
              href="/etiquette"
            />
            <FeatureCard
              title="Cultural Context"
              description="Understand the rich history and traditions behind sushi"
              icon="🎌"
              href="/culture"
            />
          </div>
        </div>
      </section>

      {/* Ingredients Guide Section */}
      <section className={`${styles.features} ${styles.altBackground}`}>
        <div className={styles.container}>
          <h2>Ingredients Guide</h2>
          <div className={styles.featureGrid}>
            <FeatureCard
              title="Common Fish Types"
              description="Explore popular fish like tuna, salmon, and yellowtail"
              icon="🐟"
              href="/ingredients/fish"
            />
            <FeatureCard
              title="Specialty Fish"
              description="Discover unique and seasonal fish varieties"
              icon="🎣"
              href="/ingredients/specialty-fish"
            />
            <FeatureCard
              title="Other Seafood"
              description="Learn about shellfish, roe, and other marine ingredients"
              icon="🦐"
              href="/ingredients/seafood"
            />
          </div>
        </div>
      </section>

      {/* Additional Components Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2>Essential Components</h2>
          <div className={styles.featureGrid}>
            <FeatureCard
              title="Rice & Vinegar"
              description="The foundation of sushi: perfect rice preparation"
              icon="🍚"
              href="/ingredients/rice"
            />
            <FeatureCard
              title="Nori & Garnishes"
              description="Seaweed, wasabi, ginger, and other key components"
              icon="🌿"
              href="/ingredients/garnishes"
            />
            <FeatureCard
              title="Sauces & Seasonings"
              description="Traditional and modern sushi condiments"
              icon="🥢"
              href="/ingredients/seasonings"
            />
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className={styles.quickStart}>
        <div className={styles.container}>
          <h2>Learning Path</h2>
          <div className={styles.stepsContainer}>
            <StepCard
              number="01"
              title="Learn the Basics"
              description="Start with sushi types and essential etiquette"
            />
            <StepCard
              number="02"
              title="Explore Ingredients"
              description="Discover the various fish and seafood used in sushi"
            />
            <StepCard
              number="03"
              title="Master Appreciation"
              description="Understand flavors, textures, and seasonal selections"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon: string;
  href?: string;
}) {
  const content = (
    <>
      <div className={styles.featureIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles.featureCard}>
        {content}
      </Link>
    );
  }

  return <div className={styles.featureCard}>{content}</div>;
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.stepCard}>
      <div className={styles.stepNumber}>{number}</div>
      <div className={styles.stepContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
