'use client'

import styles from "./page.module.scss"
import Countdown from "../../countdown/countdown"

export default function Hero() {
    return (
        <section id={styles.heroContainer}>
            <img id={styles.heroImg} src="/assets/images/Hero.jpg" alt="" />

            <div id={styles.eventContainer}>
                <h2 id={styles.eventTitle}>Næste event</h2>
                <img id={styles.eventLogo} className="bg-white" src="/assets/images/master_rallyplade_Udkast_RallyYding.svg" alt="" />

                <div id={styles.calenderContainer}>
                    <img id={styles.eventCalender} src="/assets/images/calender2.svg" alt="" />
                    <p id={styles.eventCalenderDate}>20 April 2024</p>
                </div>
                <Countdown/>

                <p id={styles.eventBtn}>Læs mere</p>
            </div>
        </section>
    )
}
