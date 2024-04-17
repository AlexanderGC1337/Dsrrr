'use client'

import React from 'react'
import { FaFacebook } from "react-icons/fa";

const page = () => {
    return (
        <>
            <article className="max-w-2xl pb-24 pt-4 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900 prose-base lg:prose-lg">
                <div className="w-full mx-auto space-y-4 text-center">
                    <img src="/assets/images/galleri/DSC_9531.JPG" alt="Billede af servicepladsen" />
                    <p className="text-xs font-semibold tracking-wider uppercase px-6">#DSR</p>
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl px-6">TV-aftalen er på plads til alle afdelinger af Dansk Super Rally i 2024</h1>
                    <p className="text-sm dark:text-gray-600 px-6">
                        <time datetime="2024-01-02 15:34:18-0200">15. April, 2024</time>
                    </p>
                </div>
                <div className="dark:text-gray-800 px-6">
                    <p>
                        Følgende motorsports klubber:
                    </p>
                    <p className='mt-5 font-medium'>
                        Horsens Automobil- & Motor Klub <br />
                        Ikast og Omegns Motorklub <br />
                        Kjellerup og Omegns Motorklub <br />
                        Randers Auto Sport <br />
                        Ringkøbing og Omegns Motorklub <br />
                        Vejen og Omegns Motorklub <br />
                        Vejen og Omegns Motorklub, Motorsport Nordjylland <br />
                    </p>
                    <p>
                        under Dansk Automobil Sports Union samt en række aktive rallykører har som tidligere beskrevet indledt et samarbejde med Nowtek ApS med henblik på produktion af tv-live udsendelser samt recap programmer fra alle Dansk Super Rally afdelinger i 2024.
                    </p>
                    <p>
                        Med aftalen får Nowtek ApS som det eneste medie en prioriteret akkreditering til arrangementerne med henblik på kamera positioner på hastighedsprøverne, grafik over hastighedsprøverne, tilladelse til visning af stilling og resultater fra hver afdeling samt rettighederne til at dele Video/Billede materialet med de forskellige tv-stationer. Andre medier kan efterfølgende og efter en nærmere aftale med klubberne og NowTek få adgang til materialet.
                    </p>
                    <p>
                        Med aftalen ønsker klubberne en ny retning der kan løfte produktet Dansk Super Rally til et nyt niveau hvor man over tid får samlet kræfterne og erfaring med TV-produktion af Dansk Rally.
                    </p>

                </div>
                <div className="pt-12 border-t px-6 dark:border-gray-300">
                    <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                        <img src="/assets/images/Logo.jpg" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300" />
                        <div className="flex flex-col">
                            <h4 className="text-lg font-semibold">Dansk Super Rally</h4>
                            <p className="dark:text-gray-600 mt-2">CVR 44630575
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 align-center">
                        <a rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61552746026664" target='_blank' aria-label="Facebook" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            </article>
        </>
    )
}

export default page