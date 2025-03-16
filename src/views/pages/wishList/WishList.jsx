import React from 'react'
import { recommendations, wishList } from '../../../model/products/products'
import SubHeading from '../../components/subheading/Subheading'
import Products from '../../components/products/Products'

const WishList = () => {

    return (
        <div className=' w-full flex  flex-col px-[50px] lg:px-[130px]'>
            <div className='flex flex-col pb-[10px] lg:pb-[20px]  pt-15 '>
                <SubHeading heading="WishList(4)" title='Liked Products' btn={true} btnText='See All'/>
                <div className='grid grid-cols-2 gap-10 lg:gap-15 lg:flex lg:flex-wrap  justify-start items-center'>
                    {wishList.map((item, index) => (
                        <Products item={item} key={index} />
                    ))}
                </div>
            </div>
            <div className='flex flex-col pb-[10px] lg:pb-[20px]  pt-15 mb-20'>
                <SubHeading heading="Just for you" title='Recommendations' btn={true} btnText='See All'/>
                <div className='grid grid-cols-2 gap-10 lg:gap-15 lg:flex lg:flex-wrap  justify-start items-center'>
                    {recommendations.map((item, index) => (
                        <Products item={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WishList
