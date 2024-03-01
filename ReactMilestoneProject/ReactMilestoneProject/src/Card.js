import React from 'react';
import BookCard from './BookCard';
import { Link } from 'react-router-dom';

const Card = ({ book }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <BookCard book={book} />
      <div className="card-body" style={{ padding: '0' }}>
        <Link to={`/show/${book.bookId}`} className="btn btn-primary" style={{ margin: '0' }}>View Details</Link>
      </div>
    </div>
  );
};

export default Card;