import React, { useState } from 'react'
import Categories from '../../components/categories/Categories';
import Slider from '../../components/slider/Slider';
import BlockCategory from '../../components/categories/block';
import { moreCategories } from '../../../model/categories/data';
import New from '../../components/new/New';

const Home = () => {
    const [activeCategory, setActiveCategory] = useState('Camera');
    return (
        <div className=' w-full flex  flex-col py-[20px] px-[50px] lg:px-[130px]'>
            <div className='flex flex-col gap-[20px] lg:flex-row justify-between'>
                <Categories />
                <Slider />
            </div>
            <div className='flex flex-row overflow-x-auto pb-[10px] lg:pb-[20px] gap-5 lg:gap-10 pt-15 border-t-[1px] border-t-[#ddd]'>
                {moreCategories.map((item,index) => (
                    <BlockCategory values={item} key={index} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                ))}
            </div>
            <div className='py-10'>
                <New />
            </div>
        </div>
    )
}

export default Home
