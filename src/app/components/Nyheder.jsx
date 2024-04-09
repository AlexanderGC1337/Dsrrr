'use client'

import React from 'react'
import Image from 'next/image'

const Nyheder = () => {
    return (
        <>
            <div className='container px-5 md:px-0 mx-auto my-20'>
                <div className='flex items-center'>
                    <img src="/assets/images/Logo.jpg" alt="DSR logo" className='w-20 h-20' />
                    <h2 className='uppercase font-medium italic text-lg'>Nyheder</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 grid-rows-2 lg:grid-cols-6 md:grid-rows-4 gap-x-3 gap-y-2'>
                    <a href='/nyheder/topnyhed' className='relative col-span-1 md:col-span-3 lg:col-span-4 md:row-span-4'>
                        <img src="/assets/images/jp-racing.jpeg" alt="Rally bil bagfra" />
                        <div className='absolute bottom-0 ps-3 uppercase text-base-100 bg-black bg-opacity-40 py-3 tracking-wide'>
                            <div className='flex items-center gap-2 mb-2'>
                                <Image src={"/assets/images/calender2.svg"} width={20} height={20} className="filter invert" alt="Calendar icon" />
                                <p>01/02/2024</p>
                            </div>
                            <h3 className='text-sm pe-4 sm:pe-0 md:text-lg lg:text-sm font-medium'>
                                Forberedelserne til tv-dækningen af Dansk Super Rally går ind i deres afsluttende fase
                            </h3>
                        </div>
                        <p className='absolute top-4 text-sm bg-secondary rounded-e-full hover:bg-black hover:text-secondary font-semibold md:px-8 sm:py-3 sm:px-6 py-2 ps-2 pe-4 italic '>DSR</p>
                    </a>

                    <a href='/nyheder/nordicrally' className='relative col-span-1 md:col-span-3 lg:col-span-2 md:row-span-2'>
                        <img src="/assets/images/nordic-rally.jpeg" alt="Billede fra nordic rally" />
                        <div className='absolute bottom-0 ps-3 uppercase text-base-100 bg-black bg-opacity-40 py-3 tracking-wide'>
                            <div className='flex items-center gap-2 mb-2'>
                                <Image src={"/assets/images/calender2.svg"} width={20} height={20} className="filter invert" alt="Calendar icon" />
                                <p>27/12/2023</p>
                            </div>
                            <h3 className='text-sm pe-4 sm:pe-0 md:text-lg lg:text-sm font-medium'>
                            DSR støtter Nordic Rally Championship
                            </h3>
                        </div>
                        <p className='absolute top-4 text-sm bg-secondary rounded-e-full hover:bg-black hover:text-secondary font-semibold md:px-8 sm:py-3 sm:px-6 py-2 ps-2 pe-4 italic '>DSR</p>
                    </a>

                    <a href='/' className='relative col-span-1 md:col-span-3 lg:col-span-2 md:row-span-2'>
                        <img src="/assets/images/jp-racing.jpeg" alt="Rally bil bagfra" />
                        <div className='absolute bottom-0 ps-3 uppercase text-base-100 bg-black bg-opacity-40 py-3 tracking-wide'>
                            <div className='flex items-center gap-2 mb-2'>
                                <Image src={"/assets/images/calender2.svg"} width={20} height={20} className="filter invert" alt="Calendar icon" />
                                <p>##/##/####</p>
                            </div>
                            <h3 className='text-sm pe-4 sm:pe-0 md:text-lg lg:text-sm font-medium'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni natus perferendis excepturi cum voluptatem!
                            </h3>
                        </div>
                        <p className='absolute top-4 text-sm bg-secondary rounded-e-full hover:bg-black hover:text-secondary font-semibold md:px-8 sm:py-3 sm:px-6 py-2 ps-2 pe-4 italic '>DSR</p>
                    </a>
                </div>
                <div className='flex items-center gap-3 mt-10'>
                    <a href="https://www.fia.com/" target='_blank' className='w-40 h-full'>
                        <img src="/assets/images/fia-logo.png" alt="FIA logo"/>
                    </a>
                    <a href="https://www.dasu.dk/sportsgrene/rally/" target='_blank' className='w-40 h-full'>
                        <img src="/assets/images/DASU-logo.png" alt="DASU logo"/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Nyheder