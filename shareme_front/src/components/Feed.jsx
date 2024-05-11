import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';
import PinSkeleton from '../pages/Skeleton';

const Feed = () => {
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true)
    if (categoryId) {
      client.fetch(searchQuery(categoryId)).then((data) => {setPins(data); setLoading(false)});
    } else {
      client.fetch(feedQuery).then((data) => {setPins(data); setLoading(false)});
    }

  }, [categoryId]);

  console.log(pins)
  return (
    <div>
      {
        loading && <div className='flex gap-5 flex-wrap'>{[...Array(6)].map(() => <PinSkeleton/> )}</div>
      }
      <MasonryLayout pins={pins}/>
    </div>
  )
}

export default Feed