import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar, Feed, CreatePin, PinDetail, Search } from '../components';

const Pins = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className='px-2 md:px-5 pins'>
      <div className='bg-gray-500 w-full'>
        <Navbar user={user} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
      </div>
      <div className='h-full'>
        <Routes>
          <Route path='/' element={<Feed/>}/>
          <Route path='/category/:categoryId' element={<Feed/>}/>
          <Route path='/create-pin' element={<CreatePin/>}/>
          <Route path='/search' element={<Search setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Pins