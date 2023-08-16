"use client"

import Button from "../button";
import styles from "./styles.module.css";
import Link from "next/link";
import React from "react"
import { useRouter } from "next/navigation"

export default function Navigation() {
  const router = useRouter()
  const [active, setActive] = React.useState(false)

  function closeMenu() {
    setActive(false)
  }

  return <nav className={styles.container}>
    <Link className={styles.wordmark} href="/">Give a Meal</Link>

    <button onClick={() => setActive((prev) => !prev)} className={`${styles.navButton} ${active && styles.navButtonActive}`}>&#9776;</button>


    <div className={styles.menuContainer}>
      <Link href="/get-a-meal" className="body">Get a Meal</Link>
      <Link href="/give-a-meal" className="body">Give a Meal</Link>
      <Link href="/restaurants" className="body">Restaurant Partners</Link>
      <Button href="/get-the-app">Get the App</Button >
    </div>

    <div className={`${styles.menuContainerMobile} ${active && styles.menuContainerMobileActive}`}>
      <Link onClick={closeMenu} href="/get-a-meal" className="body">Get a Meal</Link>
      <Link onClick={closeMenu} href="/give-a-meal" className="body">Give a Meal</Link>
      <Link onClick={closeMenu} href="/restaurants" className="body">Restaurant Partners</Link>
      <Button onClick={closeMenu} href="/get-the-app">Get the App</Button >
    </div>


  </nav>;
}
