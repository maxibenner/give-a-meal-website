import Button from "../button2";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Navigation() {
  return <nav className={styles.container}>
    <div className={styles.wordmark}>Give a Meal</div>

    <input type="checkbox" id="nav-button" className={styles.navButton} />
    <label htmlFor="nav-button" className={styles.navLabel}><p>&#9776;</p></label>

    <div className={styles.menuContainer}>
      <Link href="/" className="body">Get a Meal</Link>
      <Link href="/" className="body">Give a Meal</Link>
      <Link href="/" className="body">Restaurant Partners</Link>
      <Button href="/">Get the App</Button >
    </div>
  </nav>;
}
