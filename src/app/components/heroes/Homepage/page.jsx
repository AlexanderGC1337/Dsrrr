'use client'

import Countdown from "../../countdown/countdown"
import Image from "next/image"

export default function Hero() {
    return (
        <>
            <div className="hero min-h-[600px] drop-shadow-2xl bg-cover bg-no-repeat md:bg-cover md:bg-bottom relative" style={{ backgroundImage: 'url(/assets/images/Hero.jpg)' }}>
                <div className="bg-primary backdrop-filter backdrop-blur sm:backdrop-blur-none bg-opacity-50 w-full sm:w-fit text-base-100 px-16 h-full py-5 sm:py-14 text-center filter absolute sm:right-40">
                    <h2 className="italic uppercase mb-3 text-2xl">Næste event</h2>
                    <img src="/assets/images/Logo-DSR-3.png" alt="DM-Ugen 2024 rallyplade" className="w-96 h-auto"/>
                    <div className="flex flex-col items-center gap-4 justify-center my-5">
                        <Image src={"/assets/images/calender2.svg"} width={40} height={40} className="filter invert" alt="Calendar icon"/>
                        <p>22. Juni 2024</p>
                    <Countdown/>
                    <a href="https://imk.dk/" target='_blank' className="btn btn-wide text-lg sm:btn-md lg:btn-lg mt-6 hover:bg-secondary hover:border-0 hover:text-primary uppercase tracking-wide">Læs mere</a>
                    </div>
                </div>
            </div>
        </>
    )
}
