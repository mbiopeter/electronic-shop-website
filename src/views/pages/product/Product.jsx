import React, { useState } from 'react';
import { Rating } from "primereact/rating";
import FavoriteIcon from '@mui/icons-material/Favorite';
import delivery from '../../../assets/images/delivery.png';
import reload from '../../../assets/images/reload.png';
import SubHeading from '../../components/subheading/Subheading';
import Products from '../../components/products/Products';
import { allProducts, explore, getProductById, isProductLiked, wishList } from '../../../model/products/products';
import { useParams } from 'react-router-dom';

const colors = ['#00FF66', '#e6a925', '#DB4444'];
const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const Product = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [selectedSize, setSelectedSize] = useState(sizes[0]);
    const [mainImage, setMainImage] = useState(null);

    const {productId} = useParams();
    const product = getProductById(allProducts,productId);

    const [liked, setLiked] = useState(isProductLiked(wishList, productId));
    const toggleLike = () => {
        setLiked(!liked);
        if (liked) {
            wishList.pop(product);
        } else {
        wishList.push(product);
        }
    };

    

    const increment = () => setQuantity(quantity + 1);
    const decrement = () => quantity > 1 && setQuantity(quantity - 1);

    React.useEffect(() => {
        setMainImage(product.images[0]);
    }, [product]);

    const handleImageClick = (image) => {
        if (image === mainImage) {
            setMainImage(product.images[0]);
        } else {
            setMainImage(image);
        }
    };

    return (
        <div className='w-full flex flex-col py-5 px-5 lg:px-20'>
            <div className="flex justify-start items-center py-4">
                <div className="flex flex-row gap-1">
                    <span className="text-sm text-gray-500">Account</span>/ 
                    <span className="text-sm text-black">Product</span>
                </div>
            </div>

            <div className='w-full flex flex-col lg:flex-row gap-10'>
                <div className='flex lg:w-[50%] flex-col lg:flex-row gap-5'>
                    <div className='flex flex-row lg:flex-col gap-5'>
                        {product.images.slice(1).map((image, index) => (
                            <div 
                                key={index} 
                                className='w-24 h-24 p-2 shadow-sm flex overflow-hidden items-center justify-center rounded-sm'
                                onClick={() => handleImageClick(image)}>
                                <img src={image} className='w-full' alt='product' />
                            </div>
                        ))}
                    </div>
                    <div className='shadow-sm overflow-hidden max-h-[72vh] p-5 lg:min-w-[80%] flex items-center justify-center'>
                        <img src={mainImage} className='w-full' alt='Main Product' />
                    </div>
                </div>

                <div className='shadow-sm flex flex-col gap-2 w-full lg:w-2/5 p-5'>
                    <h2 className='text-xl font-semibold'>{product.name}</h2>
                    <div className='flex items-center gap-2'>
                        <Rating value={product.ratings} cancel={false} />
                        <span className='text-sm'>({product.ratingsCount})</span>
                        <span className='text-sm'>|</span>
                        <span className={`text-sm ${product.amountLeft >= 50 ? 'text-green-500' : 'text-red-500'}`}>
                            {product.amountLeft >= 50 ? 'In Stock' : product.amountLeft + ' Items Left'}
                        </span>
                    </div>
                    <span className='text-lg font-medium'>${product.price}</span>
                    <p className='text-sm text-gray-700'>{product.description}</p>
                    <hr />

                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-3'>
                            <span className='text-md font-medium'>Colours:</span>
                            <div className='flex gap-2'>
                                {product.variantType.color.map((color, index) => (
                                    <div 
                                        key={index} 
                                        className={`w-6 h-6 cursor-pointer rounded-sm ${selectedColor === color ? 'border-2 border-black' : ''}`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => setSelectedColor(color)}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className='flex items-center gap-3'>
                            <span className='text-md font-medium'>Size:</span>
                            <div className='flex gap-2'>
                                {product.variantType.size.map((size, index) => (
                                    <div 
                                        key={index} 
                                        className={`w-auto px-2 h-8 flex items-center justify-center cursor-pointer shadow-sm rounded-sm ${selectedSize === size ? 'bg-gray-200' : ''}`}
                                        onClick={() => setSelectedSize(size)}>
                                        {size}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-5 mt-4'>
                        <div className='flex border rounded-sm'>
                            <button className='w-10 text-lg font-bold border-r' onClick={decrement}>-</button>
                            <span className='w-12 text-lg font-medium flex items-center justify-center'>{quantity}</span>
                            <button className='w-10 text-lg font-bold bg-red-500 text-white' onClick={increment}>+</button>
                        </div>
                        <button className='bg-red-500 py-2 px-7 text-white rounded-sm'>Add To Cart</button>
                        <div className='p-2 border rounded-sm w-10 h-10 flex items-center justify-center'>
                            <FavoriteIcon
                                fontSize="small"
                                onClick={toggleLike} 
                                className={`${liked ? 'text-[#DB4444]' : 'text-gray-500'} cursor-pointer`}
                            />
                        </div>
                    </div>

                    <div className='border rounded-md mt-4'>
                        <div className='flex items-center p-4 gap-4'>
                            <img src={delivery} className='h-5' alt='Free Delivery' />
                            <div>
                                <span className='text-md font-medium'>Free Delivery</span>
                                <p className='text-xs underline'>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <hr />
                        <div className='flex items-center p-4 gap-4'>
                            <img src={reload} className='h-5' alt='Return Delivery' />
                            <div>
                                <span className='text-md font-medium'>Return Delivery</span>
                                <p className='text-xs underline'>Free 30 Days Delivery Returns. Details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-10'>
                <SubHeading heading="Related Items" btn={false} section={'New'} />
                <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {explore.map((item, index) => (
                        <Products item={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;
