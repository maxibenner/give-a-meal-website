import Button from "@/components/button"
import styles from "./styles.module.css"
import Image from "next/image"
import Tomato from "@/public/assets/tomato.svg"
import Cucumber from "@/public/assets/cucumber.svg"
import Onion from "@/public/assets/onion.svg"
import Background from "@/public/assets/bg.jpg"

export default function Hero() {
    return (
        <>
            <div className={styles.container}/* style={{ backgroundImage: `url(${Background.src})` }}*/>
                <div className={styles.maxWidth}>
                    <div className={styles.vegContainer}>
                        <Image loading="eager" src={Tomato} alt="tomato" width={332} height={484} />
                        <Image loading="eager" src={Cucumber} alt="cucumber" width={377} height={430} />
                        <Image loading="eager" src={Onion} alt="onion" width={285} height={420} />
                    </div>

                    <div className={styles.textContainer}>
                        <h1>Find Donated <br /> Meals Near You</h1>
                        <p className="body_l">Together with our partner restaurants and their customers, Give A Meal provides meals to people in need in New York City.</p>
                        <Button href="/get-a-meal">Get a Meal</Button>
                    </div>
                </div>

            </div>

            <div className={styles.spacer} />
        </>
    )
}