import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <div className="jumbotron text-center">
        <h1>Welcome to Read-A-Lot</h1>
        <p>Explore various books and authors</p>
        <form>
          <div className="input-group">
            <input type="email" className="form-control" size="50" placeholder="Email Address" required />
            <div className="input-group-btn">
              <button type="button" className="btn btn-danger">Subscribe</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
