import React, { Component } from 'react';
import appleStoreLogo from "../images/Apple-App-store-icon.png";
import googleStoreLogo from "../images/Google-App-store-icon.webp";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <>
                <div className='footer-container-wrapper'>
                    <div className='d-flex justify-content-around footer-container'>
                        <div className='divider-container'>
                            <div>
                                <h1>bigbasket</h1>
                                <p>About Us</p>
                                <p>In News</p>
                                <p>Green bigbasket</p>
                                <p>Privacy Policy</p>
                                <p>Affiliate</p>
                                <p>Terms and Conditions</p>
                                <p>Careers At bigbasket</p>
                                <p>bb Instant</p>
                                <p>bb Blog</p>
                                <p>bbnow</p>
                            </div>
                            <div>
                                <h1>Help</h1>
                                <p>FAQs</p>
                                <p>Contact Us</p>
                                <p>bb Wallet FAQs</p>
                                <p>bb Wallet T&Cs</p>
                                <p> Vendor Connect</p>
                            </div>
                        </div>
                        <div className='divider-container'>
                            <div className='store-button'>
                                <h1>Download Our App</h1>
                                <button className='mb-3'>
                                    <img src={appleStoreLogo} />
                                </button>
                                <button>
                                    <img src={googleStoreLogo} />
                                </button>
                            </div>
                            <div>
                                <h1>
                                    Get Social With Us
                                </h1>
                                <p>
                                    <i className=" h1 fa-brands fa-facebook"></i>
                                    <i className="h1 fa-brands fa-pinterest ms-3"></i>
                                    <i className="h1 fa-brands fa-twitter ms-3"></i>
                                    <i className="h1 fa-brands fa-instagram ms-3"></i>
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='d-flex flex-column align-items-center mt-2'>
                    <div className='footer-container-2'>
                        <h1 className='m-1'>POPULAR CATEGORIES: </h1>
                        <p>Sunflower Oils, Wheat Atta, Ghee, Milk, Health Drinks, Flakes, Organic F&V, Namkeen, Eggs, Floor Cleaners, Other Juices, Leafy Vegetables, Frozen Veg Food, Diapers & Wipes, </p>
                    </div>
                    <div className='footer-container-2'>
                        <h1 className='m-1'>POPULAR BRANDS: </h1>
                        <p>    Amul, Nescafe , MTR, RED BULL , elite cake, Pediasure, Yummiez, Yera, Yakult, Britannia, Wow Momo, Fortune , Haldirams , Ferrero, Lays, Patanjali, McCain, kwality walls, Cadbury Dairy Milk, Pedigree,  </p>
                    </div>
                    <div className='footer-container-2'>
                        <h1 className='m-1'>CITIES WE SERVE: </h1>
                        <p>Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Mysore, Madurai, Coimbatore, Vijayawada-Guntur, Kolkata, Ahmedabad-Gandhinagar, Nashik Business, Lucknow-Kanpur, Gurgaon, Vadodara, Visakhapatnam, Surat, Nagpur, Patna, Indore, Chandigarh Tricity, Jaipur, Bhopal, Noida-Ghaziabad, Kochi, Krishna District, Bhubaneshwar-Cuttack, Guwahati, Renigunta, Hubli, Davanagere, Trichy, Amravati, Raipur, Rajkot, Gwalior, Bareilly, Allahabad, Hyderabad Rural, Bangalore Rural, Chennai Rural, Vizag Rural, Lucknow Rural, Noida Rural, Ahmedabad Rural, Bhopal Rural, Bhubaneswar Rural, Coimbatore Rural, Chandigarh Rural, Gurugram Rural, Guwahati Rural, Indore Rural, Kochi Rural, Kolkata Rural, Mumbai Rural, Mysore Rural, Nagpur Rural, Patna Rural, Pune Rural, Surat Rural, Vadodara Rural, Jaipur Rural, Ranchi, Nashik, Agra, Kozhikode, </p>
                    </div>
                    <div className='footer-container-2'>
                        <h1 className='m-1'>POPULAR CATEGORIES: </h1>
                        <p>Sunflower Oils, Wheat Atta, Ghee, Milk, Health Drinks, Flakes, Organic F&V, Namkeen, Eggs, Floor Cleaners, Other Juices, Leafy Vegetables, Frozen Veg Food, Diapers & Wipes, </p>
                    </div>
                    <div className='footer-container-2'>
                        <h1 className='m-1'>PAYMENT OPTIONS: </h1>
                        <p>
                            <span>CASH ON DELIVERY</span>
                            <i className="h1 fa-brands fa-cc-visa ms-3"></i>
                            <i className="h1 fa-brands fa-cc-mastercard ms-3"></i>
                            <i className="h1 fa-brands fa-cc-amex ms-3"></i>
                        </p>
                    </div>
                </div>
                <div className='last-container'>
                    <small className='p-3'>Copyright © 2022-2024 Supermarket Grocery Supplies Pvt Ltd</small>
                </div>
            </>
        );
    }
}

export default Footer;