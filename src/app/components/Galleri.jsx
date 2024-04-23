import React from 'react'

const Galleri = () => {
    return (
        <>
            <div className='container mx-auto xl:w-2/3 px-3 mb-28'>
                <div className="carousel w-full rounded">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="/assets/images/galleri/als_1325.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="/assets/images/galleri/als_1326.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="/assets/images/galleri/dsc_9531.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="/assets/images/galleri/dsc_9842.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide5" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                        <img src="/assets/images/galleri/dsc_9843.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide6" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide6" className="carousel-item relative w-full">
                        <img src="/assets/images/galleri/mal_0546.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide5" className="btn btn-circle">❮</a>
                            <a href="#slide7" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide7" className="carousel-item relative w-full">
                        <img src="/assets/images/galleri/mal_0780.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide6" className="btn btn-circle">❮</a>
                            <a href="#slide8" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide8" className="carousel-item relative w-full">
                        <img src="/assets/images/galleri/mal_0784.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide7" className="btn btn-circle">❮</a>
                            <a href="#slide9" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide9" className="carousel-item relative w-full">
                        <img src="/assets/images/galleri/mal_1552.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide8" className="btn btn-circle">❮</a>
                            <a href="#slide10" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide10" className="carousel-item relative w-full">
                        <img src="/assets/images/galleri/mal_1560.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide9" className="btn btn-circle">❮</a>
                            <a href="#slide11" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide11" className="carousel-item relative w-full">
                        <img src="/assets/images/galleri/mal_1613.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide10" className="btn btn-circle">❮</a>
                            <a href="#slide12" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide12" className="carousel-item relative w-full">
                        <img src="/assets/images/galleri/mal_4076.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide11" className="btn btn-circle">❮</a>
                            <a href="#slide13" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide13" className="carousel-item relative w-full">
                        <img src="/assets/images/galleri/mal_9178.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide12" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Galleri