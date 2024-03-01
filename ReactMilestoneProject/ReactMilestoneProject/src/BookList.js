import React from 'react';
import Card from './Card';

const BookList = (props) => {
  const { bookList, onClick } = props;

  const books = bookList.map((book) => (
    <Card
      key={book.bookId}
      book={book}
      buttonText='Details'
      onClick={() => onClick(book.bookId)}
    />
  ));

  return <div className='container'>{books}</div>;
};

export default BookList;
