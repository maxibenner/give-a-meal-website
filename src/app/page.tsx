import styles from "./page.module.css";
import Hero from "@/sections/Hero";
import Why from "@/sections/Why";
import How from "@/sections/How";
import FAQ from "@/sections/FAQ";
import CTA from "@/sections/CTA";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />

      <div className={styles.overlay}>
        <div className={styles.maxWidth}>
          <Why />
          <How />
          <FAQ />
          <CTA />
        </div>

        <Footer />

      </div>
    </>

  );
}
