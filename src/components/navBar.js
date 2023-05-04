import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/" className="logo">Math Magicians</Link>
      <div className="flex">
        <Link to="/" exact className="nl">
          Home |
        </Link>
        <Link to="/calculator" exact className="nl">
          Calculator |
        </Link>
        <Link to="/quote" exact className="nl">
          Quote
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
