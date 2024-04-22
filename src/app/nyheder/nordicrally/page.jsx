'use client'

import { IoArrowBackCircleOutline } from "react-icons/io5";
import React from 'react'
import { FaFacebook } from "react-icons/fa";

const page = () => {
    return (
        <>
            <article className="max-w-2xl pb-24 pt-4 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900 prose-base lg:prose-lg">
                <div className="w-full mx-auto space-y-4 text-center">
                    <a href="/nyheder" className='btn btn-primary hover:btn-secondary flex w-fit ms-6'><IoArrowBackCircleOutline />Tilbage</a>
                    <img src="/assets/images/nordic-rally.jpeg" alt="Billede fra nordic rally" className='object-cover w-full' />
                    <p className="text-xs font-semibold tracking-wider uppercase px-6">#DSR</p>
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl px-6">DSR støtter Nordic Rally Championship</h1>
                    <p className="text-sm dark:text-gray-600 px-6">
                        <time datetime="2024-01-02 15:34:18-0200">27. December, 2023</time>
                    </p>
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