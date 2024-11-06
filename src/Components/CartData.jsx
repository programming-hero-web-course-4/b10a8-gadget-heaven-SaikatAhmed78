import React from 'react';

const CartData = ({singleCart}) => {

    const {product_title, product_image, specification, price} = singleCart
    
    return (

        <div className='flex flex-col md:flex-row items-center mb-6 md:h-60 shadow-md bg-white rounded-lg w-11/12 lg:w-7/12 mx-auto space-y-3  p-4 gap-6'>
            <div className='h-[150px] p-3 rounded-lg'>
                <img src={product_image} className='h-full' alt="" />
            </div>

            <div>
                <h4 className='text-xl font-bold'>{product_title}</h4>
                
                {
                    specification.map((feature, idx) => <span key={idx}  className='text-lg text-[#09080F99]'>{feature}, </span>)
                }

                <p className='text-lg font-bold'>$ {price}</p>
            </div>
        </div>
    );
};

export default CartData;