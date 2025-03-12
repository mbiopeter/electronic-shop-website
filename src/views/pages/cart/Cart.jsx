import React, { useEffect, useState } from 'react';
import img from '../../../assets/images/slider1.png';

const cartItems = [
    {
        id: 1,
        product: 'Game Pad',
        price: 850,
        quantity: 1,
    },
    {
        id: 2,
        product: 'Game Controller',
        price: 900,
        quantity: 2,
    },
];

const Cart = () => {
    const [items, setItems] = useState(cartItems);
    const [total, setTotal] = useState(0);
    const [shipping, setShipping] = useState(0);

    // Recalculate total whenever the cart items change
    useEffect(() => {
        const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(totalPrice);
    }, [items]);

    const handleQuantityChange = (id, quantity) => {
        const updatedItems = items.map(item => 
            item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
        );
        setItems(updatedItems);
    };

    return (
        <div className="w-full flex flex-col pb-10 px-[50px] lg:px-[150px]">
            <div className="flex justify-start items-center py-10">
                <div className="flex flex-row gap-1">
                    <span className="text-[14px] text-[#696868] font-[400]">Home</span>/
                    <span className="text-[14px] text-[#000000] font-[400]">Cart</span>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full text-nowrap">
                    <thead className="border-b-[1px] border-b-[#f5f4f4]">
                        <tr>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Subtotal</td>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td className="flex justify-start flex-row gap-5 items-center py-10 min-w-[200px]">
                                    <img src={img} className="object-cover h-[30px]" alt={item.product} />
                                    <span>{item.product}</span>
                                </td>
                                <td className=' min-w-[100px]'>${item.price}</td>
                                <td className=' min-w-[200px]'>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                        className="w-[50px] p-1 text-center items-center rounded-md outline-none border-[1px] border-[#666464]"
                                    />
                                </td>
                                <td className=' min-w-[200px]'>${item.price * item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="w-full flex flex-row justify-between mt-5">
                <button className="p-2 border-[1px] border-[#ddd] cursor-pointer rounded-sm font-[400]">
                    Return to Shop
                </button>
                <button className="p-2 border-[1px] border-[#ddd] cursor-pointer rounded-sm font-[400]">
                    Update Cart
                </button>
            </div>

            <div className='w-full mt-15 flex items-start gap-5 lg:gap-0 flex-col overflow-auto lg:flex-row justify-between'>
                <div className='w-[100%] lg:w-[50%] flex flex-row gap-5 justify-between items-center'>
                    <input
                        type="text"
                        placeholder='Coupon Code'
                        className="w-[60%] p-2 items-center rounded-sm outline-none font-[400] border-[1px] border-[#000000]"
                    />
                    <button className="p-2 w-[65%] text-[#FAFAFA]  text-nowrap border-[1px] border-[#ddd]  cursor-pointer bg-[#DB4444] rounded-sm font-[400]">
                        Apply Coupon
                    </button>
                </div>

                <div className='w-[100%] lg:w-[45%] rounded-sm border-[1px] flex-col border-[#000000] p-5'>
                    <span className='text-[20px] text-[#000000] font-[500]'>Cart Total</span>
                    <div className='flex flex-row justify-between items-center mt-7 border-b-[#ddd] border-b-[2px] py-2'>
                        <span className='text-[16px] text-[#000000] font-[400]'>Subtotal:</span>
                        <span className='text-[16px] text-[#000000] font-[400]'>${total}</span>
                    </div>
                    <div className='flex flex-row justify-between items-center mt-7 border-b-[#ddd] border-b-[2px] py-2'>
                        <span className='text-[16px] text-[#000000] font-[400]'>Shipping:</span>
                        <span className='text-[16px] text-[#000000] font-[400]'>{shipping === 0 ? 'Free' : shipping}</span>
                    </div>
                    <div className='flex flex-row justify-between items-center mt-7 py-2'>
                        <span className='text-[16px] text-[#000000] font-[400]'>Total:</span>
                        <span className='text-[16px] text-[#000000] font-[400]'>${total + shipping}</span>
                    </div>
                    <button className="p-2 border-[1px] bg-[#DB4444] mt-5 w-full text-[#FAFAFA] border-[#ddd] cursor-pointer rounded-sm font-[400]">
                        Update Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
