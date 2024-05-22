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
                    <img src="/assets/images/DASU-logo.png" alt="DASU logo" className="p-3" />
                    <div className="flex justify-center gap-2">
                        <a className="text-xs font-semibold tracking-wider uppercase link link-primary" href="https://www.instagram.com/explore/tags/dansksuperrally/" target="_blank">#DSR</a>
                        <a className="text-xs font-semibold tracking-wider uppercase link link-primary" href="https://www.instagram.com/explore/tags/dasudk/" target="_blank">#DASUDK</a>
                    </div>
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl px-6">Er du Danmarks næste rallytalent?</h1>
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
                        Så tag med, når DASU præsenterer sin nye rallyskole, der med praktik, teori og personlig support fra dygtige mentorer hjælper dig på vej mod toppen af dansk rally og måske endnu længere.
                        Initiativet præsenteres på infomøder den 4. juni i Kolding Motorsports klubhus og den 6. juni i ASKH’s klubhus i Roskilde. Begge møder er kl. 19.
                    </p>

                    <p>
                        Mere info om skolen følger senere på måneden, men sæt allerede nu kryds i kalenderen.
                    </p>

                    <p>
                        Oplægget til skolens struktur og indhold er lavet af en arbejdsgruppe bestående af Lasse Karlshøj, Anders Kirkeby Hansen, Jørgen Esbensen, Niels Erik Jørgensen og Jeannette Kvick.
                        Del – del – del så vi får den gode nyhed ud til så mange som muligt.
                    </p>


                </div>
            </article>
        </>
    )
}

export default page