import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({data}) => {

    const {product_image, product_title, price, product_id} = data;

    return (
        <div className='bg-white shadow-lg rounded-lg border overflow-hidden p-4 flex flex-col'>

           <div className=''>
           <img className='w-full h-48 rounded-lg' src={product_image} alt="" />
           </div>
            
            <div className='p-4 flex-1'>
            <h3 className='text-lg font-semibold '>{product_title}</h3>
            <p className='text-gray-600'>${price}</p>

            
            </div>
            <Link to={`/details/${product_id}`} className='inline-block mt-2 px-4 w-fit py-2 border-purple-700 border text-purple-700 rounded-xl '>View More</Link>
        </div>
    );
};

export default ProductCard;