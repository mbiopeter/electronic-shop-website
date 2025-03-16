import React from 'react'
import { history, historyRelated } from '../../../model/products/products'
import Products from '../../components/products/Products'
import SubHeading from '../../components/subheading/Subheading'

const History = () => {
    return (
        <div className='w-full flex flex-col py-[20px] px-[50px] lg:px-[150px]'>
            <SubHeading heading="History" title={'Your Previews'}/>
            <div className='flex flex-row pb-10 gap-5 flex-nowrap justify-start items-center overflow-auto'>
                {history.map((item,index) => (
                    <Products item={item} key={index}/>
                ))}
            </div>
            <div className='flex flex-col pb-[10px] lg:pb-[20px]  pt-15 mb-20'>
                <SubHeading heading="Just for you" title='Related Products' btn={true} btnText='See All'/>
                <div className='grid grid-cols-2 gap-10  lg:gap-12 lg:flex lg:flex-wrap  justify-start items-center'>
                    {historyRelated.map((item, index) => (
                        <Products item={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default History
