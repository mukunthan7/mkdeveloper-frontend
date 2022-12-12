import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <div className='sm:overflow-y-hidden'>
            <div className='bg-black text-white text-center py-4 space-y-2 md:flex md:justify-around overflow-x-hidden'>
                <motion.div className='flex justify-center'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <SocialIcon bgColor='#000' fgColor='#fff' className='hover:border-2 hover:border-[#c2d167] rounded-md' url="https://www.linkedin.com/in/mukunthan7/" target="_blank" />
                    <SocialIcon bgColor='#000' fgColor='#fff' className='hover:border-2 hover:border-[#c2d167] rounded-md' url="https://twitter.com/MUKUNTHANM13" target="_blank" />
                    <SocialIcon bgColor='#000' fgColor='#fff' className='hover:border-2 hover:border-[#c2d167] rounded-md' url="https://github.com/mukunthan7" target="_blank" />
                    <SocialIcon bgColor='#000' fgColor='#fff' className='hover:border-2 hover:border-[#c2d167] rounded-md' url="https://www.instagram.com/lonely__soul_official/" target="_blank" />
                    <SocialIcon bgColor='#000' fgColor='#fff' className='hover:border-2 hover:border-[#c2d167] rounded-md' url="https://www.facebook.com/mukunthanvisvakarma/" target="_blank" />
                </motion.div>
                <motion.p className='text-sm'
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >© {new Date().getFullYear()} All Rights Reserved</motion.p>
            </div>
        </div>
    )
}

export default Footer