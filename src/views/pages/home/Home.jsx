import React from 'react'
import Categories from '../../components/categories/Categories'
import Slider from '../../components/slider/Slider'

const Home = () => {
    return (
        <div className=' w-full flex  flex-col py-[20px] px-[50px] lg:px-[130px]'>
            <div className='flex flex-row justify-between'>
                <Categories />
                <Slider />
            </div>
        </div>
    )
}

export default Home
