import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import addData from '../redux/actions/addData';
import "./Cart.css";

class Cart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isEmptyBasket: false,
        }


    }

    handleConformationClick = () => {

    }

    render() {

        let totalCost = 0;
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
        totalCost = reducedCartItems.reduce((accumulator, item) => {
            accumulator += (item[0].price[0].price * item[1])
            return accumulator
        }, 0).toFixed(2)
        
        return (
            <>
                {this.props.cartItems.length > 0 ?
                    <div className='d-flex justify-content-center mt-4'>
                        <div className='cart-main-container mb-5'>
                            <h1 className='basket-length'>{`Your Basket ( ${reducedCartItems.length} items)`}</h1>
                            <hr />
                            <div>
                                <div className="container-fluid cart-description">
                                    <div className="row">
                                        <div className="col-6">
                                            <h6 className='m-0'>ITEM DESCRIPTION</h6>
                                        </div>
                                        <div className="col-2">
                                            <h6 className='m-0'>UNIT PRICE</h6>
                                        </div>
                                        <div className="col-2">
                                            <h6 className='m-0'>QUANTITY</h6>
                                        </div>
                                        <div className="col-2">
                                            <h6 className='m-0'>SUBTOTAL</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex cart-fruits-veggies p-2'>
                                    <h1 className='m-0'>Fruits & Vegetables</h1>
                                    <small>{`${reducedCartItems.length} items)`}</small>
                                    <small>{totalCost}</small>
                                </div>

                                {reducedCartItems.map((item) => {
                                    return <>
                                        <div className="container" key={item[0].id}>
                                            <div className="row mt-4">
                                                <div className="col-6 cart-product-details">
                                                    <small>{item[0].brand}</small>
                                                    <p className='h5'>{item[0].name}</p>
                                                </div>
                                                <div className="col-2">
                                                    <p className='h5'>{`Rs. ${item[0].price[0].price}`}</p>
                                                </div>
                                                <div className="col-sm d-flex cart-buttons">
                                                    <button className='cart-button-1'><i className="fa-solid fa-minus"></i></button>
                                                    <div className='cart-quantity-display'>{item[1]}</div>
                                                    <button className='cart-button-2' onClick={() => {
                                                        this.props.handleAddClick(item[0])
                                                    }}><i className="fa-solid fa-plus"></i></button>
                                                </div>
                                                <div className="col-2 d-flex justify-content-around cart-cancel">
                                                    <p>{(item[1]) * item[0].price[0].price}</p>
                                                    <button><i className="fa-solid fa-xmark"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                })}
                                <hr />
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex flex-column justify-content-between'>
                                        <div className='w-100'>
                                            {this.state.isEmptyBasket === false ?
                                                <button className='btn cart-empty-basket' onClick={() => {
                                                    this.setState({
                                                        isEmptyBasket: true,
                                                    })
                                                }}>
                                                    <i className="fa-solid fa-basket-shopping"></i> EMPTY BASKET</button>
                                                :
                                                <div className='cart-conformation d-flex flex-column align-items-center'>
                                                    <h1>Are you sure you want to remove all items from your basket</h1>
                                                    <div className='cart-conformation-button'>
                                                        <button className='cart-ok-button me-4' onClick={() => {
                                                            this.handleConformationClick();
                                                        }}>OK</button>
                                                        <button className='cart-cancel-button' onClick={() => {
                                                            this.setState({
                                                                isEmptyBasket: false,
                                                            })
                                                        }}>
                                                            CANCEL</button>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                        <div className='cart-continue-shopping'>
                                            <Link to="/">
                                                <button className='btn continue-shopping-button'>CONTINUE SHOPPING</button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='cart-side-container'>
                                        <div className='d-flex justify-content-between mt-4'>
                                            <div className='ms-2'>
                                                <p className='h6'>Subtotal</p>
                                                <h6>Delivery Charges <i className="fa-solid fa-question"></i></h6>
                                            </div>
                                            <div className='me-2'>
                                                <h5>{totalCost}</h5>
                                                <p>**</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='d-flex justify-content-between'>
                                            <p className='h2 ms-2'>TOTAL</p>
                                            <p className='h2 me-2'>{totalCost}</p>
                                        </div>
                                        <hr />
                                        <p>** Actual delivery charges computed at checkout time</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div> :

                    <div className='d-flex justify-content-center mt-4'>
                        <div className='cart-main-container mb-5'>
                            <h1 className='basket-length'>There are no items in your basket.</h1>
                            <hr />
                            <div className='cart-continue-shopping'>
                                <Link to="/">
                                    <button className='btn continue-shopping-button'>CONTINUE SHOPPING</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                }
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItemsData.cartItems,
        items: state.itemsData.items
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        addData: (payload) => {
            return dispatch(addData(payload));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

