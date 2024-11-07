
import { Helmet } from 'react-helmet-async';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {




    return (
        <div>
             <Helmet>
                <title>Dashboard | Gadget Haven</title>
            </Helmet>
           <div className="bg-[#9538e2] h-[300px] py-6 rounded-lg container mx-auto">
                
                <div className='max-w-7xl mx-auto px-4 text-center'>
                  <div className='max-w-7xl mx-auto px-4 text-white'>
                  <h1 className='text-2xl md:text-4xl font-bold'>Dashboard</h1>  
                  <p className='py-2'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                  </div>

                  <div className='mt-14 space-x-5'>
                  <NavLink to="/dashboard/card" className={({ isActive }) => isActive ? "bg-blue-500 text-white  px-4 py-2 rounded-lg" : "px-4 py-2 rounded-lg border-2 text-white "}>Card</NavLink>
                  <NavLink to="/dashboard/wishlist" className={({ isActive }) => isActive ? "bg-blue-500 text-white  px-4 py-2 rounded-lg" : "px-4 py-2 rounded-lg border-2 text-white "}>Wish List</NavLink>
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