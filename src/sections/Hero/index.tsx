import Button from "@/components/Button"
import styles from "./styles.module.css"
import Image from "next/image"
import Tomato from "../../assets/tomato.svg"
import Cucumber from "../../assets/cucumber.svg"
import Onion from "../../assets/onion.svg"

export default function Hero() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.vegContainer}>
                    <Image src={Tomato} alt="tomato" width={332} height={484} />
                    <Image src={Cucumber} alt="cucumber" width={377} height={430} />
                    <Image src={Onion} alt="onion" width={285} height={420} />
                </div>

                <div className={styles.textContainer}>
                    <h1>Find Donated Meals Near You</h1>
                    <p className="body_l">Together with our partner restaurants and their customers, Give A Meal provides meals to people in need in New York City.</p>
                    <Button href="/">Find a Meal</Button>
                </div>
            </div>

            <div className={styles.spacer} />
        </>
    )
}