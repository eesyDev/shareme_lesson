import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';

import logo from '../assets/logo.png';
import { categories } from '../utils/data';

const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 capitalize hover:text-black transition-all duration-200 ease-in-out';

const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize';

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 px-2'>
      <Link to='' className='w-190 flex px-5 gap-2 my-6 pt-1 items-center'>
        <img src={logo} alt="logo" className='w-full'/>
      </Link>
      <div className='flex flex-col gap-5'>
        <NavLink to="/" className={({isActive}) => (isActive ? isActiveStyle : isNotActiveStyle)}>
          <RiHomeFill/>
          Home
        </NavLink>
        <h3 className='mt-2 px-5 text-base 2xl:text-xl'>Categories</h3>
        {
          categories && categories?.map((category) => (
            <NavLink to={`/category/${category.name}`} className={({isActive}) => (isActive ? isActiveStyle : isNotActiveStyle)}>
              <img src={category.image} className='w-8 h-8 rounded-full shadow-sm'/>
              {category.name}
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar