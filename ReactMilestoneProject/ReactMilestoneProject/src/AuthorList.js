import React from 'react';
import AuthorCard from './AuthorCard';
import BookImage from './Author.jpg';

const AuthorList = ({ authorList, onClick }) => {
  const authors = authorList.map((author) => (
    <AuthorCard
      key={author.authorId}
      authorId={author.authorId}
      name={author.name}
      imgURL={BookImage}
      onClick={() => onClick(author.authorId)}
    />
  ));

  return <div className='container'>{authors}</div>;
};

export default AuthorList;
