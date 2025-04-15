'use client'
import React, { useState, useEffect } from 'react';

const Rallies = () => {
    // State to track active tab
    const [activeTab, setActiveTab] = useState('upcoming');
    
    // State for countdown timer
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    
    // Create a consistent card style
    const cardStyle = {
        figure: "h-48 overflow-hidden relative",
        highlight: "py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-center font-bold text-sm shadow-md",
        title: "text-xl font-bold text-white",
        body: "flex flex-col flex-grow p-4 md:p-6", 
        button: "btn btn-sm w-full bg-orange-500 hover:bg-orange-600 border-none text-white mt-auto"
    };
    
    // Modal video data
    const videoModals = [
        {
            id: "my_modal_7",
            title: "Recap regionerne v1",
            videoSrc: "https://player.vimeo.com/video/949062202?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            videoTitle: "RECAP_REGIONERNE_V1"
        },
        {
            id: "my_modal_8",
            title: "Rally Sønderjylland Recap",
            videoSrc: "https://player.vimeo.com/video/950872906?h=a36a1e4edf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Rally_Sønderjylland_Recap"
        }
    ];
    
    // Upcoming rally data for 2025
    const upcomingRallies = [
        {
            name: "Jubilæumsrally - DSR 1",
            location: "Falster",
            dates: "24-05-2025",
            club: "Nykøbing F. Motor Sport",
            image: "/assets/images/rally.jpg.png", // You'll need to replace with actual image
            highlight: "Sæsonåbner"
        },
        {
            name: "Rally Aalborg - DSR 2 (DM-ugen)",
            location: "Aalborg",
            dates: "28-06-2025",
            club: "Motorsport Nordjylland",
            image: "/assets/images/rallyaalborg.png", // You'll need to replace with actual image
            highlight: "DM-Ugen"
        },
        {
            name: "Rally Juelsminde - DSR 3",
            location: "Juelsminde",
            dates: "23-08-2025",
            club: "Motorsport Nordjylland",
            image: "/assets/images/juelsminde-rallyplade.png"
        },
        {
            name: "Rally Midtsjælland - DSR 4",
            location: "Midtsjælland",
            dates: "20-09-2025",
            club: "Automobil Sports Klubben",
            image: "/assets/images/rallymidtsjlland.png", // You'll need to replace with actual image
        },
        {
            name: "Rally Stoholm - DSR 5",
            location: "Midtjylland",
            dates: "11-10-2025",
            club: "Kjellerup og Omegns Motorklub",
            image: "/assets/images/stoholm-rallyplade.png",
            highlight: "Finale"
        }
    ];
    
    // Past rally data
    const pastRallies = [
        {
            name: "Yding Rally - DSR 1",
            dates: "2024",
            image: "/assets/images/master_rallyplade_Udkast_RallyYding.svg",
            videoModalId: "my_modal_7"
        },
        {
            name: "Rally Sønderjylland - DSR 2",
            dates: "2024",
            image: "/assets/images/Rallyplade-Sønderjylland.png",
            videoModalId: "my_modal_8"
        },
        {
            name: "DM-Ugen 2024 - DSR 3",
            dates: "2024",
            image: "/assets/images/Logo-DSR-3.png"
        },
        {
            name: "Rally Juelsminde - DSR 4",
            dates: "2024",
            image: "/assets/images/juelsminde-rallyplade.png"
        },
        {
            name: "Rally Vestjylland - DSR 5",
            dates: "2024",
            image: "/assets/images/Logo.png"
        },
        {
            name: "Rally Stoholm - DSR 6",
            dates: "27-28. September 2024",
            image: "/assets/images/stoholm-rallyplade.png",
            highlight: "Finale"
        }
    ];

    // Calculate time remaining until the next rally
    useEffect(() => {
        // Get the date of the next rally (Jubilæumsrally)
        const getNextRallyDate = () => {
            // Extract the first upcoming rally's date
            const nextRally = upcomingRallies[0];
            const dateParts = nextRally.dates.split('-');
            
            // Danish date format: DD-MM-YYYY
            const day = parseInt(dateParts[0], 10);
            const month = parseInt(dateParts[1], 10) - 1; // Months are 0-indexed in JS
            const year = parseInt(dateParts[2], 10);
            
            // Return date object set to 8:00 AM on the rally day
            return new Date(year, month, day, 8, 0, 0);
        };

        const calculateTimeLeft = () => {
            const rallyDate = getNextRallyDate();
            const now = new Date();
            const difference = rallyDate - now;
            
            // If the date has passed, don't show negative values
            if (difference <= 0) {
                return {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                };
            }
            
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        };
        
        // Initial calculation
        setTimeLeft(calculateTimeLeft());
        
        // Set up the interval
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        
        // Clean up the interval on component unmount
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
            {/* Video Modals */}
            {videoModals.map(modal => (
                <React.Fragment key={modal.id}>
                    <input type="checkbox" id={modal.id} className="modal-toggle" />
                    <div className="modal px-2" role="dialog">
                        <div className="modal-box h-96 w-full bg-gray-900 border border-orange-500">
                            <div className='h-full w-full text-center uppercase tracking-wide font-semibold flex flex-col'>
                                <h4 className='select-none mb-2 text-orange-400'>{modal.title}</h4>
                                <iframe
                                    src={modal.videoSrc}
                                    loading='lazy'
                                    allowFullScreen
                                    className='w-full h-full rounded'
                                    title={modal.videoTitle}>
                                </iframe>
                            </div>
                        </div>
                        <label className="modal-backdrop" htmlFor={modal.id} />
                    </div>
                </React.Fragment>
            ))}

            {/* Hero Section */}
            <div className="hero h-[70vh] bg-cover bg-fixed bg-center relative overflow-hidden" 
                 style={{ backgroundImage: 'url(/assets/images/galleri/DSC_9843.JPG)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
                
                {/* Race car silhouette animation */}
                <div className="absolute bottom-0 left-0 w-full h-20 z-20">
                    <div className="animate-slide">
                        <svg className="h-20 text-orange-500 opacity-70" viewBox="0 0 640 512" fill="currentColor">
                            <path d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32s14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/>
                        </svg>
                    </div>
                </div>
                
                <div className="hero-content text-center z-30">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold text-white drop-shadow-lg select-none animate-bounce-slow">
                            <span className="text-orange-500">DANSK</span> SUPER RALLY
                        </h1>
                        <p className="mb-5 text-xl text-white/90">Oplev fart, spænding og præcisionskørsel i det danske rallymesterskab 2025</p>
                    </div>
                </div>
            </div>

            {/* Sportity Banner */}
            <div className="container mx-auto -mt-16 px-4 z-40 relative">
                <a href='https://webapp.sportity.com/event/dasu/88314d43-4128-460c-bb64-a89418076c63' 
                   target='_blank' 
                   className='flex justify-center'>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-lg border-2 border-orange-500 hover:border-orange-400 transition-all duration-300 transform hover:scale-105">
                        <img className='rounded-lg w-full max-w-md' src="/assets/images/sportity.PNG" alt="Sportity App" />
                    </div>
                </a>
            </div>

            {/* Tab navigation */}
            <div className="container mx-auto mt-16 px-4">
                <div className="flex justify-center mb-6">
                    <div className="tabs tabs-boxed bg-gray-800 p-1 rounded-full overflow-hidden">
                        <a 
                            className={`tab tab-lg transition-all duration-300 px-4 sm:px-6 ${activeTab === 'upcoming' ? 'bg-orange-500 text-white rounded-full font-bold' : 'text-white/70 hover:text-white'}`}
                            onClick={() => setActiveTab('upcoming')}
                        >
                            <span className="hidden sm:inline pr-1">Kommende</span> Løb
                        </a>
                        <a 
                            className={`tab tab-lg transition-all duration-300 px-4 sm:px-6 ${activeTab === 'past' ? 'bg-orange-500 text-white rounded-full font-bold' : 'text-white/70 hover:text-white'}`}
                            onClick={() => setActiveTab('past')}
                        >
                            <span className="hidden sm:inline pr-1">Afsluttede</span> Løb
                        </a>
                    </div>
                </div>

                {/* Upcoming Rallies Section */}
                {activeTab === 'upcoming' && (
                    <div className="space-y-12 mb-24">
                        <h2 className='text-center text-3xl font-bold uppercase mb-8 bg-gradient-to-r from-orange-600 to-orange-400 text-transparent bg-clip-text select-none'>
                            Rally Kalender 2025
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
                            {upcomingRallies.map((rally, index) => (
                                <div key={index} className="card bg-gray-800 shadow-xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                                    {rally.highlight && (
                                        <div className={cardStyle.highlight}>
                                            {rally.highlight}
                                        </div>
                                    )}
                                    <figure className={cardStyle.figure}>
                                        <img 
                                            src={rally.image} 
                                            alt={rally.name} 
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                                    </figure>
                                    <div className={cardStyle.body}>
                                        <h2 className="card-title text-white font-bold select-none mb-2">{rally.name}</h2>
                                        <div className="space-y-2 text-sm my-3">
                                            <div className="inline-flex items-center bg-gray-700 rounded-full px-3 py-1 mr-1 mb-1">
                                                <svg className="w-4 h-4 mr-1 text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                                </svg>
                                                <span className="truncate">{rally.location}</span>
                                            </div>
                                            <div className="inline-flex items-center bg-gray-700 rounded-full px-3 py-1 mr-1 mb-1">
                                                <svg className="w-4 h-4 mr-1 text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                                                </svg>
                                                <span className="truncate">{rally.dates}</span>
                                            </div>
                                            <div className="inline-flex items-center bg-gray-700 rounded-full px-3 py-1 mr-1 mb-1">
                                                <svg className="w-4 h-4 mr-1 text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                                                </svg>
                                                <span className="truncate">{rally.club}</span>
                                            </div>
                                        </div>
                                        
                                       {/*  <button className={cardStyle.button}>
                                            Læs mere
                                        </button> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Past Rallies Section */}
                {activeTab === 'past' && (
                    <div className="space-y-12 mb-24">
                        <h2 className='text-center text-3xl font-bold uppercase mb-8 bg-gradient-to-r from-gray-400 to-gray-200 text-transparent bg-clip-text select-none'>
                            Afsluttede Rally Løb
                        </h2>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
                            {pastRallies.map((rally, index) => (
                                <div key={index} className="relative group bg-gray-800 rounded-lg overflow-hidden border border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 flex flex-col h-full">
                                    <div className="p-4 h-48 flex items-center justify-center">
                                        <img 
                                            src={rally.image} 
                                            alt={rally.name} 
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                                        <h3 className="text-lg font-bold text-white">{rally.name}</h3>
                                        <p className="text-orange-400">{rally.dates}</p>
                                        {rally.highlight && (
                                            <span className="inline-block bg-gradient-to-r from-orange-600 to-orange-500 text-white text-xs px-2 py-1 rounded mt-1">
                                                {rally.highlight}
                                            </span>
                                        )}
                                        <div className="mt-auto pt-3">
                                            {rally.videoModalId && (
                                                <label 
                                                    htmlFor={rally.videoModalId} 
                                                    className="btn btn-sm w-full bg-orange-500 hover:bg-orange-600 border-none text-white"
                                                >
                                                    Se video
                                                </label>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Next race countdown - UPDATED with dynamic timer */}
            <div className="bg-gray-900 py-16 border-t border-gray-800">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-white mb-6">Næste løb: Jubilæumsrally - DSR 1</h2>
                        <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
                            <div className="bg-gray-800 rounded-lg px-4 py-3 border-b-4 border-orange-500 min-w-[80px]">
                                <span className="block text-3xl font-bold text-orange-500">{timeLeft.days}</span>
                                <span className="text-sm text-gray-300">Dage</span>
                            </div>
                            <div className="bg-gray-800 rounded-lg px-4 py-3 border-b-4 border-orange-500 min-w-[80px]">
                                <span className="block text-3xl font-bold text-orange-500">{timeLeft.hours}</span>
                                <span className="text-sm text-gray-300">Timer</span>
                            </div>
                            <div className="bg-gray-800 rounded-lg px-4 py-3 border-b-4 border-orange-500 min-w-[80px]">
                                <span className="block text-3xl font-bold text-orange-500">{timeLeft.minutes}</span>
                                <span className="text-sm text-gray-300">Min</span>
                            </div>
                            <div className="bg-gray-800 rounded-lg px-4 py-3 border-b-4 border-orange-500 min-w-[80px]">
                                <span className="block text-3xl font-bold text-orange-500">{timeLeft.seconds}</span>
                                <span className="text-sm text-gray-300">Sek</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Add some custom CSS for animations */}
            <style jsx>{`
                @keyframes slide {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(100vw); }
                }
                
                .animate-slide {
                    animation: slide 15s linear infinite;
                }
                
                .animate-bounce-slow {
                    animation: bounce 3s infinite;
                }
                
                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
            `}</style>
        </div>
    );
};

export default Rallies;