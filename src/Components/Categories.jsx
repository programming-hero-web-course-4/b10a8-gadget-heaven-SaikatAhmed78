import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {


    return (
        <div className=' w-64 p-4'>
            <ul className='space-y-3'>
                {
                    categories.map(category => (


                        <li key={category.category}>

                            <NavLink
                                to={`/category/${category.category}`}

                                className={({ isActive }) => isActive ? 'bg-[#9538e2] text-white font-bold text-xl block p-2 rounded shadow-md'
                                    : 'bg-white text-black block text-xl p-2 rounded shadow-md hover:bg-[#9538e2] hover:text-white'}>

                                <button >{category.category}</button>

                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Categories;