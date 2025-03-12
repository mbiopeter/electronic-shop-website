import React, { useState } from 'react'
import Categories from '../../components/categories/Categories';
import Slider from '../../components/slider/Slider';
import BlockCategory from '../../components/categories/block';
import { moreCategories } from '../../../model/categories/data';
import New from '../../components/new/New';
import Service from '../../components/service/Service';
import { services } from '../../../model/services/services';
import SubHeading from '../../components/subheading/Subheading';
import { products } from '../../../model/products/products';
import Products from '../../components/products/Products';

const Home = () => {
    const [activeCategory, setActiveCategory] = useState('Camera');
    return (
        <div className=' w-full flex  flex-col py-[20px] px-[50px] lg:px-[130px]'>
            <div className='flex flex-col gap-[20px] lg:flex-row justify-between'>
                <Categories />
                <Slider />
            </div>
            <div className='my-10'>
                <SubHeading />
            </div>
            <div className='flex flex-row gap-5 flex-nowrap justify-start items-center overflow-auto'>
                {products.map((item,index) => (
                    <Products item={item} key={index}/>
                ))}
            </div>
            <div className='flex flex-row overflow-x-auto pb-[10px] lg:pb-[20px] gap-5 lg:gap-10 pt-15 border-t-[1px] border-t-[#ddd]'>
                {moreCategories.map((item,index) => (
                    <BlockCategory values={item} key={index} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                ))}
            </div>
            <div className='py-10 h-auto'>
                <New />
            </div>
            <div className='flex flex-col lg:flex-row gap-15 mt-10 items-center justify-center'>
                {services.map((item,index) => (
                    <Service values={item} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Home
