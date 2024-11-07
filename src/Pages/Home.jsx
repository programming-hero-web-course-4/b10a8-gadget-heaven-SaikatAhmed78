import React from 'react';
import Banner from '../Components/Banner';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../Components/Categories';
import { Helmet } from 'react-helmet-async';

const Home = () => {

    const categories = useLoaderData();

    return (
        <div >
             <Helmet>
                <title>Gadget | Gadget Haven</title>
            </Helmet>
            <Banner></Banner>

            <h3 className='mt-64 text-center text-3xl font-bold text-[#9538e2]'>Explore Cutting-Edge Gadgets</h3>

            <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-10'>

                <div className=''>
                    <Categories categories={categories}></Categories>
                </div>

                <div className='md:col-span-2 lg:col-span-3'>
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Home;