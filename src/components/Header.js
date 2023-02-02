import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bblogo from "../images/bb_logo.png";
import Signup from './Signup';
import "./Header.css";

class Header extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <header className='d-flex justify-content-center'>
                <div className='navbar-container-1'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to='/'>
                            <img className='navbar-brand' src={bblogo} alt="Big Basket" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item dropdown">
                                    <button className="nav-link dropdown-toggle category-button" href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        SHOP BY CATEGORY
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to="/fruits">
                                            <p className="dropdown-item">Fruits</p>
                                        </Link>
                                        <Link to="/vegetables">
                                            <p className="dropdown-item">Vegetables</p>
                                        </Link>
                                        <Link to="/pluses">
                                            <p className="dropdown-item">Pluses</p>
                                        </Link>
                                        <Link to="/cut-sprouts">
                                            <p className="dropdown-item">Cuts Sprouts</p>
                                        </Link>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </nav>
                    <div className='searchbar-container'>
                        <div className='searchbar-input-container'>
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </div>
                        <div className='search-button'>
                            <button type="submit"><i className="fa-solid fa-magnifying-glass p-2"></i></button>
                        </div>
                    </div>
                    <Signup />
                </div>

            </header>
        );
    }
}

export default Header;