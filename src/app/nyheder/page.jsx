'use client'

import React from 'react'

const page = () => {
    return (
        <>
            <section className='min-h-screen bg-base-100'>
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="/nyheder/fartdueller-i-soenderjylland" className="block max-w-sm gap-3 mx-auto sm:max-w-full group rounded-lg hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                        <img src="/assets/images/rally-soenderjylland/kenneth-bil.jpg" alt="Kenneth i Citröen C3" className="object-cover w-full rounded-t-lg lg:rounded-r-none lg:rounded-l-lg sm:h-96 lg:col-span-7" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">FARTDUELLER I SØNDERJYLLAND</h3>
                            <span className="text-xs dark:text-gray-600">22. Maj, 2024</span>
                            <p>
                                Danmarks skrappeste rallykørere samles fredag og lørdag til Au2parts Rally Sønderjylland, som er anden runde i Dansk Super Rally og Dansk Super Rally Short 2024. Dermed får publikum  mulighed for at følge rallyeliten på nogle hurtige og meget udfordrende hastighedsprøver tæt på rallyets centrum hos EUC Syd i Aabenraa.
                            </p>
                        </div>
                    </a>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <a rel="noopener noreferrer" href="/nyheder/rallyskole" className="max-w-sm mx-auto rounded-lg group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full h-44 p-2 dark:bg-gray-500 rounded-t-lg" src="/assets/images/DASU-logo.png" alt="DASU logo" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Er du Danmarks næste rallytalent?</h3>
                                <span className="text-xs dark:text-gray-600">7. Maj, 2024</span>
                                <p>Så tag med, når DASU præsenterer sin nye rallyskole, der med praktik, teori og personlig support fra dygtige mentorer...</p>
                            </div>
                        </a>
                        {/* <a rel="noopener noreferrer" href="/nyheder/tv-aftalen-er-paa-plads" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full h-44 dark:bg-gray-500" src="/assets/images/galleri/DSC_9531.JPG" alt='Billede af servicepladsen' />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">TV-aftalen er på plads til alle afdelinger af Dansk Super Rally i 2024</h3>
                                <span className="text-xs dark:text-gray-600">15. April, 2024</span>
                                <p>Følgende motorsports klubber: Horsens Automobil- & Motor Klub, Ikast og Omegns Motorklub, Kjellerup og Omegns Motorklub, Randers Auto Sport, Ringkøbing...</p>
                            </div>
                        </a> */}
                        <a rel="noopener noreferrer" href="/nyheder/forberedelserne-til-tv-daekningen" className="max-w-sm mx-auto rounded-lg group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full h-44 dark:bg-gray-500 rounded-t-lg" src="/assets/images/jp-racing.jpeg" alt='Rally bil bagfra' />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Forberedelserne til tv-dækningen af Dansk Super Rally går ind i deres afsluttende fase</h3>
                                <span className="text-xs dark:text-gray-600">1. Februar, 2024</span>
                                <p>Der er nu en måned til, at første afdeling af årets Dansk Super Rally afvikles. Forberedelserne omkring tv-dækningen af mesterskabets seks løb...</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="/nyheder/nordicrally" className="max-w-sm mx-auto rounded-lg group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full h-44 dark:bg-gray-500 rounded-t-lg" src="/assets/images/nordic-rally.jpeg" alt='Billede fra nordic rally' />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">DSR støtter Nordic Rally Championship</h3>
                                <span className="text-xs dark:text-gray-600">27. December, 2023</span>
                                <p>Læs mere...</p>
                            </div>
                        </a>

                        {/* <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?4" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                                <span className="text-xs dark:text-gray-600">January 24, 2021</span>
                                <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?5" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                                <span className="text-xs dark:text-gray-600">January 25, 2021</span>
                                <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?6" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                                <span className="text-xs dark:text-gray-600">January 26, 2021</span>
                                <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                            </div>
                        </a> */}
                    </div>
                    {/* <div className="flex justify-center">
                        <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default page