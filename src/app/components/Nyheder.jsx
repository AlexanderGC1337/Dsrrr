import React from 'react'
import Carousel from './Carousel'

const Nyheder = () => {
    return (
        <div className='mx-auto container my-10'>
            <h2 className='text-black uppercase font-bold text-4xl my-3'>Nyheder</h2>
            <div className='flex gap-4'>
                <div className="carousel-item h-[500px] w-9/12 relative">
                    <div className='absolute top-0 py-2 px-8 uppercase text-base whitespace-nowrap filter bg-black text-white bg-opacity-50'>
                        <p>1 jan</p>
                    </div>
                    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className='w-full h-full object-cover' />
                    <div className='absolute bottom-0 py-5 filter bg-black w-full text-white bg-opacity-50'>
                        <p className='ps-3 uppercase text-base whitespace-nowrap'>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <Carousel />
            </div>
            <div className='flex justify-center my-10'>
                <button className='bg-[#313170] px-6 py-3 text-white uppercase text-lg font-medium hover:bg-orange-400 hover:text-[#313170] hover:font-semibold'>Se mere</button>
            </div>
        </div>
    )
}

export default Nyheder
