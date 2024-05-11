import React, { useState, useEffect } from 'react';

import { client } from '../client';
import MasonryLayout from './MasonryLayout';
import { searchQuery, feedQuery } from '../utils/data';
import PinSkeleton from '../pages/Skeleton';

const Search = ({ searchTerm }) => {
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm !== '') {
      const query = searchQuery(searchTerm);
      setLoading(true);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      })
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        // setLoading(false);
      })
    }
  }, [searchTerm]);

  console.log(pins)

  return (
    <div>
      {
        loading && <div className='flex gap-5 flex-wrap'>{[...Array(6)].map(() => <PinSkeleton/> )}</div>
      }
      {pins?.length !== 0 ? <MasonryLayout pins={pins}/> : <p>No Pins Found</p>}
    </div>
  )
}

export default Search