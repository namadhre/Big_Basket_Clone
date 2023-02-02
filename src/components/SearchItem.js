import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchItem extends Component {
    render() {
        return this.props.items.map((product) => (

            <div className="col-sm-3 item-container" key={product.id}>
                <Link to={`/${product.id}`}>
                    <img className='img-thumbnail' src={product.image} />
                    <p>{product.brand}</p>
                    <h1>{product.name}</h1>
                </Link>
                <div className="d-flex flex-column mb-5 dropdown-wrapper">
                    <select className="select form-control-lg drop-down price-container">
                        {product.price.map((itemPrice, index) => {
                            return <option className="option-container" value={index + 1} key={itemPrice.quantity}>{`${itemPrice.quantity} kg - ₹ ${itemPrice.price}`}</option>
                        })}
                    </select>
                </div>
            </div>

        ));
    }
}

export default SearchItem;