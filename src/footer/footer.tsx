import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export const Footer: FunctionComponent = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="list-inline">
              <li>
                <Link to="/">Home</Link>
              </li>
              .
              <li>
                <Link to="/work">Work</Link>
              </li>
              .
              <li>
                <Link to="/about">About</Link>
              </li>
              .
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              .
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
