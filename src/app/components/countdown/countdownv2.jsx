import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const RaceCountdown = () => {
    const [nextRace, setNextRace] = useState(null);
    const [timeLeft, setTimeLeft] = useState({});
    const [isLive, setIsLive] = useState(false);

    const races = [
        {
            name: 'Rally Falster',
            startDate: '2025-05-24',
            endDate: '2025-05-24',
            imageUrl: '/api/placeholder/400/200',
            url: "https://www.nfms.dk/sydhavsrally/rally.htm"
        },
        {
            name: 'Rally Aalborg',
            startDate: '2025-06-28',
            endDate: '2025-06-28',
            imageUrl: '/api/placeholder/400/200',
            url: "https://mnj.dk/events/rally-aalborg-dm-ugen-2025"
        },
        {
            name: 'Rally Juelsminde',
            startDate: '2025-08-23',
            endDate: '2025-08-23',
            imageUrl: '/api/placeholder/400/200',
            url: "https://www.nfms.dk/sydhavsrally/rally.htm"
        },
        {
            name: 'Rally Midtsjælland',
            startDate: '2025-09-20',
            endDate: '2025-09-20',
            imageUrl: '/api/placeholder/400/200',
            url: "https://www.nfms.dk/sydhavsrally/rally.htm"
        },
        {
            name: 'Rally Stoholm',
            startDate: '2025-10-10',
            endDate: '2025-10-11',
            imageUrl: '/api/placeholder/400/200',
            url: "https://www.nfms.dk/sydhavsrally/rally.htm"
        }
    ];

    useEffect(() => {
        const findNextRace = () => {
            const now = new Date();
            const upcoming = races.find(race => {
                const startDate = new Date(race.startDate);
                const endDate = new Date(race.endDate);
                endDate.setHours(23, 59, 59, 999); // Set end date to end of day
                return startDate <= now && now <= endDate || startDate > now;
            });
            setNextRace(upcoming || null);
        };

        findNextRace();
        const interval = setInterval(findNextRace, 1000 * 60 * 60);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const calculateTimeLeft = () => {
            if (!nextRace) return;

            const now = new Date();
            const startDate = new Date(nextRace.startDate);
            const endDate = new Date(nextRace.endDate);
            endDate.setHours(23, 59, 59, 999); // Set end date to end of day

            // Check if event is currently live
            if (now >= startDate && now <= endDate) {
                setIsLive(true);
                setTimeLeft({});
                return;
            }

            setIsLive(false);
            const difference = startDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                setTimeLeft({});
            }
        };

        if (nextRace) {
            calculateTimeLeft();
            const timer = setInterval(calculateTimeLeft, 1000);
            return () => clearInterval(timer);
        }
    }, [nextRace]);

    if (!nextRace) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <p>No upcoming races scheduled</p>
            </div>
        );
    }

    const formatDate = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        // Danish days of the week
        const days = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
        // Danish months
        const months = ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'];

        if (startDate === endDate) {
            return `${days[start.getDay()]} ${start.getDate()}. ${months[start.getMonth()]} ${start.getFullYear()}`;
        }

        return `${days[start.getDay()]}-${days[end.getDay()]} ${start.getDate()}-${end.getDate()}. ${months[start.getMonth()]} ${start.getFullYear()}`;
    };

    return (
        <div className="flex flex-col items-center justify-center text-white p-4">
    {/* Background with overlay */}
    {/*  <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
    </div> */}

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center w-full px-4">
        {/* Title */}
        <h1 className="text-xl font-bold mb-4 text-center">
            {nextRace.name.toUpperCase()}
        </h1>

        {/* Race Logo */}
        {/* <div className="bg-white rounded-lg p-4 mb-8 w-full">
            <img 
                src={nextRace.imageUrl} 
                alt={nextRace.name}
                className="w-full h-auto"
            />
        </div> */}

        <div className="flex gap-2 items-center mb-4 justify-center">
            {/* Calendar Icon */}
            <Calendar className="w-6 h-6" />

            {/* Date */}
            <p className="text-base">
                {formatDate(nextRace.startDate, nextRace.endDate)}
            </p>
        </div>

        {isLive ? (
            // Live Event Display
            <>
                <div className="w-full max-w-lg mb-6 relative">
                    <div className="relative overflow-hidden bg-black px-4 py-4 rounded-lg border-2 border-yellow-400">
                        {/* Racing flag patterns */}
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute inset-0 grid grid-cols-8 gap-1">
                                {[...Array(64)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`aspect-square ${i % 2 === 0 ? 'bg-white' : 'bg-black'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Live text with racing-style design */}
                        <div className="relative">
                            <p className="text-2xl font-bold text-white tracking-wider text-center select-none"
                                style={{
                                    textShadow: '0 0 10px rgba(255, 204, 0, 0.5)',
                                }}>
                                EVENT LIVE
                            </p>
                            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse" />
                        </div>
                    </div>

                    {/* Speed lines animation */}
                    <div className="absolute inset-0 overflow-hidden -z-10">
                        <div className="absolute inset-0 top-1/2 -translate-y-1/2">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute h-px bg-yellow-400"
                                    style={{
                                        left: `${i * 20}%`,
                                        right: '-100%',
                                        animation: 'speedline 2s infinite',
                                        animationDelay: `${i * 0.2}s`
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes wave {
                        0%, 100% { transform: rotate(-10deg); }
                        50% { transform: rotate(10deg); }
                    }
                    
                    @keyframes speedline {
                        0% { transform: translateX(100%) scaleX(0.5); opacity: 0; }
                        50% { transform: translateX(0) scaleX(1); opacity: 0.5; }
                        100% { transform: translateX(-100%) scaleX(0.5); opacity: 0; }
                    }
                `}</style>
            </>
        ) : (
            // Countdown Display
            <div className="grid grid-cols-2 gap-4 text-center mb-6 w-full">
                <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-xl font-bold">{timeLeft.days || 0}</p>
                    <p className="text-xs">Dage</p>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-xl font-bold">{timeLeft.hours || 0}</p>
                    <p className="text-xs">Timer</p>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-xl font-bold">{timeLeft.minutes || 0}</p>
                    <p className="text-xs">Minutter</p>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-xl font-bold">{timeLeft.seconds || 0}</p>
                    <p className="text-xs">Sekunder</p>
                </div>
            </div>
        )}

        {/* Read More Button */}
        <button className="w-full bg-gray-200 text-gray-800 px-6 py-2 rounded text-sm font-medium hover:bg-gray-300 transition-colors">
            {/* Ret i races' index for at få nyt link */}
            <a target='_blank' href={races[0].url}>LÆS MERE</a>
        </button>
    </div>
</div>
    );
};

export default RaceCountdown;