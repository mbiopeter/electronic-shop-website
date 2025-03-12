import React, { useState } from 'react';
import auth from '../../../assets/images/auth.png';

const Authentication = () => {
    const[page, setPage] = useState('signUp');
    return (
        <div className='w-full  flex items-center justify-center'>
            <div className='w-full flex flex-row my-20'>
                <div className='hidden w-[60%] bg-[#CBE4E8] lg:flex items-center justify-center'>
                    <img src={auth}  className='h-[500px] object-contain'/>
                </div>
                <div className='w-full lg:w-[40%] flex items-center justify-center'>
                    <div className='shadow-lg lg:shadow-none p-10 flex w-auto flex-col gap-7'>
                        <div className='flex flex-col'>
                            <span className='text-[30px] font-[500] text-[#0000000]'>
                                {page === 'Login' ? 'Log in to Exclusive' :'Create an account'}
                            </span>
                            <span className='text-[16px] font-[400] text-[#0000000]'>Enter your details below</span>
                        </div>
                        {page === 'signUp' &&
                            <input 
                                type="text" 
                                placeholder='Name' 
                                className='text-[16px] font-[400] text-[#0000000] border-0 border-b-[2px] border-b-[#ddd] outline-none ' />}
                        <input 
                            type="text" 
                            placeholder='Email Address' 
                            className='text-[16px] font-[400] text-[#0000000] border-0 border-b-[2px] border-b-[#ddd] outline-none ' />
                        <input 
                            type="text" 
                            placeholder='Password' 
                            className='text-[16px] font-[400] text-[#0000000] border-0 border-b-[2px] border-b-[#ddd] outline-none ' />
                        <div className={`flex w-full flex-row gap-5 items-center`}>
                            <button
                                className='bg-[#DB4444] text-[#FAFAFA] cursor-pointer w-full rounded-[4px] py-2 text-[16px] font-[500]'>
                                    { page === 'Login' ? 'Login' :'Sign Up'}
                            </button>
                            {page === 'Login' && (
                                <span className='text-[11px] whitespace-nowrap font-[400] text-[#DB4444]'>Forget Password?</span>
                            )}
                        </div>
                        <div className='flex flex-row items-center gap-2 w-full justify-center'>
                            <span className='text-[16px] whitespace-nowrap font-[400] text-[#0000000]'>
                                {page === 'signUp' ? 'Already have account?' : "Don't have account?"}
                            </span>
                            <span
                                onClick={page === 'Login' ? () => setPage('signUp') : () => setPage('Login') }
                                className='text-[16px] font-[600] text-[#0000000] cursor-pointer'>
                                {page === 'signUp' ? 'Login' : 'Sign up'}
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication
