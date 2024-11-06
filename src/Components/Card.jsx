import React, { useEffect, useState } from 'react';
import { productIemget} from '../Utilities';
import CartData from './CartData';

const Card = () => {
    const [cart, setCart] = useState([]);


    useEffect(() => {
        const cartProduct = productIemget('cart')

        setCart(cartProduct || [])
    }, [])

    
    return (
        <div>
            {
                cart.map((singleCart, idx) => <CartData key={idx} singleCart={singleCart}></CartData>)
               }
        </div>
    );
};

export default Card;