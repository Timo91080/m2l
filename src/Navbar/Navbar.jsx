import React from 'react';
import { useHistory } from 'react-router-dom';
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';




const Navbar = () => {
  

  

  return (
    <div>
      <nav className="Navbar" id="navbar">
        <h1 className='navbar-logo'>
          M2L.
        </h1>
        <ul className='stylenav'>

         
          <li> 

          <Link to="/">
            Accueil {/* Correction du mot Accueil */}
            </Link>
          </li>
          <li>
            <Link to="/formation">
            Formations
            </Link>
          </li>
          <li>
          <Link to="/seconnecter">
            Se connecter
            </Link>
          </li>
          
          <li>
          <Link to="/register">
            S'enregistrer
            </Link>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
