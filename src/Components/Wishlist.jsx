import React, { useEffect, useState } from 'react';
import { productIemget } from '../Utilities';
import WishlistCard from './WishlistCard';

const Wishlist = () => {

    const [wislist, setWishlist] = useState([]);


    useEffect(() => {
        const wishListProduct = productIemget('wishlist')

        setWishlist(wishListProduct)
    }, [])


    return (
        <div>
            <h1 className='text-2xl font-bold mt-10 pl-5'>Wishlist</h1>
            <div>
               {
                wislist.map((data, idx) => <WishlistCard key={idx} data={data}></WishlistCard>)
               } 
            </div>
        </div>
    );
};

export default Wishlist;