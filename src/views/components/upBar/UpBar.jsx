import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link } from 'react-router-dom';

const UpBar = () => {
    const [active, setActive] = useState('Home');
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', to: '/' },
        { name: 'Contact', to: '/contact' },
        { name: 'About', to: '/about' },
        { name: 'Sign Up', to: '/signup' },
    ];

    return (
        <div className='w-full flex-col'>
            {/* Top most bar */}
            <div className='h-[48px] w-full flex items-center px-[50px] lg:px-[150px] justify-end bg-black'>
                <div className='flex justify-end md:justify-between w-3/4'>
                    <div className='hidden md:flex flex-row gap-2'>
                        <span className='text-white text-sm'>
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        </span>
                        <span className='font-semibold text-white cursor-pointer'>Shop Now</span>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer text-white'>
                        <span className='text-sm'>English</span>
                        <KeyboardArrowDownIcon fontSize='small' />
                    </div>
                </div>
            </div>
            
            {/* Lower Bar */}
            <div className='px-10 lg:px-36 flex justify-between h-20 shadow-lg items-center'>
                <span className='text-xl md:text-2xl font-bold text-black'>Exclusive</span>
                
                <div className='hidden lg:flex gap-12'>
                    {navLinks.map((item) => (
                        <Link key={item.name} to={item.to}>
                            <span 
                                onClick={() => setActive(item.name)} 
                                className={`cursor-pointer capitalize text-black text-lg ${active === item.name ? 'font-bold text-blue-700' : ''}`}>
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </div>

                <div className='hidden lg:flex items-center gap-6'>
                    <div className='flex items-center border border-gray-300 rounded-full px-4 py-2 shadow-sm'>
                        <input 
                            type='text' 
                            placeholder='Search anything...' 
                            className='border-none outline-none text-sm text-black w-36' 
                        />
                        <SearchIcon className='text-gray-500' />
                    </div>
                    <FavoriteBorderIcon className='text-gray-500 cursor-pointer' />
                    <ShoppingCartOutlinedIcon className='text-gray-500 cursor-pointer' />
                </div>
                
                <div className='lg:hidden' onClick={() => setIsOpen(true)}>
                    <MenuOutlinedIcon fontSize='medium' className='text-black cursor-pointer' />
                </div>
            </div>
            
            {/* Mobile Navigation Pop-up */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ x: '100%' }} 
                        animate={{ x: 0 }} 
                        exit={{ x: '100%' }} 
                        transition={{ duration: 0.5 }} 
                        className='fixed top-0 right-0 h-full w-3/4 bg-white z-50 shadow-lg flex flex-col p-10'>
                        
                        <div onClick={() => setIsOpen(false)} className='absolute right-5 top-5 cursor-pointer'>
                            <CloseOutlinedIcon className='text-gray-600' />
                        </div>
                        
                        <div className='flex flex-col gap-5 mt-10'>
                            {navLinks.map((item) => (
                                <Link key={item.name} to={item.to}>
                                    <span 
                                        onClick={() => {
                                            setActive(item.name);
                                            setIsOpen(false);
                                        }}
                                        className={`cursor-pointer capitalize text-lg ${active === item.name ? 'font-bold text-blue-700' : 'text-black'}`}>
                                        {item.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                        
                        <div className='mt-auto flex justify-center items-center gap-3 cursor-pointer'>
                            <LoginOutlinedIcon fontSize='large' className='text-black' />
                            <span className='text-xl font-bold text-black'>Logout</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default UpBar;
