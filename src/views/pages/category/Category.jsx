import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BasicCategories, getCategoryById, moreCategories } from '../../../model/categories/category';
import SubHeading from '../../components/subheading/Subheading';
import Products from '../../components/products/Products';
import { allProducts, getProductByCategory } from '../../../model/products/products';

const SubCategory = ({subcategory, values, key}) => {
    const {categoryId} = useParams();
    const formattedSubCategory = subcategory.replace(/\s+/g, '-');
    return(
        <Link to={`/category/${categoryId}/${formattedSubCategory}`}>
            <div key={key} className="flex min-w-[70px] h-full flex-col bg-[#F1F1F1] shadow-lg items-center justify-center p-3 rounded-lg hover:bg-[#DB4444] hover:text-white transition-colors duration-300 ease-in-out">
                <div className="h-[30px] w-[30px] overflow-hidden rounded-full bg-[#FFF] mb-2">
                    <img src={values.img} className="object-cover w-full h-full"/>
                </div>
                <span className="text-sm font-semibold text-[#333]">{values.name}</span>
            </div>
        </Link>
    )
}

const Category = () => {
    const {categoryId} = useParams();

    const allCategories = [...BasicCategories, ...moreCategories];

    const currentcategory = getCategoryById(allCategories, categoryId);

    const categoryProducts = getProductByCategory(allProducts, currentcategory.name);

    return (
        <div className=' w-full flex flex-col py-[20px] px-[50px] lg:px-[130px]'>
            <SubHeading heading="Sub Categories" btn={false} section={'New'}/>
            <div className='w-full px-[20px] h-auto flex flex-row pb-5 gap-2 lg:gap-3 overflow-auto mb-10'>
                {currentcategory.subcategories.map((item, index) => (
                    <SubCategory subcategory={item.name}  values={item} key={index}/>
                ))}
            </div>

            <div className='flex flex-col pb-[10px] lg:pb-[20px]  pt-5 mb-20'>
                <SubHeading heading="Category" title={currentcategory.name} btn={true} btnText='See All'/>
                <div className='grid grid-cols-2 gap-10 sm:grid-cols-2 lg:flex lg:flex-wrap  justify-start items-center'>
                    {categoryProducts.map((item, index) => (
                        <Products item={item} key={index} />
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Category
