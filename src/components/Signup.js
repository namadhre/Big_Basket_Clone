import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSignupClicked: false,
            number: "",
            error: "",
            errorCOlor: "",
            successColor: "",
            successMessage: "",
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

    handleSubmit = (event) => {
        event.preventDefault();

        if (!isNaN(this.state.number) && this.state.number.length === 10) {
            this.setState({
                successMessage: "OTP has been sent",
            })
        }else{
            this.setState({
                successMessage: "",
            });
        }
    }

    render() {
        return (
            <>
                <div className='main-container d-flex align-items-center justify-content-center'>
                    <div className='signup-container d-flex flex-column align-items-center'>
                        <h1>LOGIN/SIGN UP</h1>
                        <h2>OR</h2>
                        <div className='terms-conditions'>
                            <form onSubmit={this.handleSubmit}>
                                <div className='d-flex flex-column align-items-center'>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="floating-label-group m-4">
                                                <label htmlFor='phone-number'>Mobile Number (10-digit)</label>
                                                <input type="text" id="phone-number" className="no-outline" maxLength={10} onChange={(event) => {
                                                    this.handleChange(event);
                                                }} />
                                                <small>{this.state.error}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='bottom-container'>
                                    <button type="submit" value="submit" className="btn btn-lg btn-block">Signup Using OTP</button>
                                    <p>By continuing, I accept TCP-bigbasket's <span>Terms and Conditions</span> and <span>Privacy Policy.</span></p>
                                    <h1>{this.state.successMessage}</h1>
                                </div>
                            </form>
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
                                    <a href='https://play.google.com/store/apps/details?id=com.bigbasket.mobileapp' target='_blank'><button type="button" className="btn btn-outline-secondary m-2"><i className="fa-solid fa-play"> Google</i></button></a>
                                    <a href='https://apps.apple.com/in/app/bigbasket-com/id660683603?ign-mpt=uo%3D4' target='_blank'><button type="button" className="btn btn-outline-secondary m-2"><i className="fa-brands fa-apple"></i> Apple Store</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </>

        );
    }
}

export default Signup;