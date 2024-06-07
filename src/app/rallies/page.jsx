import React from 'react'

const rallies = () => {
    return (
        <div>
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal px-2" role="dialog">
                <div className="modal-box h-96 w-full">
                    <div className='h-full w-full text-center uppercase tracking-wide font-semibold flex flex-col'>
                        <h4>Recap regionerne v1</h4>
                        <iframe
                            src="https://player.vimeo.com/video/949062202?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            loading='lazy'
                            allowFullScreen
                            className='w-full h-full'
                            title="RECAP_REGIONERNE_V1">
                        </iframe>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7" />
            </div>
            <div className="hero min-h-[600px] bg-cover" style={{ backgroundImage: 'url(/assets/images/galleri/DSC_9843.JPG)' }}>

                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-[whitesmoke]">
                        <h1 className="mb-5 text-5xl font-bold">Rallies</h1>
                    </div>
                </div>
            </div>

            <a href='https://webapp.sportity.com/event/dasu/1b63eaaa-e44c-4cea-b69f-7904af112393' target='_blank' className='mx-5 w-fit flex justify-center mt-10 md:mx-auto'>
                <img className='rounded-lg w-[600px] drop-shadow-lg hover:drop-shadow-xl' src="/assets/images/sportity.PNG" alt="" />
            </a>

            <div className='mb-32 mt-10'>
                <h2 className='text-center text-2xl 2xl:text-3xl font-semibold uppercase text-base-100 mb-10 flex gap-3 justify-center bg-primary py-4 select-none'>
                    DSR Løb 2024
                </h2>

                <div className='container flex flex-row items-center gap-2 px-52 my-28 md:my-5 px-24 md:mx-auto md:my-10 justify-center'>
                    <p className='text-4xl pl-4 text-center select-none md:pl-0 underline md:no-underline'>Aktiv</p>
                     <hr className='w-0 h-1 bg-black md:w-full' />
                </div>
                <div className='flex flex-col gap-4 text-[white] px-2 '>
                    <div className='flex justify-center text-[black] '>
                        <div className="card w-[600px] shadow-xl ">
                            <figure className='p-3'>
                                <img src="/assets/images/Logo-DSR-3.png" alt="DM-Ugen rallyplade" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title select-none">DM-Ugen 2024 - DSR 3</h2>
                                <p className='select-none'>22. Juni 2024</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-[black] text-[white] hover:bg-[#F7941D] hover:text-[#313170]">
                                        <a href="https://imk.dk/" target='_blank'>
                                            Læs mere
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center align-middle gap-14 my-5 lg:flex-row md:gap-10'>

                        <div className="card w-96 bg-base-100 shadow-xl image-full h-48">
                            <figure className='p-3 bg-black'>
                                <img src="/assets/images/juelsminde-rallyplade.png" alt="Rally Juelsminde rallyplade" />
                            </figure>
                            <div className="card-body">
                                <p>⠀</p>
                                <h2 className="card-title select-none">Rally Juelsminde - DSR 4</h2>
                                <p className='select-none'>17. August 2024</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-[white] text-[black] hover:bg-[#F7941D] hover:text-[#313170]">
                                        <a href="https://www.facebook.com/RallyJuelsminde" target='_blank'>
                                            Læs mere
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl image-full h-48">
                            <figure className='p-3'>
                                <img src="/assets/images/Logo.png" alt="Rally Vestjylland rallyplade" />
                            </figure>
                            <div className="card-body">
                                <p>⠀</p>
                                <h2 className="card-title select-none">Rally Vestjylland - DSR 5</h2>
                                <p className='select-none'>7. September 2024</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-[white] text-[black] hover:bg-[#F7941D] hover:text-[#313170]">
                                        <a href="https://www.facebook.com/ROMK045" target='_blank'>
                                            Læs mere
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>

                    <div className='flex flex-col lg:flex-row items-center justify-center align-middle gap-4'>
                        <div className="card w-96 bg-base-100 shadow-xl image-full h-48">
                            <figure className=''>
                                <img src="/assets/images/stoholm-rallyplade.png" alt="Rally stoholm rallyplade" />
                            </figure>
                            <div className="card-body">
                                <p className='font-bold'>Finale</p>
                                <h2 className="card-title select-none">Rally Stoholm - DSR 6</h2>
                                <p className='select-none'>27-28. September 2024</p>
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
                    <div className='container flex flex-row items-center gap-2 px-52 my-28 md:my-14 md:px-7 justify-center'>
                     <hr className='w-0 h-1 bg-black md:w-full' />
                    <p className='text-4xl pr-4 text-center select-none md:pl-0 text-black underline md:no-underline'>Afsluttet</p>
                </div>
                
                    <div className='flex flex-col mx-auto justify-center gap-14 md:gap-4 md:flex-row'>
                    <div className="card w-96 bg-base-100 shadow-xl image-full h-48">
                            <figure className='p-3'>
                                <img src="/assets/images/master_rallyplade_Udkast_RallyYding.svg" alt="Rally Yding rallyplade" />
                            </figure>
                            <div className="card-body">
                            <p>⠀</p>
                                <h2 className="card-title select-none">Yding Rally - DSR 1</h2>
                                <p className='uppercase select-none'>Afsluttet</p>
                                <div className="card-actions justify-end">
                                    <label htmlFor="my_modal_7" className="btn text-[black] hover:bg-[#F7941D] hover:text-[#313170]">Se video</label>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl image-full h-48">
                            <figure>
                                <img src="/assets/images/Rallyplade-Sønderjylland.png" alt="Rally Sønderjylland rallyplade" className='w-fit h-auto' />
                            </figure>
                            <div className="card-body">
                            <p>⠀</p>
                                <h2 className="card-title select-none">Rally Sønderjylland - DSR 2</h2>
                                <p className='uppercase select-none'>Afsluttet</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-[white] text-[black] hover:bg-[#F7941D] hover:text-[#313170]">
                                        <a href="https://www.facebook.com/vejenmotorklub" target='_blank'>
                                            Læs mere
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default rallies