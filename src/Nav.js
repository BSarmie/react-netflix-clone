import React, { useState, useEffect } from 'react';
import './Nav.css';
import NetflixLogo from './images/netflix-logo.png';
import NetflixAvatar from './images/netflix-avatar.png';

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className="nav__contents">
            <img className='nav__logo' src={NetflixLogo} alt="" />
            <img className='nav__avatar' src={NetflixAvatar} alt="" />
        </div>
    </div>
  );
}

export default Nav;