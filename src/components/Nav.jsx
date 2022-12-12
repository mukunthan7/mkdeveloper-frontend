import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from './assets/Logo.svg'
import { logout } from "../data/auth";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuthenticated);

    function toggle() {
        setIsNavOpen(!isNavOpen)
    }

    function _logout() {
        Cookies.remove("token");
        dispatch(logout());
        navigate('/login');
        setIsNavOpen(false);
    }

    return (
        <div className='sticky top-0 z-10' >
            <div className='px-2 py-3 md:py-3 bg-black overflow-hidden'>
                <div className="flex justify-between max-w-md mx-auto md:max-w-3xl lg:max-w-4xl text-white items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link to="/">
                            <img src={Logo} alt="logo" className='h-12 w-48' width={50} />
                        </Link>
                    </motion.div>
                    <div>
                        <button className='md:hidden' onClick={toggle}>
                            {isNavOpen ? (<motion.div
                                whileTap={{ scale: 0.9 }}
                            >
                                <HiX className='h-8 w-8 text-[#bcbf1a] focus:outline-none' />
                            </motion.div>) : (
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <HiMenu className='h-8 w-8 text-[#bcbf1a]' />
                                </motion.div>
                            )
                            }
                        </button>
                        <motion.ul className='hidden space-x-6 md:flex lg:flex uppercase text-sm text-white text-center items-center'
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {isAuth && (
                                <>
                                    <Link to="/" className='px-3 py-2 rounded-md hover:text-[#bcbf1a]'>Home</Link>
                                    <Link to="/about" className='px-3 py-2 rounded-md hover:text-[#bcbf1a]'>About</Link>
                                    <Link to="/skills" className='px-3 py-2 rounded-md hover:text-[#bcbf1a]'>Skills</Link>
                                    <Link to="/contact" className='px-3 py-2 rounded-md hover:text-[#bcbf1a]'>Contact</Link>
                                    <button
                                        className="border-2 px-3 py-2 rounded-md border-[#bcbf1a] hover:border-black/70 hover:bg-[#bcbf1a] hover:text-black"
                                    >
                                        <h1 onClick={_logout}>Logout </h1>
                                    </button>
                                </>
                            )}
                            {!isAuth && (
                                <>
                                    <Link to="/login" className='border-2 px-3 py-2 rounded-md border-[#bcbf1a] hover:border-black/70 hover:bg-[#bcbf1a] hover:text-black'>Login</Link>
                                    <Link to="/register" className='border-2 px-3 py-2 rounded-md border-[#bcbf1a] hover:border-black/70 hover:bg-[#bcbf1a] hover:text-black'>Register</Link>
                                </>
                            )}
                        </motion.ul>
                    </div>
                </div>

                {isNavOpen && (
                    <motion.ul className='pt-2'
                        initial={{ opacity: 0, rotateZ: 360, scale: 0 }}
                        animate={{ opacity: 1, rotateZ: 0, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className='md:hidden text-white items-center flex flex-col justify-center space-y-2 max-w-md mx-auto uppercase bg-black border border-[#bcbf1a]'>
                            {isAuth && (
                                <>
                                    <Link to="/" className='mt-1 hover:bg-[#fbff23] px-[10.5rem] py-3 hover:text-black border border-black' onClick={toggle} >Home</Link>
                                    <Link to="/about" className='hover:bg-[#fbff23] px-[10rem] py-3 hover:text-black border border-black' onClick={toggle}>About</Link>
                                    <Link to="/skills" className='hover:bg-[#fbff23] px-[10rem] py-3 hover:text-black border border-black' onClick={toggle}>Skills</Link>
                                    <Link to="/contact" className='hover:bg-[#fbff23] px-[9.4rem] py-3 hover:text-black border border-black' onClick={toggle}>Contact</Link>
                                    <button className='hover:bg-[#fbff23] px-[10.5rem] py-3 hover:text-black border border-black uppercase' onClick={_logout}>Logout</button>
                                </>
                            )}
                            {!isAuth && (
                                <>
                                    <Link to="/login" className='hover:bg-[#fbff23] px-[10rem] py-3 hover:text-black border border-black' onClick={toggle}>Login</Link>
                                    <Link to="/register" className='hover:bg-[#fbff23] px-[9.5rem] py-3 hover:text-black border border-black' onClick={toggle}>Register</Link>
                                </>
                            )}
                        </div>
                    </motion.ul>
                )}
            </div>
        </div>
    )
}

export default Nav