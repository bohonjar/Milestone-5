import React from 'react';
import Card from './Card';

const OneBook = ({ book }) => {
  return (
    <div>
      <Card book={book} />
    </div>
  );
};

export default OneBook;
