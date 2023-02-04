import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import bblogo from "../images/bb_logo.png";
import Signup from './Signup';
import "./Header.css";



class Header extends Component {

    handleClick = (event) => {
        event.preventDefault();
    }

    render() {
        let cartSize;
        if (this.props.cartItems.length > 0 && this.props.cartItems[0]) {

            let reducedCartDetails = this.props.cartItems.reduce((accumulator, item) => {
                if (accumulator.hasOwnProperty(item.id)) {
                    accumulator[item.id] += Number(item.quantity);
                } else {
                    accumulator[item.id] = Number(item.quantity);
                }
                return accumulator;
            }, {});

            let reducedCartItems = Object.entries(reducedCartDetails).map((detail) => {
                let productInfo = this.props.items.find((item) => {
                    return item.id == detail[0];
                });
                return [productInfo, detail[1]];
            },);

            cartSize = reducedCartItems.length;
        } else {
            cartSize = 0;
        }

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
                    <div>
                        <form className='searchbar-container'>
                            <div className='searchbar-input-container'>
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                                    onChange={(event) => this.props.handleChangeValue(event)} />
                            </div>
                            <div className='search-button'>
                                <button onClick={this.handleClick}><i className="fa-solid fa-magnifying-glass p-2"></i></button>
                            </div>
                        </form>
                    </div>
                    <div className='cart-container'>
                        <Signup />
                        <div>
                            <Link to="/cart">
                                <button className='mt-4 cart-button'>
                                    <span><i className="fa-solid fa-basket-shopping h4"></i> </span>
                                    My Basket {`${cartSize} items`}
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </header>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItemsData.cartItems,
        items: state.itemsData.items
    }
}


export default connect(mapStateToProps)(Header);