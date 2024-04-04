import React from 'react';


const Carousel = () => {

    return (
        <div className="h-[500px] carousel carousel-vertical">
            <div id='slide1' className="carousel-item h-1/2 relative">
                <div className='absolute top-0 py-1 filter bg-black text-white bg-opacity-50'>
                    <p className='px-4 uppercase text-xs whitespace-nowrap'>1 jan</p>
                </div>
                <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
                <div className='absolute bottom-0 py-3 filter bg-black w-full text-white bg-opacity-50'>
                    <p className=' uppercase text-xs whitespace-nowrap'>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
            </div>
            <div id='slide2' className="carousel-item h-1/2 relative">
                <div className='absolute top-0 py-1 filter bg-black text-white bg-opacity-50'>
                    <p className='px-4 uppercase text-xs whitespace-nowrap'>1 jan</p>
                </div>
                <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
                <div className='absolute bottom-0 py-3 filter bg-black w-full text-white bg-opacity-50'>
                    <p className=' uppercase text-xs whitespace-nowrap'>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
            </div>
            <div id='slide3' className="carousel-item h-full relative">
                <div className='absolute top-0 py-1 filter bg-black text-white bg-opacity-50'>
                    <p className='px-4 uppercase text-xs whitespace-nowrap'>1 jan</p>
                </div>
                <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
                <div className='absolute bottom-0 py-3 filter bg-black w-full text-white bg-opacity-50'>
                    <p className=' uppercase text-xs whitespace-nowrap'>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
            </div>
            <div id='slide4' className="carousel-item h-full relative">
                <div className='absolute top-0 py-1 filter bg-black text-white bg-opacity-50'>
                    <p className='px-4 uppercase text-xs whitespace-nowrap'>1 jan</p>
                </div>
                <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" />
                <div className='absolute bottom-0 py-3 filter bg-black w-full text-white bg-opacity-50'>
                    <p className=' uppercase text-xs whitespace-nowrap'>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
            </div>
            <div id='slide5' className="carousel-item h-full relative">
                <div className='absolute top-0 py-1 filter bg-black text-white bg-opacity-50'>
                    <p className='px-4 uppercase text-xs whitespace-nowrap'>1 jan</p>
                </div>
                <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
                <div className='absolute bottom-0 py-3 filter bg-black w-full text-white bg-opacity-50'>
                    <p className=' uppercase text-xs whitespace-nowrap'>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
            </div>
            <div id='slide6' className="carousel-item h-full relative">
                <div className='absolute top-0 py-1 filter bg-black text-white bg-opacity-50'>
                    <p className='px-4 uppercase text-xs whitespace-nowrap'>1 jan</p>
                </div>
                <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" />
                <div className='absolute bottom-0 py-3 filter bg-black w-full text-white bg-opacity-50'>
                    <p className=' uppercase text-xs whitespace-nowrap'>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
            </div>
            <div id='slide7' className="carousel-item h-full relative">
                <div className='absolute top-0 py-1 filter bg-black text-white bg-opacity-50'>
                    <p className='px-4 uppercase text-xs whitespace-nowrap'>1 jan</p>
                </div>
                <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
                <div className='absolute bottom-0 py-3 filter bg-black w-full text-white bg-opacity-50'>
                    <p className=' uppercase text-xs whitespace-nowrap'>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
            </div>
        </div>
    )
}

export default Carousel
