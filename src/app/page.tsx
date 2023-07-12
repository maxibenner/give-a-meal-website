import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="grid">
      <div className={styles.col_12} />
      <div className={styles.col_center} />
      <div className={styles.col_left} />
    </div>
  );
}
