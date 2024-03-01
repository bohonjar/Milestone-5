import React, { useState } from 'react';
import dataSource from './dataSource';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NewBook.css';

const NewBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    publicationYear: '',
    genre: '',
    image: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dataSource.post('/books', formData);
      alert('Book added successfully!');
      setFormData({
        title: '',
        author: '',
        publicationYear: '',
        genre: '',
        image: '',
      });
    } catch (error) {
      console.error('Error adding book:', error);
      alert('Failed to add book. Please try again.');
    }
  };

  return (
    <div className="container manage">
      <div className="row">
        <div className="col-md-3 manage-left">
          <img src="/images/icon.png" alt="" />
          <h3>Add books using the form provided</h3>
        </div>
        <div className="col-md-9 manage-right">
          <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="home-tab" data-toggle="tab" href="/modify-a-book" role="tab" aria-controls="home" aria-selected="true">Modify</a>
            </li>
          </ul>

          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <h3 className="manage-heading" style={{ fontWeight: 'bold', color: 'black' }}>- Creativity -</h3>
              <form id="addBookForm" onSubmit={handleSubmit}>
                <div className="row manage-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" id="title" name="title" placeholder="Title *" required className="form-control" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <input type="text" id="author" name="author" placeholder="Author *" required className="form-control" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <input type="text" id="publicationYear" name="publicationYear" placeholder="Publication Year *" required className="form-control" onChange={handleChange} />
                    </div>
                  </div>
                  <div className="col-md-6">
                  <div className="form-group">
                      <input type="text" id="genre" name="genre" placeholder="Genre *" required className="form-control" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <input type="text" id="image" name="image" placeholder="Image URL" className="form-control" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <button type="submit" id="addBookButton" className="btnActionAdd">Add Book</button>
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

export default NewBook;
