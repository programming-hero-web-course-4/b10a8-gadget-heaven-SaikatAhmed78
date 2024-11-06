import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
           <div className="bg-[#9538e2] h-[300px] py-6 rounded-lg container mx-auto">
                
                <div className='max-w-7xl mx-auto px-4 text-center'>
                  <div className='max-w-7xl mx-auto px-4 text-white'>
                  <h1 className='text-2xl md:text-4xl font-bold'>Dashboard</h1>  
                  <p className='py-2'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                  </div>

                  <div className='mt-14 space-x-5'>
                  <NavLink to="/dashboard/card" className="bg-white border-2 text-[#9538e2] px-6 py-2 rounded-xl">Card</NavLink>
                  <NavLink to="/dashboard/wishlist" className=" bg-[#9538e2] px-6 py-2 border-2 text-white rounded-xl">Wish List</NavLink>
                  </div>
                </div>
            </div>

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;