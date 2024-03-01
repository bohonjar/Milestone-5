import React, { useState, useEffect } from 'react';
import dataSource from './dataSource';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NewBook.css';

const EditBook = () => {
  const [selectedBookId, setSelectedBookId] = useState('');
  const [bookData, setBookData] = useState({
    title: '',
    publicationYear: '',
    genre: '',
    image: '',
  });
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await dataSource.get('/books');
      setBookList(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    if (selectedBookId) {
      fetchBookDetails(selectedBookId);
    }
  }, [selectedBookId]);

  const fetchBookDetails = async (bookId) => {
    try {
      const response = await dataSource.get(`/books/${bookId}`);
      const bookDetails = response.data;
      setBookData(bookDetails);
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleSelectChange = (event) => {
    setSelectedBookId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dataSource.put(`/books/${selectedBookId}`, bookData);
      alert('Book updated successfully!');
      fetchBooks();
    } catch (error) {
      console.error('Error updating book:', error);
      alert('Failed to update book. Please try again.');
    }
  };  

  const handleDelete = async () => {
    try {
      await dataSource.delete(`/books/${selectedBookId}`);
      alert('Book deleted successfully!');
      setSelectedBookId('');
      setBookData({
        title: '',
        publicationYear: '',
        genre: '',
        image: '',
      });
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
      alert('Failed to delete book. Please try again.');
    }
  };

  return (
    <div className="container manage">
      <div className="row">
        <div className="col-md-3 manage-left">
          <img src="/images/icon.png" alt="" />
          <h3>Modify books using the form provided</h3>
        </div>
        <div className="col-md-9 manage-right">
          <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="home-tab" data-toggle="tab" href="/create-a-book" role="tab" aria-controls="home" aria-selected="true">Create</a>
            </li>
          </ul>

          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <h3 className="manage-heading" style={{ fontWeight: 'bold', color: 'black' }}>- Creativity -</h3>
              <form id="editBookForm" onSubmit={handleSubmit}>
                <div className="row manage-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <select
                        className="form-control"
                        value={selectedBookId}
                        onChange={handleSelectChange}
                      >
                        <option value="">Select a book to edit</option>
                        {bookList.map((book) => (
                          <option key={book.bookId} value={book.bookId}>
                            {book.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <input type="text" id="title" name="title" placeholder="Title *" required className="form-control" value={bookData.title} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <input type="text" id="publicationYear" name="publicationYear" placeholder="Publication Year *" required className="form-control" value={bookData.publicationYear} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" id="genre" name="genre" placeholder="Genre *" required className="form-control" value={bookData.genre} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <input type="text" id="image" name="image" placeholder="Image URL" className="form-control" value={bookData.image} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <button type="submit" id="editBookButton" className="btnActionEdit">Save Changes</button>
                      <button type="button" onClick={handleDelete} className="btnActionEdit">Delete</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBook;