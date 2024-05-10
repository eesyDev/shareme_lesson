import React from 'react';
import { Skeleton } from '@mui/material';

const PinSkeleton = () => {
  return (
    <div className='skeleton'>
        <Skeleton variant="rounded" width="100%" height="100%"/>
    </div>
  )
}

export default PinSkeleton