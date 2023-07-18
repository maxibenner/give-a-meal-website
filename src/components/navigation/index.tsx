import Button from "../button";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Navigation() {
  return <nav className={styles.container}>
    <Link className={styles.wordmark} href="/">Give a Meal</Link>

    <input type="checkbox" id="nav-button" className={styles.navButton} />
    <label htmlFor="nav-button" className={styles.navLabel}><p>&#9776;</p></label>


    <div className={styles.menuContainer}>
      <Link href="/get-a-meal" className="body">Get a Meal</Link>
      <Link href="/give-a-meal" className="body">Give a Meal</Link>
      <Link href="/restaurant-partners" className="body">Restaurant Partners</Link>
      <Button href="/get-the-app">Get the App</Button >
    </div>

    <div className={styles.menuContainerMobile}>
      <Link href="/get-a-meal" className="body">Get a Meal</Link>
      <Link href="/give-a-meal" className="body">Give a Meal</Link>
      <Link href="/restaurant-partners" className="body">Restaurant Partners</Link>
      <Button href="/get-the-app">Get the App</Button >
    </div>


  </nav>;
}
