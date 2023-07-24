import styles from "./page.module.css";
import Hero from "@/sections/Hero";
import Why from "@/sections/Why";
import How from "@/sections/How";
import FAQ from "@/sections/FAQ";
import CTA from "@/sections/CTA";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Give a Meal</title>
        <meta name="description" content="We combat food insecurity and fostering an environment of connection and compassion in local communities." />
      </Head>
      <Hero />

      <div className={styles.overlay}>
        <div className={styles.maxWidth}>
          <Why />
          <How />
          <FAQ />
          <CTA />
        </div>
      </div>
    </div>

  );
}
