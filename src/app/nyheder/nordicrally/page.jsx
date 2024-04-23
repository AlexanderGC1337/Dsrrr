'use client'

import { IoArrowBackCircleOutline } from "react-icons/io5";
import React from 'react'
import { FaFacebook } from "react-icons/fa";

const page = () => {
    return (
        <>
            <article className="max-w-2xl pb-24 pt-4 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900 prose-base lg:prose-lg">
                <div className="w-full mx-auto space-y-4 text-center border-b dark:border-gray-300 pb-10">
                    <a href="/nyheder" className='flex items-center gap-2 link-hover w-fit ms-6'><IoArrowBackCircleOutline />Tilbage</a>
                    <img src="/assets/images/nordic-rally.jpeg" alt="Billede fra nordic rally" className='object-cover w-full' />
                    <div className="flex justify-center gap-2">
                        <a className="text-xs font-semibold tracking-wider uppercase link link-primary" href="https://www.instagram.com/explore/tags/dansksuperrally/" target="_blank">#DSR</a>
                        <a className="text-xs font-semibold tracking-wider uppercase link link-primary" href="https://www.instagram.com/explore/tags/nordicrally/" target="_blank">#NordicRally</a>
                    </div>
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl px-6">DSR støtter Nordic Rally Championship</h1>
                    <p className="text-sm dark:text-gray-600 px-6">
                        <time datetime="2024-01-02 15:34:18-0200">27. December, 2023</time>
                    </p>
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
                        2024 kalenderen:
                    </p>
                    <p className='mt-5 font-medium'>
                        May 10:  Rally Nyköping, Nyköping Sweden <br />
                        June 14-15:  Pohjanmaa Ralli, Finland <br />
                        August 31:  Rally Larvik, Norway <br />
                        September 28, Rally Stoholm, Denmark <br />
                    </p>
                    <a href="https://rallynordic.fi/" target='_blank' className='link link-primary'>
                        Følg serien her
                    </a>

                </div>
            </article>
        </>
    )
}

export default page