'use client'

import Countdown from "../../countdown/countdownv2"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'

export default function Hero() {
    return (
        <>
            <div className="hero min-h-[600px] drop-shadow-2xl bg-cover bg-no-repeat md:bg-cover md:bg-bottom relative" style={{ backgroundImage: 'url(/assets/images/Hero.jpg)' }}>
                {/* Subtle overlay to improve text contrast */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                
                {/* Content container */}
                <div className="container mx-auto px-4 relative h-full flex flex-col md:flex-row items-center justify-between">
                    
                    {/* Left side: Rally info */}
                    <div className="md:w-1/2 text-white p-6 md:p-0 mt-8 md:mt-0">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Dansk Super Rally</h1>
                        <p className="text-xl mb-6">Oplev Danmarks bedste rally-kørere i action</p>
                        
                        <a href="/hvaderdsr" className="inline-block bg-secondary hover:bg-white hover:text-secondary text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
                            Læs mere om DSR
                        </a>
                    </div>
                    
                    {/* Right side: Countdown (preserved from original) */}
                    <div className="bg-[#1b1b1b] rounded-xl bg-opacity-50 md:bg-opacity-100 w-full sm:w-fit text-base-100 px-16 py-5 sm:py-14 text-center mt-8 md:mt-0">
                        <div className="flex flex-col items-center gap-4 justify-center my-5">
                            <Countdown/>
                        </div>
                    </div>
                </div>
                
                {/* Optional event highlight banner */}
                <div className="absolute bottom-0 left-0 right-0 bg-secondary bg-opacity-90 py-3 px-4">
                    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                        <p className="text-white font-medium">Næste løb: Rally Sønderjylland — 12-13 Maj 2025</p>
                        <a href="/rallies" className="text-white flex items-center hover:underline mt-2 md:mt-0">
                            <span>Se kalender</span>
                            <ArrowRight size={16} className="ml-1" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}