import React from 'react';
import { TextField, Radio, Button, Checkbox } from '@mui/material';
import { CreditCard, LocalShipping, } from '@mui/icons-material';

import product1 from '../../../assets/images/product1.png';
import product2 from '../../../assets/images/product2.png';

const billedItems = [
    {
        img:product1,
        name:'Prodct 1',
        count:1,
        amount:650,
        shipping:0
    },
    {
        img:product2,
        name:'Prodct 2',
        count:2,
        amount:1100,
        shipping:0
    }
];


const Billing = () => {
    let total = 0;
    let shipping = 0;
    billedItems.map((item) => {
        total += item.count * item.amount;
        shipping += item.shipping;
    })

    return (
        <div className='w-full flex flex-col lg:flex-row py-5 px-[50px] justify-between lg:px-[150px] gap-10'>


            <div className='w-full lg:w-[40%]'>
                <h2 className='text-2xl font-semibold mb-5'>Billing Details</h2>
                <form className='flex flex-col gap-4'>
                    <TextField label='First Name*' variant='outlined' fullWidth />
                    <TextField label='Company Name' variant='outlined' fullWidth />
                    <TextField label='Street Address*' variant='outlined' fullWidth />
                    <TextField label='Apartment, floor, etc. (optional)' variant='outlined' fullWidth />
                    <TextField label='Town/City*' variant='outlined' fullWidth />
                    <TextField label='Phone Number*' variant='outlined' fullWidth />
                    <TextField label='Email Address*' variant='outlined' fullWidth />
                    <div className='flex items-center'>
                        <Checkbox color='primary' />
                        <p className='text-sm'>Save this information for faster check-out next time</p>
                    </div>
                </form>
            </div>
            
            <div className='w-full lg:w-[60%] border-[#ddd] rounded-lg p-6 bg-gray-50'>
                <div className='space-y-4 overflow-auto'>
                    <table className="text-nowrap">
                        <thead className="border-b-[1px] border-b-[#f5f4f4]">
                            <tr>
                                <td >Name</td>
                                <td>Count</td>
                                <td>Amount</td>
                                <td>Subtotal</td>
                            </tr>
                        </thead>
                        <tbody>
                            {billedItems.map((item, index) => (
                                <tr key={index}>
                                    <td className="flex justify-start flex-row gap-5 items-center py-5 min-w-[150px]">
                                        <img src={item.img} className="object-cover h-[30px] w-[30px] overflow-hidden" />
                                        <span>{item.name}</span>
                                    </td>
                                    <td className=' min-w-[100px]'>{item.count}</td>
                                    <td className=' min-w-[200px]'>${item.amount}</td>
                                    <td className=' min-w-[200px]'>${item.count * item.amount}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className='py-5'>Subtotal</td>
                                <td colSpan={1}>${total}</td>
                            </tr>
                            <tr>
                                <td colSpan={3 } className='py-5'>Shipping</td>
                                <td colSpan={1}>{shipping > 0 ? '$'+shipping: 'Free'}</td>
                            </tr>
                            <tr>
                                <td colSpan={3} className='py-5'>Total</td>
                                <td colSpan={1}>${shipping + total}</td>
                            </tr>
                        </tbody>
                    </table>
                    {/* Payment Methods */}
                    <div>
                        <div className='flex items-center gap-2'>
                            <Radio name='payment' color='primary' />
                            <p>Bank</p>
                            <CreditCard className='text-blue-500' />
                        </div>
                        <div className='flex items-center gap-2'>
                            <Radio name='payment' color='primary' checked />
                            <p>Cash on delivery</p>
                            <LocalShipping className='text-blue-500' />
                        </div>
                    </div>
                    
                    <div className='flex flex-wrap lg:flex-nowrap gap-2'>
                        <TextField label='Coupon Code' variant='outlined' size='small' className='w-full lg:min-w-[65%] '/>
                        <Button variant='contained' color='error' className='w-full lg:w-auto text-nowrap'>Apply Coupon</Button>
                    </div>
                    <Button variant='contained' color='error' fullWidth className='mt-4'>
                        Place Order
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Billing;
