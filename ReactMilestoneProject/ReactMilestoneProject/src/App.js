import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewBook from './NewBook';
import OneBook from './OneBook';
import NavBar from './NavBar';
import dataSource from './dataSource';
import SearchForm from './SearchForm';
import SearchBook from './SearchBook';
import HomePage from './HomePage';
import ModifyBooks from './ModifyBooks';
import ViewAuthors from './ViewAuthors';
import './App.css';

const App = () => {
  const [bookList, setBookList] = useState([]);
  const [, setCurrentlySelectedBookId] = useState(null);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const response = await dataSource.get('/books');
      setBookList(response.data);
    } catch (error) {
      console.error('Error loading books:', error);
    }
  };

  const handleSelectionOne = (bookId) => {
    setCurrentlySelectedBookId(bookId);
  };

  const updateSearchResults = (filteredBooks) => {
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          exact
          path='/'
          element={<HomePage />}
        />
        <Route
          exact
          path='/home-page'
          element={<HomePage />}
        />
        <Route
          exact
          path='/view-books'
          element={<SearchForm onSubmit={updateSearchResults} bookList={bookList} />}
        />
        <Route
          exact
          path='/view-authors'
          element={<ViewAuthors onSubmit={updateSearchResults} />}
        />
        <Route
          exact
          path="/create-a-book"
          element={<NewBook />}
        />
        <Route
          exact
          path="/modify-a-book"
          element={<ModifyBooks />}
        />
        <Route
          exact
          path="/search"
          element={(
            <SearchBook
              bookList={bookList}
              updateSingleBook={handleSelectionOne}
            />
          )}
        />
        {bookList.map((book) => (
          <Route
            key={book.bookId}
            exact
            path={`/show/${book.bookId}`}
            element={<OneBook book={book} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
