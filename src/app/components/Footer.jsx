import React from 'react'
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='flex justify-between items-center px-5 bg-black text-white py-10'>
            <div className='flex gap-10 items-center ps-5'>
                <img src="/assets/images/Logo.jpg" alt="" className='w-64 rounded-xl'/>
                <div className='uppercase'>
                    <h3 className='mb-2 font-semibold'>Mere</h3>
                    <p className='font-extralight'>Lorem ipsum</p>
                    <p className='font-extralight'>Lorem ipsum</p>
                    <p className='font-extralight'>Lorem ipsum</p>
                </div>
                <div className='uppercase'>
                    <h3 className='mb-2 font-semibold'>Nyttige links</h3>
                    <p className='font-extralight'>Lorem ipsum</p>
                    <p className='font-extralight'>Lorem ipsum</p>
                    <p className='font-extralight'>Lorem ipsum</p>
                </div>
            </div>
            <div className='flex gap-24 mx-auto'>
                <div>
                    <h3 className='uppercase mb-3 font-semibold'>Følg os</h3>
                    <div className='flex gap-3 mb-2'>
                        <FaFacebook size={28}/> <FaYoutube size={28}/>
                    </div>
                    <div className='flex gap-3'>
                        <FaXTwitter size={28}/> <FaInstagram size={28}/>
                    </div>
                </div>
                <div>
                    <h3 className='uppercase mb-3 font-semibold'>Sponsors</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer