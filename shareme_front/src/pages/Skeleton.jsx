import React from 'react';
import { Skeleton } from '@mui/material';

const PinSkeleton = () => {
  return (
    <div className='skeleton card bg-white rounded-sm'>
        <div className='skeleton-img'>
            <Skeleton variant="rounded" width="100%" height="200px"/>
        </div>
        <div className='skeleton-about p-2'>
            <Skeleton variant='text' width="80%" height="40px"/>
        </div>
    </div>
  )
}

export default PinSkeleton