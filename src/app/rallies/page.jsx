import React from 'react'
import Header from '../components/header/page'
import Footer from '../components/Footer'
import { Icon } from '@iconify-icon/react';

const rallies = () => {
    return (
        <div>
            <Header />
            <div className="hero min-h-[500px]" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>

                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-[whitesmoke]">
                        <h1 className="mb-5 text-5xl font-bold">Rallies</h1>
                    </div>
                </div>
            </div>

            <a href='https://webapp.sportity.com/event/dasu/6876236b-b289-4b6b-82a2-6e4108fbe9dd' target='_blank' className='container mx-auto w-fit flex justify-center mt-10'>
                <img src="/assets/images/sportity.PNG" alt="" />
            </a>

            <div className='mb-32 mt-10'>
                <h2 className='text-center text-3xl font-semibold uppercase text-black mb-10 flex gap-3 justify-center bg-[#F7941D] py-4'>
                    Næste løb
                </h2>
                <div className='flex flex-col gap-4 text-[white]'>
                    <div className='flex justify-center text-[black]'>
                        <div className="card w-[600px] shadow-xl ">
                            <figure className='p-3'>
                                <img src="/assets/images/master_rallyplade_Udkast_RallyYding.svg" alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Yding Rally - DSR 1</h2>
                                <p>20. April 2024</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-[black] text-[white] hover:bg-[#F7941D] hover:text-[#313170]">
                                        <a href="https://hamk.dk/yding-rally-2024/" target='_blank'>
                                            Læs mere
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center align-middle gap-4'>
                        <div className="card w-96 bg-base-100 shadow-xl image-full">
                            <figure className='p-3'>
                                <img src="/assets/images/master_rallyplade_Udkast_RallyYding.svg" alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Rally Sønderjylland - DSR 2</h2>
                                <p>25. Maj 2024</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-[white] text-[black] hover:bg-[#F7941D] hover:text-[#313170]">
                                        <a href="https://www.facebook.com/vejenmotorklub" target='_blank'>
                                            Læs mere
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl image-full">
                            <figure className='p-3'>
                                <img src="/assets/images/master_rallyplade_Udkast_RallyYding.svg" alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">DM-Ugen 2024 - DSR 3</h2>
                                <p>22. Juni 2024</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-[white] text-[black] hover:bg-[#F7941D] hover:text-[#313170]">
                                        <a href="https://imk.dk/" target='_blank'>
                                            Læs mere
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center align-middle gap-4'>
                        <div className="card w-96 bg-base-100 shadow-xl image-full">
                            <figure className='p-3'>
                                <img src="/assets/images/master_rallyplade_Udkast_RallyYding.svg" alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Rally Juelsminde - DSR 4</h2>
                                <p>17. August 2024</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-[white] text-[black] hover:bg-[#F7941D] hover:text-[#313170]">
                                        <a href="https://www.facebook.com/RallyJuelsminde" target='_blank'>
                                            Læs mere
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl image-full">
                            <figure className='p-3'>
                                <img src="/assets/images/master_rallyplade_Udkast_RallyYding.svg" alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Rally Vestjylland - DSR 5</h2>
                                <p>7. September 2024</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-[white] text-[black] hover:bg-[#F7941D] hover:text-[#313170]">
                                        <a href="https://www.facebook.com/ROMK045" target='_blank'>
                                            Læs mere
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className="card w-96 bg-base-100 shadow-xl image-full">
                            <figure className='p-3'>
                                <img src="/assets/images/master_rallyplade_Udkast_RallyYding.svg" alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Rally Stoholm - DSR 6</h2>
                                <p>27-28. September 2024</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-[white] text-[black] hover:bg-[#F7941D] hover:text-[#313170]">
                                        <a href="https://rallystoholm.dk" target='_blank'>
                                            Læs mere
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </div>
    )
}

export default rallies