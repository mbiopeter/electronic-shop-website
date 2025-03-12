import React, { useState } from 'react'
import Categories from '../../components/categories/Categories';
import Slider from '../../components/slider/Slider';
import BlockCategory from '../../components/categories/block';
import { moreCategories } from '../../../model/categories/data';
import New from '../../components/new/New';
import Service from '../../components/service/Service';
import { services } from '../../../model/services/services';
import SubHeading from '../../components/subheading/Subheading';
import { bestSellings, explore, products } from '../../../model/products/products';
import Products from '../../components/products/Products';
import Button from '../../components/button/Button';
import Banner from '../../components/Banner/Banner';

const Home = () => {
    const [activeCategory, setActiveCategory] = useState('Camera');
    return (
        <div className=' w-full flex  flex-col py-[20px] px-[50px] lg:px-[130px]'>
            <div className='flex flex-col gap-[20px] lg:flex-row justify-between'>
                <Categories />
                <Slider />
            </div>
            <div className='my-10'>
                <SubHeading heading="Today's" title={'Flash Sales'} timer={true}/>
            </div>
            <div className='flex flex-row pb-10 gap-5 flex-nowrap justify-start items-center overflow-auto'>
                {products.map((item,index) => (
                    <Products item={item} key={index}/>
                ))}
            </div>
            <div className='w-full my-10 flex items-center justify-center'>
                <Button value='View All Products' />
            </div>
            <div className='flex flex-col pb-[10px] lg:pb-[20px]  pt-15 border-t-[1px] border-t-[#ddd]'>
                <SubHeading heading="Category" title={'Browse By Category'}/>
                <div className='flex flex-row overflow-x-auto gap-5 pb-10 lg:gap-10'>
                    {moreCategories.map((item,index) => (
                        <BlockCategory values={item} key={index} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                    ))}
                </div>
            </div>

            <div className='flex flex-col pb-[10px] lg:pb-[20px]  pt-15 border-t-[1px] border-t-[#ddd]'>
                <SubHeading heading="This Month" title={'Best Selling Products'} btn={true} btnText='View All'/>
                <div className='grid grid-cols-2 gap-10 sm:grid-cols-2 lg:flex lg:flex-nowrap  justify-center items-center'>
                    {bestSellings.map((item, index) => (
                        <Products item={item} key={index} />
                    ))}
                </div>
            </div>

            <div className='my-10'>
                <Banner />
            </div>

            <div className='flex flex-col pb-[10px] lg:pb-[20px]  pt-15 border-t-[1px] border-t-[#ddd]'>
                <SubHeading heading="Our Products" title={'Explore Our Products'}/>
                <div className='grid grid-cols-2 gap-10 sm:grid-cols-2 lg:flex lg:flex-wrap  justify-center items-center'>
                    {explore.map((item, index) => (
                        <Products item={item} key={index} />
                    ))}
                </div>
            </div>

            <div className='w-full my-10 flex items-center justify-center'>
                <Button value='View All Products' />
            </div>

            <div className='py-10 h-auto flex flex-col gap-5'>
                <SubHeading heading="Featured" title={'New Arrival'} btn={false} section={'New'}/>
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
