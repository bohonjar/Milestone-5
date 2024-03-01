import React, { useState, useEffect } from 'react';
import dataSource from './dataSource';

import AuthorList from './AuthorList';

const ViewAuthors = () => {
  const [authorList, setAuthorList] = useState([]);

  useEffect(() => {
    loadAuthors();
  }, []);

  const loadAuthors = async () => {
    try {
      const response = await dataSource.get('/authors');
      setAuthorList(response.data);
    } catch (error) {
      console.error('Error loading authors:', error);
    }
  };

  const handleAuthorSelection = (authorId) => {
    console.log('Selected author:', authorId);
  };

  return (
    <div>
      <AuthorList authorList={authorList} onClick={handleAuthorSelection} />
    </div>
  );
};

export default ViewAuthors;
