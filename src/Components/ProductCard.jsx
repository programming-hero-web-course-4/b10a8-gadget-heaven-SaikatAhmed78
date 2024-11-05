import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({data}) => {

    const {product_image, product_title, price} = data;

    return (
        <div className='bg-white shadow-lg rounded-lg border overflow-hidden p-4 flex-col'>

           <div className=''>
           <img className='w-full h-48 rounded-lg' src={product_image} alt="" />
           </div>
            
            <div className='p-4'>
            <h3 className='text-lg font-semibold '>{product_title}</h3>
            <p className='text-gray-600'>${price}</p>

            <Link to={``} className='inline-block mt-2 px-4 py-2 border-purple-700 border text-purple-700 rounded-xl '>View More</Link>
            </div>
        </div>
    );
};

export default ProductCard;