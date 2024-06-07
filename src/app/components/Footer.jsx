import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                    <a href="/">
                        <Image src={'/assets/images/Logo.png'} width={200} height={200} alt='Logo' />
                    </a>
                </aside>
                <nav>
                    <h6 className="footer-title">Nyttige links</h6>
                    <a href='https://www.dasu.dk/' target='_blank' className="link link-hover">DASU</a>
                    <a href='https://www.fia.com/' target='_blank' className="link link-hover">FIA</a>
                    <a href='https://motorsportdanmark.dk/' target='_blank' className="link link-hover">Motor Sport Danmark</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Følg os</h6>
                    <a href='https://www.facebook.com/profile.php?id=61552746026664' target='_blank' className="link link-hover"><FaFacebook size={28} /></a>
                </nav>
            </footer>
            <footer className="footer footer-center px-10 py-3 border-t bg-base-300 text-base-content border-secondary">
                <div className='text-center py-3 px-1 text-xs'>
                    <p>
                        © 2024 Dansk SuperRally | All Rights Reserved | Powered by OfficeBoost
                    </p>

                </div>
            </footer>
        </>
    )
}

export default Footer