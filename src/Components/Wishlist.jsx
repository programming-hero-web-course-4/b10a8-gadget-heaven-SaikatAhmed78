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
            <div>
               {
                wislist.map((data, idx) => <WishlistCard key={idx} data={data}></WishlistCard>)
               } 
            </div>
        </div>
    );
};

export default Wishlist;