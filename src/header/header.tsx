import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export const Header: FunctionComponent = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">
            <strong>STACEY</strong> GENNOY
          </Link>
        </div>

        <div className="collapse navbar-collapse navbar-right navbar-ex1-collapse">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/work">Work</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
