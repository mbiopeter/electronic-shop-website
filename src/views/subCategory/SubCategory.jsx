import React from 'react'
import { useParams } from 'react-router-dom';
import { allProducts, getProductBySubCategory } from '../../model/products/products';
import SubHeading from '../components/subheading/Subheading';
import Products from '../components/products/Products';

const SubCategory = () => {
    const {subcategory} = useParams();
    const formattedSubCategory = subcategory.replace(/-/g, ' ');

    const subcategoryProducts = getProductBySubCategory(allProducts,formattedSubCategory )
    return (
        <div className=' w-full flex flex-col py-[20px] px-[50px] lg:px-[130px]'>
            <div className='flex flex-col pb-[10px] lg:pb-[20px]  pt-5 mb-20'>
                <SubHeading heading="Sub category" title={formattedSubCategory} btn={true} btnText='See All'/>
                <div className='grid grid-cols-2 gap-10 sm:grid-cols-2 lg:flex lg:flex-wrap  justify-start items-center'>
                    {subcategoryProducts.map((item, index) => (
                        <Products item={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SubCategory
