import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar, UserProfile } from '../components';
import Pins from './Pins';
import { userQuery } from '../utils/data';
import { client } from '../client.js';

const Home = () => {
const [user, setUser] = useState('');

const userInfo = localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

useEffect(() => {
  const query = userQuery(userInfo?._id);

  client.fetch(query).then((data) => {
    console.log(data);
    setUser(data[0])
  })
}, [])

  return (
    <div className='flex'>
      <Sidebar/>
      <div className='w-full'>
        <Routes>
          <Route path='/user-profile/:userId' element={<UserProfile/>}/>
          <Route path='/*' element={<Pins user={user && user}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Home