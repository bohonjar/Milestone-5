import React, { useState } from 'react';
import SearchForm from './SearchForm';
import BookList from './BookList';

const SearchBook = (props) => {
  const [filteredBookList, setFilteredBookList] = useState([]);

  const updateSearchResults = (searchTerm) => {
    const filteredBooks = props.bookList.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBookList(filteredBooks);
  };

  return (
    <div className="container">
      <SearchForm onSubmit={updateSearchResults} />
      <BookList bookList={filteredBookList.length > 0 ? filteredBookList : props.bookList} onClick={props.updateSingleBook} />
    </div>
  );
};

export default SearchBook;
