import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav() {
  return (
    <nav className="mb-1 navbar navbar-expand-sm navbar-dark red lighten-1">
      <a className="navbar-brand" href="/"><strong>MDlogo</strong></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu"
        aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="menu">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Zestawienie <span className="sr-only">(current)</span></Link>
            
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/income">Dochody</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/expenses">Wydatki</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}