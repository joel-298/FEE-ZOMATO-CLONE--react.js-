import React, { useState } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = ({ active_class }) => {
  const [auto_scroll, setMenu] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleClick = (menuItem) => {
    if (menuItem === 'Home') {
      setMenu(menuItem);
      active_class('child1');
    } else if (menuItem === 'Menu') {
      setMenu(menuItem);
    } else if (menuItem === 'Contact-us') {
      setMenu(menuItem);
    } else if (menuItem === 'Cart') {
      active_class('child2');
    }
    setMenuOpen(false); // Close menu after click
  };

  return (
    <div className='Navigation'>
      <Link to='/' className='Link' onClick={() => handleClick('Home')}>
        <h1 className='container-h1'>FOODIES</h1>
      </Link>
      <div className={`menu-and-search ${searchOpen ? 'show-search' : ''}`}>
        <ul className={`ul ${menuOpen ? 'show' : ''}`}>
          <li>
            <Link to='/' onClick={() => handleClick("Home")} className={auto_scroll === "Home" ? "active" : ""}>Home</Link>
          </li>
          <li>
            <a href='#smart-scroll-menu' onClick={() => handleClick("Menu")} className={auto_scroll === "Menu" ? "active" : ""}>Menu</a>
          </li>
          <li>
            <a href='#footer' onClick={() => handleClick("Contact-us")} className={auto_scroll === "Contact-us" ? "active" : ""}>Contact-us</a>
          </li>
          <li className="cart-menu-item">
            <Link to='/cart' onClick={() => handleClick('Cart')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket3-fill" viewBox="0 0 16 16">
                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"/>
              </svg>
            </Link>
          </li>
        </ul>

        <div className='searchbar'>
          <input type="text" className={`input ${searchOpen ? 'show' : ''}`} placeholder="Search" />
          <button className="search-button" onClick={toggleSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search search-icon" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="cart-and-toggle">
        <button className="menu-toggle" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12.5A.5.5 0 0 1 3 12h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-5A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-5A.5.5 0 0 1 3 2h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
