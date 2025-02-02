'use client'

/* import Countdown from "../../countdown/countdown" */
import Countdown from "../../countdown/countdownv2"
import Image from "next/image"

export default function Hero() {
    return (
        <>
            <div className="hero min-h-[600px] drop-shadow-2xl bg-cover bg-no-repeat md:bg-cover md:bg-bottom relative" style={{ backgroundImage: 'url(/assets/images/Hero.jpg)' }}>
                <div className="bg-[#1b1b1b] rounded-xl bg-opacity-50 md:bg-opacity-100 w-full sm:w-fit text-base-100 px-16 py-5 sm:py-14 text-center  absolute sm:right-40">
                    {/* <h2 className="italic uppercase mb-3 text-2xl select-none">Næste event - Rally Stoholm</h2> */}
                    {/* <img src="/assets/images/stoholm-rallyplade.png" alt="Rally stoholm rallyplade" className="w-72 h-auto bg-base-100 rounded-lg p-2 mx-auto"/> */}
                    {/* <div className="flex flex-col items-center gap-4 justify-center my-5">
                        <Image src={"/assets/images/calender2.svg"} width={40} height={40} className="filter invert" alt="Calendar icon"/>
                        <p className="select-none">27-28. September 2024</p>
                    
                    <a href="https://rallystoholm.dk" target='_blank' className="btn btn-wide text-lg sm:btn-md lg:btn-lg mt-6 hover:bg-secondary hover:border-0 hover:text-primary uppercase tracking-wide">Læs mere</a>
                    </div> */}
                    <div className="flex flex-col items-center gap-4 justify-center my-5">

                    <Countdown/>
                    </div>
                </div>
            </div>
        </>
    )
}
