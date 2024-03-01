import React, { useState } from 'react';
import BookList from './BookList';

const SearchForm = (props) => {
    const { bookList = [], updateSingleBook, onSubmit } = props;

    const [inputText, setInputText] = useState("");
    const [filteredBookList, setFilteredBookList] = useState([]);

    const handleChangeInput = (event) => {
        const searchTerm = event.target.value;
        setInputText(searchTerm);

        const filteredBooks = bookList.filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBookList(filteredBooks);
        onSubmit(filteredBooks);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(inputText);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <form onSubmit={handleFormSubmit}>
                <div className='form-group' style={{ color: 'black', width: '50rem', marginTop: '10px', marginLeft: '10px'}}>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Search for a book ...'
                        onChange={handleChangeInput}
                        style={{
                        }}
                    />
                </div>
            </form>
            <BookList bookList={filteredBookList.length > 0 ? filteredBookList : bookList} onClick={updateSingleBook} />
        </div>
    );
};

export default SearchForm;
