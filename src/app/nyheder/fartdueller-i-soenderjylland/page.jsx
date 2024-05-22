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
                    <img src="/assets/images/rally-soenderjylland/kenneth-bil.jpg" alt="Kenneth i Citröen C3" />
                    <div className="flex justify-center gap-2">
                        <a className="text-xs font-semibold tracking-wider uppercase link link-primary" href="https://www.instagram.com/explore/tags/dansksuperrally/" target="_blank">#DSR</a>
                        <a className="text-xs font-semibold tracking-wider uppercase link link-primary" href="https://www.instagram.com/explore/tags/dasudk/" target="_blank">#DASUDK</a>
                    </div>
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl px-6">FARTDUELLER I SØNDERJYLLAND</h1>
                    <p className="text-sm dark:text-gray-600 px-6">
                        <time datetime="2024-01-02 15:34:18-0200">22. Maj, 2024</time>
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
                    <h2 className="italic">
                        Fredag og lørdag er Danmarks rallyelite på vejene
                        i Au2parts Rally Sønderjylland
                    </h2>
                    <p>
                        Danmarks skrappeste rallykørere samles fredag og lørdag til Au2parts Rally Sønderjylland, som er anden runde i Dansk Super Rally og Dansk Super Rally Short 2024. Dermed får publikum  mulighed for at følge rallyeliten på nogle hurtige og meget udfordrende hastighedsprøver tæt på rallyets centrum hos EUC Syd i Aabenraa.
                    </p>

                    <p>
                        Deltagerlisten tæller 65 mandskaber fra Syd- og Sønderjylland såvel som fra resten af landet samt Tyskland og Sverige. Dansk Super Rally køres som et åbent mesterskab, så deltagere fra udlandet kan deltage på lige fod med danske konkurrenter om Dansk Idræts Forbunds mesterskab.
                    </p>

                    <p>
                        Efter turneringens første runde i Yding ved Horsens den 20. april, har landets for tiden hurtigste rallyhold, Kenneth Madsen og Mette Felthaus, Ruds Vedby/Horsens, taget føringen i deres Citroën C3 Rally2, men de kan forvente kvalificeret modstand fra lokale hold, når det gælder Top-5 i den samlede pointstilling.
                    </p>
                    <h3>
                        Lokale kørere står stærkt
                    </h3>
                    <p>
                        Det er først og fremmest den 4-dobbelte mester Kim Boisen og datteren Emilie Boisen fra Broager, som er stærkt kørende i en historisk BMW M3 fra 1987. Dertil kommer Martin Johansen og Louise Bang Hartwig, Vejen/Middelfart, i en helt ny Peugeot 208 Rally4.
                    </p>
                    <p>
                        Blandt feltets hurtigste er også Esben Hegelund og Erik Kristensen, Hadsten/Egtved, i en Hyundai i20 WRC fra Hyundais fabriksteam, hvormed de har kapacitet til at lægge samtlige konkurrenter bag sig. WRC-holdet kan vinde Rally Sønderjylland, men dog ikke opnå point til mesterskabet, da dette ikke er udskrevet for WRC-biler.
                    </p>
                    <p>
                        Foruden at være den anden af seks runder i DIF-mesterskabet tæller Au2parts Rally Sønderjylland også til de mesterskaber, som Dansk Automobil Sports Unions har udskrevet for  en række vognklasser.
                    </p>
                    <p>
                        Fredag har deltagerne fra klokken 16:00 til 20:00 mulighed for at gennemkøre prøverne og lave noter til lørdagens rally, som køres med start fra EUC Syd klokken 11:00 og ved mål samme sted klokken 19:00.
                        Rallyets otte hastighedsprøver køres på tre afspærrede strækninger. Den ene er umiddelbart ved rallyets centrum ved Lundsbjergvej, mens de to andre prøver køres nord og vest for Aabenraa.
                    </p>
                    <p>
                        Løbets totale distance er 255 kilometer på asfaltveje, hvoraf 98 kilometer køres som hastighedsprøver på afspærrede strækninger. Deltagerne i Short-rallyets rute er på 71 kilometer inklusive 49 kilometer hastighedsprøver.
                    </p>


                </div>
            </article>
        </>
    )
}

export default page