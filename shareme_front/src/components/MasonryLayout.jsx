import React from 'react';

import Pin from './Pin'

const MasonryLayout = ({ pins }) => {
  return (
    <div>
      { pins?.map((item) => (
        <div><Pin pin={item}/></div>
      )) }
    </div>
  )
}

export default MasonryLayout