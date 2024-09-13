import React from 'react'

const rallies = () => {
    return (
        <div>
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal px-2" role="dialog">
                <div className="modal-box h-96 w-full">
                    <div className='h-full w-full text-center uppercase tracking-wide font-semibold flex flex-col'>
                        <h4 className='select-none'>Recap regionerne v1</h4>
                        <iframe
                            src="https://player.vimeo.com/video/949062202?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            loading='lazy'
                            allowFullScreen
                            className='w-full h-full rounded'
                            title="RECAP_REGIONERNE_V1">
                        </iframe>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7" />
            </div>
            <input type="checkbox" id="my_modal_8" className="modal-toggle" />
            <div className="modal px-2" role="dialog">
                <div className="modal-box h-96 w-full">
                    <div className='h-full w-full text-center uppercase tracking-wide font-semibold flex flex-col'>
                        <h4 className='select-none'>Rally Sønderjylland Recap</h4>
                        <iframe
                            src="https://player.vimeo.com/video/950872906?h=a36a1e4edf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            loading='lazy'
                            allowFullScreen
                            className='w-full h-full rounded'
                            title="Rally_Sønderjylland_Recap">
                        </iframe>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_8" />
            </div>
            <div className="hero min-h-[600px] bg-cover" style={{ backgroundImage: 'url(/assets/images/galleri/DSC_9843.JPG)' }}>

                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-[whitesmoke]">
                        <h1 className="mb-5 text-5xl font-bold select-none">Rallies</h1>
                    </div>
                </div>
            </div>

            <a href='https://webapp.sportity.com/event/dasu/88314d43-4128-460c-bb64-a89418076c63' target='_blank' className='container mx-6 w-fit flex justify-center mt-10 md:mx-auto'>
                <img className='rounded-lg w-[100%] md:w-[475px]' src="/assets/images/sportity.PNG" alt="" />
            </a>

            <div className='mb-32 mt-10'>
                <h2 className='text-center text-2xl 2xl:text-3xl font-semibold uppercase text-base-100 mb-10 flex gap-3 justify-center bg-primary py-4 select-none'>
                    Aktive løb
                </h2>




                <div className='flex flex-col gap-4 text-[white]'>

                <div className='px-4 md:px-0'>
                    <div className="card w-auto shadow-xl mx-auto md:w-[600px]">
                        <figure className='p-3'>
                            <img src="/assets/images/stoholm-rallyplade.png" alt="Rally stoholm rallyplade"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title select-none text-black">Rally Stoholm - DSR 6</h2>
                            <p className='select-none text-black'>27-28. September 2024</p>
                            <p className='uppercase font-semibold tracking-wider text-black'>Finale</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-[#333] text-[white] hover:bg-[#F7941D] hover:text-[#313170]">
                                    <a href="https://rallystoholm.dk" target='_blank'>
                                        Læs mere
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                        </div>
                    <div className='my-10 md:mt-20'>
                        <h3 className='text-center text-2xl 2xl:text-3xl font-semibold uppercase text-base-100 mb-10 justify-center bg-secondary py-4 select-none'>Afsluttet løb</h3>
                    </div>
                    <div className='flex flex-col justify-center gap-4 md:flex-row mx-auto'>


                        <div className="card w-80 bg-base-100 shadow-xl image-full h-48 md:w-96">
                            <figure className='p-3'>
                                <img src="/assets/images/master_rallyplade_Udkast_RallyYding.svg" alt="Rally Yding rallyplade" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title select-none">Yding Rally - DSR 1</h2>
                                <p className='uppercase select-none'>Afsluttet</p>
                                <div className="card-actions justify-end">
                                    <label htmlFor="my_modal_7" className="btn text-[black] hover:bg-[#F7941D] hover:text-[#313170]">Se video</label>
                                </div>
                            </div>
                        </div>

                        <div className="card w-80 bg-base-100 shadow-xl image-full h-48 md:w-96">
                            <figure>
                                <img src="/assets/images/Rallyplade-Sønderjylland.png" alt="Rally Sønderjylland rallyplade" className='w-fit h-auto' />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title select-none">Rally Sønderjylland - DSR 2</h2>
                                <p className='uppercase select-none'>Afsluttet</p>
                                <div className="card-actions justify-end">
                                    <label htmlFor="my_modal_8" className="btn text-[black] hover:bg-[#F7941D] hover:text-[#313170]">Se video</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center gap-4 md:flex-row mx-auto mt-4 md:mt-0'>

                        <div className="card w-80 bg-base-100 shadow-xl image-full h-48 md:w-96">
                            <figure className='p-3'>
                                <img src="/assets/images/Logo-DSR-3.png" alt="DM-Ugen rallyplade" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title select-none">DM-Ugen 2024 - DSR 3</h2>
                                <p className='select-none'>AFSLUTTET</p>
                                <div className="card-actions justify-end">
                                    {/* <button className="btn bg-[black] text-[white] hover:bg-[#F7941D] hover:text-[#313170]">
                                        <a href="https://imk.dk/" target='_blank' className='select-none'>
                                            Læs mere
                                        </a>
                                    </button> */}
                                </div>
                            </div>
                        </div>

                        <div className="card w-80 bg-base-100 shadow-xl image-full h-48 md:w-96">
                            <figure className='p-3'>
                                <img src="/assets/images/juelsminde-rallyplade.png" alt="Rally Juelsminde rallyplade" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title select-none">Rally Juelsminde - DSR 4</h2>
                                <p className='select-none'>AFSLUTTET</p>
                                <div className="card-actions justify-end">
                                    {/* <button className="btn bg-[black] text-[white] hover:bg-[#F7941D] hover:text-[#313170]">
                                        <a href="https://imk.dk/" target='_blank' className='select-none'>
                                            Læs mere
                                        </a>
                                    </button> */}
                                </div>
                            </div>
                        </div>

                        <div className="card w-80 bg-base-100 shadow-xl image-full h-48 md:w-96">
                            <figure className='p-3'>
                                <img src="/assets/images/Logo.png" alt="Rally Vestjylland rallyplade" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title select-none">Rally Vestjylland - DSR 5</h2>
                                <p className='select-none'>AFSLUTTET</p>
                                <div className="card-actions justify-end">
                                    {/* <button className="btn bg-[black] text-[white] hover:bg-[#F7941D] hover:text-[#313170]">
                                        <a href="https://imk.dk/" target='_blank' className='select-none'>
                                            Læs mere
                                        </a>
                                    </button> */}
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