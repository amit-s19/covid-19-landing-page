import React, { useState, useEffect, useContext } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import tabContext from './TabContext';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const { tab } = useContext(tabContext);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {

        showButton();
        window.addEventListener('resize', showButton);
        return window.removeEventListener('resize', showButton)
    }, []);


    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className='navbar'>
                    <div className='navbar-container container'>
                        <div className='navbar-logo'>
                            <img src="images/covIcon.png" style={{ maxWidth: 50 }} /> &nbsp;&nbsp;
                            COVID-19
                        </div>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes style={{ color: '#035755' }} /> : <FaBars style={{ color: '#035755' }} />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <HashLink
                                    smooth
                                    to='/#overview-page'
                                    className={tab === 'overview' ? 'nav-links selected' : 'nav-links'}
                                    onClick={closeMobileMenu}>
                                    Overview
                                </HashLink>
                                {tab === 'overview' ? <p>.</p> : null}
                            </li>
                            <li className='nav-item'>
                                <HashLink
                                    smooth
                                    to='/#contagion-page'
                                    className={tab === 'contagion' ? 'nav-links selected' : 'nav-links'}
                                    onClick={closeMobileMenu}
                                >
                                    Contagion
                                </HashLink>
                                {tab === 'contagion' ? <p>.</p> : null}
                            </li>
                            <li className='nav-item'>
                                <HashLink
                                    smooth
                                    to='/#symptoms-page'
                                    className={tab === 'symptoms' ? 'nav-links selected' : 'nav-links'}
                                    onClick={closeMobileMenu}
                                >
                                    Symptoms
                                </HashLink>
                                {tab === 'symptoms' ? <p>.</p> : null}

                            </li>
                            <li className='nav-item'>
                                <HashLink
                                    smooth
                                    to='/#prevention-page'
                                    className={tab === 'prevention' ? 'nav-links selected' : 'nav-links'}
                                    onClick={closeMobileMenu}
                                >
                                    Prevention
                                </HashLink>
                                {tab === 'prevention' ? <p>.</p> : null}

                            </li>
                            <li className='nav-btn'>
                                <btn className="btn-tomato-outline">Contact</btn>
                            </li>
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
