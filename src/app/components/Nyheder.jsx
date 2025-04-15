'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'

const Nyheder = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    
    // Featured news array with your existing news
    const featuredNews = [
        {
            id: '4jkz925x7rwz908',
            title: 'Dansk Super Rally får flere muskler',
            date: '05/09/2024',
            image: '/assets/images/Logo.png',
            category: 'DSR',
            excerpt: 'Læs mere om hvordan DSR udvider og styrker dette års rally-sæson med flere partnere og spændende løb.'
        },
        {
            id: '2kqsj613v8dzx46',
            title: 'FARTDUELLER I SØNDERJYLLAND',
            date: '22/05/2024',
            image: '/assets/images/rally-soenderjylland/kenneth-bil.jpg',
            category: 'DSR',
            excerpt: 'Sønderjylland danner ramme for intens konkurrence med store hastigheder og spændende dueller.'
        },
        {
            id: '3kfldj98754lfds',
            title: 'Er du Danmarks næste rallytalent?',
            date: '07/05/2024',
            image: '/assets/images/DASU-logo.png',
            category: 'DSR',
            excerpt: 'DASU leder efter nye talenter til at repræsentere Danmark i internationale rally-konkurrencer.'
        }
    ];

    // Auto-rotate featured news every 5 seconds unless user is hovering
    useEffect(() => {
        if (!isHovering) {
            const interval = setInterval(() => {
                setActiveIndex((current) => (current + 1) % featuredNews.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isHovering, featuredNews.length]);

    // Navigation functions
    const goToNext = () => {
        setActiveIndex((current) => (current + 1) % featuredNews.length);
    };

    const goToPrev = () => {
        setActiveIndex((current) => (current - 1 + featuredNews.length) % featuredNews.length);
    };

    return (
        <section className="bg-gradient-to-b from-gray-100 to-white py-16">
            <div className='container px-5 md:px-4 mx-auto'>
                {/* Header with animated underline */}
                <div className='flex flex-col md:flex-row justify-between items-center mb-12'>
                    <div className='flex items-center gap-4 mb-6 md:mb-0'>
                        <img src="/assets/images/Logo.jpg" alt="DSR logo" className='w-16 h-16 md:w-20 md:h-20' />
                        <h2 className='text-2xl md:text-3xl font-bold relative'>
                            NYHEDER
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform origin-left transition-transform duration-300 scale-x-50 group-hover:scale-x-100"></span>
                        </h2>
                    </div>
                    <a href="/nyheder" className="flex items-center group text-sm md:text-base font-medium">
                        <span className="mr-2 group-hover:mr-3 transition-all">Se alle nyheder</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                    </a>
                </div>

                {/* Featured News Slider */}
                <div 
                    className="relative overflow-hidden mb-16 rounded-xl shadow-xl"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <div className="absolute z-10 inset-0 flex items-center justify-between p-4">
                        <button 
                            onClick={goToPrev} 
                            className="p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all transform hover:scale-110"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button 
                            onClick={goToNext} 
                            className="p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all transform hover:scale-110"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div 
                        className="flex transition-transform duration-500 ease-in-out h-96 md:h-[500px]" 
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {featuredNews.map((news, index) => (
                            <div key={news.id} className="min-w-full relative group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                                <img 
                                    src={news.image} 
                                    alt={news.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                />
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="bg-secondary px-4 py-2 text-sm font-bold rounded-full text-white shadow-lg">{news.category}</span>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10 transition-transform duration-500">
                                    <div className="flex items-center gap-2 text-white text-sm mb-3">
                                        <Calendar size={16} className="text-secondary" />
                                        <p>{news.date}</p>
                                    </div>
                                    <h3 className="text-xl md:text-3xl font-bold text-white mb-3">{news.title}</h3>
                                    <p className="text-gray-200 mb-4 hidden md:block">{news.excerpt}</p>
                                    <a 
                                        href={`/nyheder/${news.id}`} 
                                        className="inline-block bg-secondary hover:bg-black text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg"
                                    >
                                        Læs mere
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination dots */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                        {featuredNews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${
                                    activeIndex === index ? 'bg-secondary w-8' : 'bg-white opacity-70'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Recent News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featuredNews.map((news) => (
                        <a 
                            key={news.id}
                            href={`/nyheder/${news.id}`} 
                            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                    src={news.image} 
                                    alt={news.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                />
                                <div className="absolute top-3 right-3">
                                    <span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">{news.category}</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                                    <Calendar size={14} />
                                    <p>{news.date}</p>
                                </div>
                                <h3 className="font-bold text-lg mb-2 group-hover:text-secondary transition-colors">{news.title}</h3>
                                <p className="text-gray-600 text-sm line-clamp-2">{news.excerpt}</p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Partners Section */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-700 mb-6 text-center">Vores Partnere</h3>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        <a 
                            href="https://www.fia.com/" 
                            target="_blank" 
                            className="w-32 md:w-40 opacity-70 hover:opacity-100 transition-opacity transform hover:scale-105"
                        >
                            <img src="/assets/images/fia-logo.png" alt="FIA logo" className="w-full" />
                        </a>
                        <a 
                            href="https://www.dasu.dk/sportsgrene/rally/" 
                            target="_blank" 
                            className="w-32 md:w-40 opacity-70 hover:opacity-100 transition-opacity transform hover:scale-105"
                        >
                            <img src="/assets/images/DASU-logo.png" alt="DASU logo" className="w-full" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nyheder