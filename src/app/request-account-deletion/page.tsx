import Head from "next/head";
import React from "react"
import styles from "@/styles/document.module.css"

export default function Page() {
  return (
    <>
      <Head>
        <title>Account deletion</title>
        <meta name="description" content="Contact us to request deletion of your account." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`grid ${styles.wrapper}`}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <h2>Account deletion</h2>
            <p className="body_s">Last updated Jul 18, 2023</p>
          </div>

          <div className={styles.spacer} />

          <p className="body">
            When you delete your account we will retain some data about donations
            you have redeemed and/or submitted.
          </p>
          <br />
          <p className="body">
            Please contact <b>max@give-a-meal.org</b> to request an account deletion.
          </p>

        </div>
      </div>
    </>
  );
}
