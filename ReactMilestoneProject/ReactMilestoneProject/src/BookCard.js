import React from 'react';
import BookImage from './BookDefault.jpg';

const BookCard = ({ book }) => {

  return (
    <div>
      <img src={book.image || BookImage} className="card-img-top" alt="Book Cover" />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">
          <strong>Book ID:</strong> {book.bookId}<br />
          <strong>Author ID:</strong> {book.authorId}<br />
          <strong>Publication Year:</strong> {book.publicationYear}<br />
          <strong>Genre:</strong> {book.genre}<br />
          {book.description && <span><strong>Description:</strong> {book.description}<br /></span>}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
