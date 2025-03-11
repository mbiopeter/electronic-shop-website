import React from 'react';

const Service = ({values, key}) => {
    return (
        <div key={key} className='w-[250px] flex flex-col gap-2 justify-center items-center'>
            <div className='w-[80px] h-[80px] rounded-full flex items-center mb-3 justify-center bg-[#2F2E30]'>
                <div className='h-[58px] w-[58px] flex items-center rounded-full justify-center bg-[#000000]'>
                    <img src={values.img} className='h-[30px]'/>
                </div>
            </div>
            <span className='font-poppins text-[20px] font-[600] leading-[28px] text-[#000000]'>{values.title}</span>
            <span className='font-poppins text-[14px] font-[400] leading-[21px] text-[#000000]'>{values.desc}</span>
        </div>
    )
}

export default Service
