import React from 'react';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/">
          <h1>Outdoor</h1>
        </Link>
        <ul>
          <li>
            <Link to="/dam">Dam</Link>
          </li>
          <li>
            <Link to="/herr">Herr</Link>
          </li>
          <li>
            <Link to="/utrustning">Utrustning</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
