import React, { useState, useEffect } from 'react';
import { client } from '../client';
import { searchQuery } from '../utils/data';

const Search = ({ searchTerm }) => {
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = searchQuery(searchTerm);
    if (searchTerm !== '') {
      setLoading(true);

      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      })
    }
  }, []);

  return (
    <div>Search</div>
  )
}

export default Search