import React, { useEffect, useState } from 'react';
import { productIemget } from '../Utilities';
import CartData from './CartData';
import modalIcon from '../../src/assets/Group.png';
import { useNavigate } from 'react-router-dom';

const Card = () => {
    const [cart, setCart] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const cartProduct = productIemget('cart');
        setCart(cartProduct);
        const total = cartProduct.reduce((acc, item) => acc + item.price, 0);
        setTotalCost(total);
    }, []);

    const handleSortByPrice = () => {
        const sortByPrice = [...cart].sort((a, b) => b.price - a.price);
        setCart(sortByPrice);
    };

    const handlePurchase = () => {
        document.getElementById('purchase_modal').showModal();
        const total = cart.reduce((acc, item) => acc + item.price, 0); 
        setTotalCost(total);
    };

    const handleClose = () => {
        setCart([]);
        navigate('/');
        localStorage.clear('cart')
    };

    return (
        <>
            <div className='flex justify-between items-center mt-10 container mx-auto'>
                <div>
                    <h1 className='text-2xl font-bold'>Cart</h1>
                </div>

                <div className='flex gap-5 items-center'>
                    <h1 className='text-xl mr-14 font-bold'>Total Cost: ${totalCost.toFixed(2)}</h1>
                    <button onClick={handleSortByPrice} className='px-6 py-2 border-2 text-[#9538e2] rounded-xl'>Sort By Price</button>
                    <button onClick={handlePurchase} className='bg-[#9538e2] px-6 py-2 border-2 text-white rounded-xl'>Purchase</button>
                </div>
            </div>
            <div>
                {
                    cart.map((singleCart, idx) => <CartData key={idx} singleCart={singleCart}></CartData>)
                }
            </div>

            <dialog id="purchase_modal" className="modal">
                <div className="modal-box text-center">
                    <div className='flex justify-center'>
                        <img src={modalIcon} alt="Modal Icon" />
                    </div>
                    <h3 className="font-bold text-2xl">Payment Successful</h3>
                    <p className="py-4">Thank you for your purchase!</p>
                    <p className="py-4">Total Cost: ${totalCost.toFixed(2)}</p>
                    <div className="modal-action">
                        <button className="btn" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Card;
