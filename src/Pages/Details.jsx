import { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { setProductItem } from '../Utilities';

const Details = () => {
    const detailsData = useLoaderData();
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {

        if (detailsData && detailsData.length > 0) {
            
            const findData = detailsData.find(item => item.product_id === parseInt(id, 10));
        
            setProduct(findData || {});
        } else {
           
        }

    }, [detailsData, id]);

    const handleAddToCartWishlist = (added, productData) => {
       
        if(added === 'cart'){
            setProductItem('cart', productData)
        }
        else if(added === 'wishlist'){
            setProductItem('wishlist', productData)
        }
        
    };

    


    const { product_title, product_image, category, price, description, specification, availability, rating } = product || {};

    return (
        <div className=''>
            <div className="bg-[#9538e2] h-[400px] py-6 rounded-lg container mx-auto">
                
                <div className='max-w-7xl mx-auto px-4 text-center'>
                  <div className='max-w-7xl mx-auto px-4 text-white'>
                  <h1 className='text-2xl md:text-4xl font-bold'>Product Details</h1>  
                  <p className='py-2'> Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                  </div>
                </div>
            </div>

    
            <div className='flex gap-5 bg-white max-w-7xl mx-auto px-4 rounded-xl border relative p-6 -top-52'>
            
                <div className='w-[30%]'>
                 <img src={product_image} className='mx-auto shadow-sm w-full object-cover h-full rounded-lg' />
                </div>
               
               <div className='space-y-2  px-6'>
               <h1 className='text-2xl font-semibold py-2'>{product_title}</h1>
                <p className='text-xl font-semibold'>Price: ${price}</p>
                <button className='bg-white font-bold text-green-600 border border-green-400 px-4 py-2 rounded-xl'>{availability ? 'In Stock' : 'Out of Stock'}</button>
                <p className=''>{description}</p>
                    <h3 className='text-lg font-bold'>Specifications:</h3>
                <ul>
                    {specification ? specification.map((spec, index) => (
                        <li className='list-disc list-inside' key={index}>{spec}</li>
                    )) : 'No specifications available'}
                </ul>
                    <div className='flex gap-2'>
                    <h3 className='font-bold'>Rating:</h3>
                    <FaStar size={20} />
                    </div>
                    <p>{rating}</p>

                    <div className='flex gap-3'>
                        <button onClick={()=>handleAddToCartWishlist('cart', product)} className='btn bg-white font-bold text-[#9538e2] px-4 py-2 rounded-xl'>Add to Cart</button>
                        <button onClick={()=>handleAddToCartWishlist('wishlist', product)}><IoMdHeartEmpty size={30} />
                        </button>
                    </div>
               </div>
            </div>
        </div>
    );
};


export default Details;
