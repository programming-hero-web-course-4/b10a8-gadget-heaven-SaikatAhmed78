import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ProductCard from './ProductCard';


const Products = () => {

    const productData = useLoaderData();
    const { category } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        if(category){
            if(category === 'All Products'){
                setProduct(productData)

            }
            else{
                const filteredByCategory = [...productData].filter(data => data.category === category)

                setProduct(filteredByCategory)
            }
        }
        else{
            setProduct(productData.slice(0, 9))
        }
    }, [productData, category])


    return (

        <div className='flex-grow p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                product.length > 0 ? product.map(data => <ProductCard key={data.product_id} data={data}></ProductCard>) : <h3 className='text-3xl col-span-3 font-bold text-red-700 text-center'>No Product Available</h3>
            }
        </div>
    );
};

export default Products;