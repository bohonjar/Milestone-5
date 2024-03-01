import React from 'react';

const placeholderImageURL = 'https://via.placeholder.com/150';

const AuthorCard = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
           <img src={props.imgURL || placeholderImageURL} className="card-img-top" alt="Placeholder" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">
                    <strong>Author ID:</strong> {props.authorId}
                </p>
            </div>
        </div>
    );
};

export default AuthorCard;
