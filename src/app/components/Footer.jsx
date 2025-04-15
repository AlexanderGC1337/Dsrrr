import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    // Get the current year dynamically
    const currentYear = new Date().getFullYear();
    
    return (
        <div className="footer-wrapper">
            <footer className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white">
                {/* Top wave decoration */}
                <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-24 w-full rotate-180">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                            className="fill-white/10"></path>
                    </svg>
                </div>
                
                <div className="container mx-auto px-6 pt-16 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Logo section */}
                        <div className="flex flex-col items-center md:items-start">
                            <a href="/" className="mb-6 transform transition-transform hover:scale-105">
                                <Image src={'/assets/images/Logo.png'} width={180} height={180} alt='Logo' className="drop-shadow-lg" />
                            </a>
                            <p className="text-gray-300 text-sm mt-2 max-w-xs text-center md:text-left">
                                Passioneret omkring rallykørsel og formidling af SuperRally-oplevelser til danske motorsportsfans.
                            </p>
                        </div>
                        
                        {/* Links section */}
                        <div className="flex flex-col items-center md:items-start">
                            <h2 className="text-xl font-bold mb-6 relative inline-block">
                                <span className="relative z-10">Nyttige links</span>
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 rounded z-0"></span>
                            </h2>
                            <div className="flex flex-col space-y-3">
                                <a href='https://www.dasu.dk/' target='_blank' className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center">
                                    <span className="mr-2">→</span>DASU
                                </a>
                                <a href='https://www.fia.com/' target='_blank' className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center">
                                    <span className="mr-2">→</span>FIA
                                </a>
                                <a href='https://motorsportdanmark.dk/' target='_blank' className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center">
                                    <span className="mr-2">→</span>Motor Sport Danmark
                                </a>
                            </div>
                        </div>
                        
                        {/* Social & Contact section */}
                        <div className="flex flex-col items-center md:items-start">
                            <h2 className="text-xl font-bold mb-6 relative inline-block">
                                <span className="relative z-10">Følg os</span>
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 rounded z-0"></span>
                            </h2>
                            <div className="flex space-x-4 mb-6">
                                <a href='https://www.facebook.com/profile.php?id=61552746026664' target='_blank' 
                                   className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors transform hover:scale-110">
                                    <FaFacebook size={24} />
                                </a>
                                {/* Placeholders for future social media */}
                            </div>
                            <p className="text-gray-300 text-sm">Kontakt os på <span className="text-white">info@dansksuperrally.dk</span></p>
                        </div>
                    </div>
                </div>
                
                {/* Copyright footer */}
                <div className="border-t border-gray-800 mt-8">
                    <div className="container mx-auto px-6 py-4">
                        <p className="text-center text-gray-400 text-xs">
                            © {currentYear} Dansk SuperRally | Alle rettigheder forbeholdes | Drevet af OfficeBoost
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer