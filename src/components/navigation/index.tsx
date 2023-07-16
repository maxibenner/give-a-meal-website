import Button from "../Button";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Navigation() {
  return <nav className={styles.container}>
    <div className={styles.wordmark}>Give a Meal</div>
    <div className={styles.menuContainer}>
      <Link href="/" className="body">Get a Meal</Link>
      <Link href="/" className="body">Give a Meal</Link>
      <Link href="/" className="body">Restaurant Partners</Link>
      <Button href="/">Get the App</Button >
    </div>
  </nav>;
}
