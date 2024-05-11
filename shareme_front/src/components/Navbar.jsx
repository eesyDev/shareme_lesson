import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';
import { RxExit } from "react-icons/rx";
import { LuLogIn } from "react-icons/lu";


const Navbar = ({ user, searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();
  console.log(user?._id)

  return (
    <div className='flex px-2 gap-2 md:gap-5 w-full mt-5 '>
      <div className='flex w-4/5 justify-start items-center px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm'>
        <IoMdSearch fontSize={22} className='ml-1'/>
        <input 
          type="text" 
          placeholder='Search' 
          className='p-2 w-full bg-white outline-none'
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => navigate('/search')}
        />
      </div>
      {
        user ? (<div className='flex gap-3'>
        <Link to={`user-profile/${user?._id}`} className='md:block hidden'>
            <img src={user?.image} alt="avatar" className='h-12 w-12  rounded-lg'/>
        </Link>
        <Link to='/create-pin' className="bg-black text-white rounded-lg w-12 h-12 flex items-center justify-center">
          <IoMdAdd/>
        </Link>
        <Link to='/login' className="bg-black text-white rounded-lg w-12 h-12 flex items-center justify-center"><RxExit/></Link>
      </div>) : <div><Link to="/login" ><LuLogIn/></Link></div>
      }
      
    </div>
  )
}

export default Navbar