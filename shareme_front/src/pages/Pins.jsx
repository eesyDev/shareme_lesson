import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar, Feed, CreatePin, PinDetail, Search } from '../components';

const Pins = ({ user }) => {
  return (
    <div className='px-2 md:px-5 pins'>
      <div className='bg-gray-500 w-full'>
        <Navbar user={user}/>
      </div>
      <div className='h-full'>
        <Routes>
          <Route path='/' element={<Feed/>}/>
          <Route path='/category/:categoryId' element={<Feed/>}/>
          <Route path='/create-pin' element={<CreatePin/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Pins