import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSignupClicked: false,
            number: "",
            error: ""

        }
    }

    handleChange = (event) => {
        if (isNaN(event.target.value)) {
            this.setState({
                error: "Please Enter Valid Number",
            })
        } else {
            this.setState({
                number: event.target.value,
                error: ""
            })
        }
    }

    render() {
        return (
            <div className='main-container d-flex align-items-center justify-content-center'>
                <div className='signup-container d-flex flex-column align-items-center'>
                    <h1>LOGIN/SIGN UP</h1>
                    <h2>OR</h2>
                    <div className='terms-conditions'>
                        <form>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="floating-label-group m-4">
                                        <label htmlFor='phone-number'>Mobile Number (10-digit)</label>
                                        <input type="tel" id="phone-number" className="no-outline" pattern="[0-9]{10}" maxLength={10} onChange={(event) => {
                                            this.handleChange(event);
                                        }} />
                                        <small>{this.state.error}</small>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className='d-flex flex-column align-items-center'>
                            <button type="button" className="btn btn-lg btn-block">Signup Using OTP</button>
                            <p>By continuing, I accept TCP-bigbasket's <span>Terms and Conditions</span> and <span>Privacy Policy.</span></p>
                        </div>
                    </div>
                </div>

                <div className='side-container'>
                    <div className='cross-mark'>
                        <button><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className='main-side-container'>
                        <div className='m-5'>
                            <h3><i className="fa-solid fa-bottle-droplet"></i></h3>
                            <h3><i className="fa-solid fa-rotate-right"></i></h3>
                        </div>
                        <div className='side-container-button'>
                            <h4>Shopping at fingertips!! Download our app</h4>
                            <div className='d-flex download-btn' >
                                <button type="button" className="btn btn-outline-secondary m-2"><i className="fa-solid fa-play"> Google</i></button>
                                <button type="button" className="btn btn-outline-secondary m-2"><i className="fa-brands fa-apple"></i> Apple Store</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;