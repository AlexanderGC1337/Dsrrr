'use client'

import { IoArrowBackCircleOutline } from "react-icons/io5";
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import DelUrl from "@/app/components/DelUrl";

const page = () => {
    return (
        <>
            <article className="max-w-2xl pb-24 pt-4 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900 prose-base lg:prose-lg">
                <div className="w-full mx-auto space-y-4 text-center border-b dark:border-gray-300 pb-10">
                    <a href="/nyheder" className='flex items-center gap-2 link-hover w-fit ms-6'><IoArrowBackCircleOutline />Tilbage</a>
                    <img src="/assets/images/galleri/DSC_9531.JPG" alt="Billede af servicepladsen" />
                    <div className="flex justify-center gap-2">
                        <a className="text-xs font-semibold tracking-wider uppercase link link-primary" href="https://www.instagram.com/explore/tags/dansksuperrally/" target="_blank">#DSR</a>
                        <a className="text-xs font-semibold tracking-wider uppercase link link-primary" href="https://www.instagram.com/explore/tags/dasudk/" target="_blank">#DASUDK</a>
                    </div>
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl px-6">TV-aftalen er på plads til alle afdelinger af Dansk Super Rally i 2024</h1>
                    <p className="text-sm dark:text-gray-600 px-6">
                        <time datetime="2024-01-02 15:34:18-0200">15. April, 2024</time>
                    </p>
                    <DelUrl/>
                </div>
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row justify-center">
                    <img src="/assets/images/Logo.jpg" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300" />
                    <div className="flex flex-col self-center">
                        <p className="dark:text-gray-600 mt-2">Denne nyhed er bragt af Dansk Super Rally
                        </p>
                    </div>
                </div>
                <div className="dark:text-gray-800 px-6">
                    <p>
                        Følgende motorsports klubber:
                    </p>
                    <p className='mt-5 font-medium'>
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
            </article>
        </>
    )
}

export default page