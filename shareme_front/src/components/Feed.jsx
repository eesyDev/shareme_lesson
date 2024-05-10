import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';

const Feed = () => {
  const [pins, setPins] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      client.fetch(searchQuery(categoryId)).then((data) => setPins(data));
    } else {
      client.fetch(feedQuery).then((data) => setPins(data));
    }

  }, [categoryId]);

  console.log(pins)
  return (
    <div>
      <MasonryLayout pins={pins}/>
    </div>
  )
}

export default Feed