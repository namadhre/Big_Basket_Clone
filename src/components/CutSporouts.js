import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CutSporouts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            price: "",
            quantityError: "",
        }
    }

    handleChangePrice = (event) => {
        this.setState({
            price: event.target.value,
        })
    }
    
    render() {
        return this.props.items.filter((item) => {
            return item.type === "cuts-sprouts";
        })
            .map((product) => (

                <div className="col-sm-3 item-container" key={product.id}>
                <Link to={`/${product.id}`}>
                    <img className='img-thumbnail' src={product.image} alt={product.name} />
                    <p>{product.brand}</p>
                    <h1>{product.name}</h1>
                </Link>
                <div className="d-flex flex-column mb-5 dropdown-wrapper">
                    <select className="select form-control-lg drop-down price-container">
                        {product.price.map((itemPrice) => {
                            return <option className="option-container" value={`₹ ${itemPrice.price}`} key={itemPrice.quantity} onClick={(event) => {
                                this.handleChangePrice(event)
                            }}>
                                {`${itemPrice.quantity} kg - ₹ ${itemPrice.price}`}
                            </option>
                        })}
                    </select>
                    <div className='price-container-p'>
                        {this.state.price === "" ?
                            <p>{`Rs: ${product.price[0].price}`}</p>
                            :
                            <p>{`Rs: ${this.state.price}`}</p>
                        }
                    </div>
                    <div className='mt-2 product-bottom'>
                        <div className='addto-cart-quantity'>
                            Qty
                        </div>
                        <input className='addto-cart-input p-2' defaultValue="1" onChange={(event) => {
                            this.props.handleChangeQuantity(event);
                            if(Number(event.target.value) < 6) {
                                this.setState({
                                    quantityError: ""
                                })
                            } else if (Number(event.target.value > 5)){
                                this.setState ({
                                    quantityError: "Please enter quantity less than 6",
                                })
                            }else{
                                this.setState({
                                    quantityError: "Invalid quantity",
                                })
                            }
                        }} />
                        <button className='btn btn-warning addto-cart-button' onClick={() => {
                            this.props.handleAddClick(product)
                        }
                        }> ADD <i className="fa-solid fa-basket-shopping"></i> </button>
                        <p>{this.state.quantityError}</p>
                    </div>

                </div>
            </div>

            ));
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.itemsData.items
    }
}

export default connect(mapStateToProps)(CutSporouts);