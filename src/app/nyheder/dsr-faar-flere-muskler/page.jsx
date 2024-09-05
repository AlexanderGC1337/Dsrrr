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
                    <img src="/assets/images/Logo.png" alt="DSR Logo" />
                    <div className="flex justify-center gap-2">
                        <a className="text-xs font-semibold tracking-wider uppercase link link-primary" href="https://www.instagram.com/explore/tags/dansksuperrally/" target="_blank">#DSR</a>
                        <a className="text-xs font-semibold tracking-wider uppercase link link-primary" href="https://www.instagram.com/explore/tags/dasudk/" target="_blank">#DASUDK</a>
                    </div>
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl px-6">Dansk Super Rally får flere muskler</h1>
                    <p className="text-sm dark:text-gray-600 px-6">
                        <time datetime="2024-01-02 15:34:18-0200">5. September, 2024</time>
                    </p>
                    <DelUrl />
                </div>
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row justify-center">
                    <img src="/assets/images/Logo.jpg" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300" />
                    <div className="flex flex-col self-center">
                        <p className="dark:text-gray-600 mt-2">Denne nyhed er bragt af Dansk Super Rally
                        </p>
                    </div>
                </div>
                <div className="dark:text-gray-800 px-6">
                    <h2>
                        De kommende sæsoner skal kvaliteten af Dansk Super Rally løftes. DASUs bestyrelse har derfor udpeget en styregruppe på tre personer, der sammen med de afviklende klubber skal hæve niveauet for toppen af dansk rally.
                    </h2>
                    <p>
                        Det ambitiøse mål med gruppens arbejde er at skabe en løbsserie, der kan tiltrække op mod 100 deltagere til hvert løb, og at skabe en serie, der som et fyrtårn for dansk rally er attraktiv for både danske og udenlandske kørere.
                    </p>

                    <p>
                        Styregruppen består af erfarne folk fra rallysporten med Kenneth Svendsen Nørskov, Niels Erik Jørgensen og René Pallesen.
                    </p>

                    <p>
                        Formålet med at udpege gruppen er kort fortalt at udvikle et ensartet koncept for afviklingen af Dansk Super Rally, så serien bliver endnu mere tiltrækkende for både kørere, publikum og sponsorer.
                        Planen er også at det med gruppen i ryggen bliver nemmere og mere overskueligt for DASUs klubber at afvikle løb efter DSR-konceptet.

                    </p>
                    <p>
                        De 3 personer i gruppen skal blandt andet arbejde med at sikre ensartethed og forudsigelighed inden for områder som tidtagning, sikkerhed og teknik.
                        Det betyder også, at flere personer bliver tilknyttet gruppen for at hjælpe med udviklingen af Dansk Super Rally.

                    </p>
                    <p>
                        Kenneth Svendsen er udpeget som projektleder og ansvarlig for Dansk Super Rally. Det betyder, at han forlader DASUs rallyudvalg. Han afløses som formand af Erik Larsen.
                    </p>
                    <p>
                        Jens Færgemann fra DASUs sekretariat tager sig af administration og koordinering i forbindelse med gruppens arbejde.
                    </p>


                </div>
            </article>
        </>
    )
}

export default page