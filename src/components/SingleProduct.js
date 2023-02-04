import React, { Component } from 'react';
import "./SingleProduct.css"

class SingleProduct extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAddButtonClicked: false,
            valueErrorMessage: "",
        }
    }

    handleSingleProductValue = (event) => {
        if(Number(event.target.value) < 6) {
            this.setState({
                valueErrorMessage: ""
            })
        } else if (Number(event.target.value > 5)){
            this.setState ({
                valueErrorMessage: "Please enter quantity less than 6",
            })
        }else{
            this.setState({
                valueErrorMessage: "Invalid quantity",
            })
        }
    }


    render() {
        return (
            <div className="container bg-gray">
                <div className="row justify-content-between mt-5">
                    <div className="col d-none d-md-block"></div>

                    <div className="col-md px-5 d-flex single-product-container">
                        <img className="img-thumbnail" src={this.props.product.image} alt="product"></img>
                    </div>

                    <div className="col-12 col-md">
                        <p className="product-category m-0">{this.props.product.brand}</p>
                        <p className="mb-0">
                            {this.props.product.brand} {this.props.product.name}: {this.props.product.price[0].quantity} Kg
                        </p>
                        <p className="m-0">Price: ₹ {this.props.product.price[0].price}</p>
                        <p className="fs-10px">(inclusive of all taxes)</p>
                        <div className='d-flex'>
                            <input className="single-product-input " defaultValue="1" onChange={(event) => {
                                this.handleSingleProductValue(event);
                                this.props.handleChangeQuantity(event)}} />
                            <button className="add-cart-button" onClick={() => {
                                this.props.handleAddClick(this.props.product);
                            }}>ADD TO BASKET</button>
                        </div>
                        <div className='price-error-single'>
                            <p>{this.state.valueErrorMessage}</p>
                        </div>
                        <div>
                            <i className="bike-svg"></i>
                            <span className="fs-12px"> Get it in 12 hrs</span>
                        </div>
                        <div>
                            <p className="m-0">Pack Sizes</p>
                            <div className="">
                                <div className="border w-md-75 w-100 p-2 rounded">
                                    {this.props.product.price.map((price) => {
                                        return (
                                            <div
                                                className="border mb-2 rounded d-flex justify-content-between align-items-center"
                                                key={price.quantity}
                                                role="button"
                                            >
                                                <span className="px-2 py-1">{price.quantity} Kg</span>
                                                <span>₹{price.price}</span>
                                                <div className="align-self-stretch px-1">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="12"
                                                        className="PackSizeSelector___StyledTickIcon-sc-l9rhbt-7 fqSAyv"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="m15.905.2-.092-.091a.322.322 0 0 0-.457.002L4.647 10.908a.162.162 0 0 1-.232-.003L.653 6.908a.323.323 0 0 0-.457-.014l-.094.089a.325.325 0 0 0-.014.457l4.182 4.444a.323.323 0 0 0 .465.006L15.907.657A.325.325 0 0 0 15.905.2"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3 mt-md-0">
                    <h5>
                        {this.props.product.brand} {this.props.product.name}
                    </h5>
                    <div className="border-bottom mt-2">
                        <p className='h5'>About the Product</p>
                        <div className="fs-12px mb-3">
                            <ul className="mb-0 p-0">
                                <li>
                                    Onions are known to be rich in biotin. Most of the flavonoids which are known as anti-oxidants are concentrated more in the outer
                                    layers, so when you peel off the layers, you should remove as little as possible.
                                </li>
                                <li>
                                    Onion can fill your kitchen with a thick spicy aroma. It is a common base vegetable in most Indian dishes, thanks to the wonderful
                                    flavor that it adds to any dish.
                                </li>
                            </ul>
                            <br /> Product image shown is for representation purpose only, the actually product may vary based on season, produce &amp;
                            availability.
                            <br /> Click here for delicious vegetable recipes -
                            <strong>
                                <a className="text-break" href="https://www.bigbasket.com/flavors/collections/227/fresh-vegetables/">
                                    https://www.bigbasket.com/flavors/collections/227/fresh-vegetables/
                                </a>
                            </strong>
                        </div>
                    </div>
                    <div className="border-bottom mt-3">
                        <p className='h5'>Benefits</p>
                        <ul className="fs-12px p-0">
                            <li> If a piece of onion is inhaled, it can slow down or stop nose bleeding.</li>{" "}
                            <li>Those who have sleeping disorders or insomnia can have a good night sleep if they have an onion every day.</li>{" "}
                            <li>Onions are known to have antiseptic, antimicrobial and antibiotic properties which help you to get rid of infections.</li>{" "}
                            <li>
                                Onions are high in sulphur, vitamin B6 and B9. It has high quantities of water and naturally low in fat. It is high in phytochemical
                                compounds.
                            </li>
                            <li>
                                Onions are known to contain manganese, copper, Vitamin B6, Vitamin C, Folic acid, Amino acid and dietary fibers along with
                                phosphorus, folate and copper.
                            </li>
                        </ul>
                    </div>
                    <div className="border-bottom mt-2">
                        <p className='h5'>Storage and Uses</p>
                        <ul className="fs-12px p-0">
                            <li>Store in a cool dry place, need not refridgerate.</li>
                            <li>
                                Freezing onions, soaking them under water and keeping the root intact before chopping are some methods to reduce tears while
                                chopping them.
                            </li>
                            <li> It is a versatile vegetable that can be used raw, sauteed, caramelized, roasted, deep fried, pureed or boiled as required.</li>
                            <li> It lends itself very well to almost any cuisine.It can be consumed with salads, curries or chutnies.</li>
                        </ul>
                    </div>
                    <div className="border-bottom mt-2">
                        <p className='h5'>Other Product Info</p>
                        <div className="product-info">
                            EAN Code: 10000150 <br /> Country of origin: India <br /> Sourced &amp; Marketed by: Supermarket Grocery Supplies Pvt. Ltd, No. 7,
                            Service Road, Off 100 Feet Road Indiranagar Landmark: Above HDFC Bank Bangalore, Karnataka 560071 <br /> Best before 3 days from
                            delivery date <br /> For Queries/Feedback/Complaints, Contact our Customer Care Executive at: Phone: 1860 123 1000 | Address:
                            Supermarket Grocery Supplies Pvt Ltd. No7, Service Road, Domlur 100 Feet Road, Indiranagar, Bangalore 560071. | Email:
                            customerservice@bigbasket.com
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default SingleProduct;