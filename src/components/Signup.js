import React, { Component } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';
import img_google from "../google.svg";
import img_apple from "../apple.svg";
import './Signup.css';
import addData from '../redux/actions/addData';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSignupClicked: false,
            number: "",
            errorMessage: "",
            valid: "",
            isDisabled: "disabled",
            nextStep: false,
            successMessage: "",
            firstName: "",
            secondName: "",
            email: "",
            firstNameError: "",
            secondNameError: "",
            emailError: ""
        }
    }

    handleChangeNumber = (event) => {
        if (!isNaN(event.target.value) && event.target.value.length === 10) {
            this.setState({
                isDisabled: "",
            });
        } else {
            this.setState({
                isDisabled: "disabled",
            })
        }

        if (isNaN(event.target.value)) {
            this.setState({
                errorMessage: "Please Enter Valid Number",
                valid: "error",
            })
        } else {
            this.setState({
                number: event.target.value,
                errorMessage: "",
                valid: "success",
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (!isNaN(this.state.number) && this.state.number.length === 10) {
            this.setState({
                valid: "success",
                isDisabled: "",
                nextStep: true,
            })
        } else {
            this.setState({
                errorMessage: "Please Enter Valid Number",
                valid: "error",
                isDisabled: "disabled"
            });
        }
    }

    handleChangeFname = (event) => {
        if (!validator.isAlpha(event.target.value.trim())) {
            this.setState({
                firstNameError: "Please Enter Valid Name",
            });
        } else {
            this.setState({
                firstName: event.target.value,
                firstNameError: "",
            });
        }
    }

    handleChangeLname = (event) => {
        if (!validator.isAlpha(event.target.value.trim())) {
            this.setState({
                secondNameError: "Please Enter Valid Name",
            });
        } else {
            this.setState({
                secondName: event.target.value,
                secondNameError: "",
            });
        }
    }

    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value,
        });
    }

    handleSecondSubmit = (event) => {
        let count = 0
        event.preventDefault();

        if (validator.isEmail(this.state.email)) {
            count++;
        } else {
            this.setState({
                emailError: "Please Enter valid email"
            });
        }

        if (validator.isAlpha(this.state.firstName)) {
            count++;
        } else {
            this.setState({
                firstNameError: "Enter valid name"
            });
        }

        if (validator.isAlpha(this.state.secondName)) {
            count++;
        } else {
            this.setState({
                secondNameError: "Enter valid name"
            });
        }

        if (count === 3) {
            this.setState({
                successMessage: "Account Created successfully",
            }, () => {
                let user = {
                    fName: this.state.firstName,
                    lName: this.state.secondName,
                    email: this.state.email,
                    number: this.state.number,
                };
                this.props.addData({
                    user
                })
            })
        } else {
            this.setState({
                successMessage: "",
            })
        }


    }

    render() {
        return (
            <>
                <button type="button" className="btn btn-primary m-4" data-toggle="modal" data-target="#sign-up">
                    sign up
                </button>

                <div className="modal fade mt-4" id="sign-up" tabIndex="-1" role="dialog" aria-labelledby="sign-up" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content d-flex flex-row">
                            <div className='main-container d-flex align-items-center justify-content-center model-content'>
                                <div className='signup-container d-flex flex-column align-items-center'>

                                    {this.state.nextStep === false &&
                                        <>
                                            <h1>LOGIN/SIGN UP</h1>
                                            <h2>OR</h2>
                                            <div className='terms-conditions'>
                                                <form onSubmit={this.handleSubmit}>
                                                    <div className='d-flex flex-column align-items-center'>
                                                        <div className="row">
                                                            <div className="col-xl-12">
                                                                <div className="floating-label-group m-4 custome-input">
                                                                    <label htmlFor='phone-number'>Mobile Number (10-digit)</label>
                                                                    <input type="text" id="phone-number" className={`no-outline ${this.state.valid}`} autoComplete='off' maxLength={10} onChange={(event) => {
                                                                        this.handleChangeNumber(event);
                                                                    }} />
                                                                    <small>{this.state.errorMessage}</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='bottom-container'>
                                                        <div className='disabled-button-container'>
                                                            <button type="submit" value="submit" className={`btn btn-lg btn-block ${this.state.isDisabled} `}>Signup Using OTP</button>
                                                        </div>
                                                        <p className='text-center mt-2'>By continuing, I accept TCP-bigbasket's <span>Terms and Conditions</span> and <span>Privacy Policy.</span></p>
                                                    </div>
                                                </form>
                                            </div>
                                        </>
                                    }
                                    {this.state.nextStep === true &&
                                        <>
                                            <h1>Almost there </h1>
                                            <p className='p'>Help us to know you better!</p>
                                            <form onSubmit={this.handleSecondSubmit}>
                                                <div className='name-container d-flex'>
                                                    <div className='fullname-container ms-3'>
                                                        <label htmlFor='fname'>First Name</label>
                                                        <input type="text" id="fname" className="no-outline" autoComplete='off' onChange={(event) => {
                                                            this.handleChangeFname(event);
                                                        }} />
                                                        <small>{this.state.firstNameError}</small>
                                                    </div>
                                                    <div className='fullname-container'>
                                                        <label htmlFor='lname'>Last Name</label>
                                                        <input type="text" id="lname" className="no-outline" autoComplete='off' onChange={(event) => {
                                                            this.handleChangeLname(event);
                                                        }} />
                                                        <small>{this.state.secondNameError}</small>
                                                    </div>
                                                </div>
                                                <div className='fullname-container-2 ms-3'>
                                                    <label htmlFor='email'>Email</label>
                                                    <input type="email" id="email" className="no-outline" onChange={(event) => {
                                                        this.handleChangeEmail(event);
                                                    }} />
                                                    <small>{this.state.emailError}</small>

                                                </div>
                                                <div className='continue-container'>
                                                    <button type="submit" value="submit" className="btn btn-block">Start Shopping</button>
                                                </div>
                                            </form>
                                        </>
                                    }
                                </div>
                                <div className='side-container'>
                                    <div className='cross-mark'>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <i className="fa-solid fa-xmark"></i>
                                        </button>
                                    </div>
                                    <div className='main-side-container'>
                                        <div className='m-5'>
                                            <a href='https://www.bigbasket.com/t1/?nc=b-cp-hp-sec2&b_t=cp_hp_sec2&b_camp=about-bigbasket&t_from_ban=200096&t_pos=1&t_ch=desktop' target='_blank'><h3><i className="fa-solid fa-bottle-droplet"></i></h3></a>
                                            <a href='https://www.bigbasket.com/t1/?nc=b-cp-hp-sec2&b_t=cp_hp_sec2&b_camp=about-bigbasket&t_from_ban=200096&t_pos=1&t_ch=desktop' target='_blank'><h3><i className="fa-solid fa-rotate-right"></i></h3></a>
                                        </div>
                                        <div className='side-container-button'>
                                            <h4>Shopping at fingertips!! Download our app</h4>
                                            <div className='d-flex download-btn' >
                                                <a href='https://play.google.com/store/apps/details?id=com.bigbasket.mobileapp' target='_blank'><button type="button" className="btn btn-outline-secondary m-2"><img src={img_google} alt="Googole" /></button></a>
                                                <a href='https://apps.apple.com/in/app/bigbasket-com/id660683603?ign-mpt=uo%3D4' target='_blank'><button type="button" className="btn btn-outline-secondary m-2"><img src={img_apple} alt="Apple" /> Apple Store</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

//Update the state in store

const mapDispatchToProps = (dispatch) => {

    return {
        addData: (payload) => {
            return dispatch(addData(payload));
        }
    }
}

export default connect(null, mapDispatchToProps)(Signup);