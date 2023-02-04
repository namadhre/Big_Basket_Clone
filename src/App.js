import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Products from './components/Products';
import Header from './components/Header';
import SingleProduct from './components/SingleProduct';
import Footer from './components/Footer';
import Fruits from './components/Fruits';
import Vegetables from './components/Vegetables';
import Pluses from './components/Pluses';
import CutSporouts from './components/CutSporouts';
import fruitsImg from './images/fruits.jpg';
import vegetablesImg from './images/vegetables.jpg';
import plusesImg from './images/pluses.jpg';
import sproutsImg from './images/sprouts.jpg';
import SearchItem from './components/SearchItem';
import Cart from './components/Cart';
import addData from './redux/actions/addData';
import deleteData from './redux/actions/deteteData';
import updateSingleCartData from './redux/actions/updateSingleCartData'


class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      value: "",
      product: "",
      isItemFound: false,
      price: "",
      quantity: 1,
      cartItems: null,
    }

  }


  handleSearch = (event) => {

    let item = this.props.items.filter((product) => {
      let name = event.target.value.toLowerCase();
      let productName = product.name.toLowerCase();

      return productName.includes(name)
    });
    if (item.length > 0) {
      this.setState({
        value: event.target.value,
        product: item,
        isItemFound: true,
      })
    } else {
      this.setState({
        isItemFound: false,
      })
    }

  }

  handleChangeQuantity = (event) => {

    if (Number(event.target.value)) {
      this.setState({
        quantity: event.target.value,
        quantityError: ""
      })
    } else {
      this.setState({
        quantityError: "Invalid Quantity"
      })
    }
  }

  handleAddClick = (product) => {
    let id = product.id;
    let quantity = this.state.quantity;
    if (quantity < 6) {
      this.props.addData({
        quantity,
        id
      });
    }
    this.setState({
      quantity: 1,
    })
  }

  handleDeleteByOneClick = (id, quantityDec) => {
    if (quantityDec > 1) {
      let quantity = -1;
      this.props.addData({
        quantity,
        id
      })
    }else {
      let updatedCartData = this.props.cartItems.filter((cartItem) => {
        return id != cartItem.id
      });
  
      this.props.updateSingleCartData({
        ...updatedCartData,
      })
    }
  } 

  handleDeleteCartId = (id) => {
    let updatedCartData = this.props.cartItems.filter((cartItem) => {
      return id != cartItem.id
    });

    console.log(updatedCartData);

    this.props.updateSingleCartData({
      ...updatedCartData,
    })

  }

  handleDeleteCartData = () => {
    this.props.deleteData()
  }

  render() {

    return (
      <div className="App">
        <Router>
          <Header products={this.props.items}
            handleChangeValue={this.handleSearch}
          />
          <Switch>
            <Route path="/" exact>
              <>
                {this.state.isItemFound === true && this.state.value !== "" &&
                  <>
                    <div className="h1 text-center mt-3"> Do You find what you are looking for ? </div>
                    <div className="container common-container">
                      <div className="row">
                        {this.state.product.map((product) => {
                          return (
                            <SearchItem
                              item={product}
                              key={product.id}
                              handleAddClick={this.handleAddClick}
                              handleChangeQuantity={this.handleChangeQuantity}
                            />
                          )
                        })}
                      </div>
                    </div>
                  </>

                }
                {this.state.value !== "" && this.state.isItemFound === false &&
                  <>
                    <div className='h1 text-center'>No Item found </div>
                  </>

                }
                <div className='d-flex justify-content-center mt-2'>
                  <img className="img-fluid" src='https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_320123_Bangalore.jpg' alt="Banner" />
                </div>
                <div className='container mt-4'>
                  <div className='row'>
                    <div className='col d-flex justify-content-center'>
                      <img className="img-thumbnail" src='https://www.bigbasket.com/media/uploads/banner_images/cp_GM-republic_EPbanner_400_250123.jpg' alt='Big-Basket' />
                    </div>
                  </div>
                </div>
                <div className='h1 text-center m-4'>CATEGORIES</div>
                <div className='container mt-5 common-container'>
                  <div className="row">
                    <div className="col-sm-6 col-md-3">
                      <Link to="/fruits">
                        <img className="img-thumbnail" src={fruitsImg} alt='Fruits' />
                        <h2 className='h3'>Fruits</h2>
                      </Link>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <Link to="/vegetables">
                        <img className="img-thumbnail w-100" src={vegetablesImg} alt='Vegetables' />
                        <h2 className='h3'>Vegetables</h2>
                      </Link>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <Link to="/pluses">
                        <img className="img-thumbnail" src={plusesImg} alt='Pluses' />
                        <h2 className='h3'>Pluses</h2>
                      </Link>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <Link to="/cut-sprouts">
                        <img className="img-thumbnail" src={sproutsImg} alt='Sprouts' />
                        <h2 className='h3'>Sprouts</h2>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='h1 text-center m-4'>Bank Offer</div>
                <div className='container mt-5 common-container'>
                  <div className="row">
                    <div className="col-sm-6 col-md-3">
                      <img className="img-thumbnail" src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/be9629f6-cea3-47fe-bd82-114a91340902/t1_hp_aff_m_citibank_360_310123.jpg' alt='citi-bank' />
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <img className="img-thumbnail" src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/be9629f6-cea3-47fe-bd82-114a91340902/t1_hp_aff_m_onecard_360_310123.jpg' alt='One-card' />
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <img className="img-thumbnail" src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/be9629f6-cea3-47fe-bd82-114a91340902/t1_hp_aff_m_kotak-300_360_310123.jpg' alt='Kotak-bank' />
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <img className="img-thumbnail" src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/be9629f6-cea3-47fe-bd82-114a91340902/t1_hp_aff_m_icici-150_360_310123.jpg' alt='ICICI-bank' />
                    </div>
                  </div>
                </div>
              </>
              <>
                <div className="h1 text-center mt-3"> Best Sellers </div>
                <div className="container common-container">
                  <div className="row">
                    {this.props.items.map((product) => {
                      return (
                        <Products
                          item={product}
                          key={product.id}
                          handleAddClick={this.handleAddClick}
                          handleChangeQuantity={this.handleChangeQuantity}
                        />
                      )
                    })}
                  </div>
                </div>
              </>
            </Route>
            <Route path="/fruits">
              <>
                <div className="h1 text-center mt-3"> Fruits </div>
                <div className="container common-container">
                  <div className="row">
                    <Fruits
                      handleAddClick={this.handleAddClick}
                      handleChangeQuantity={this.handleChangeQuantity} />
                  </div>
                </div>
              </>
            </Route>
            <Route path="/vegetables">
              <>
                <div className="h1 text-center mt-3"> Vegetables </div>
                <div className="container common-container">
                  <div className="row">
                    <Vegetables
                      handleAddClick={this.handleAddClick}
                      handleChangeQuantity={this.handleChangeQuantity} />
                  </div>
                </div>
              </>
            </Route>
            <Route path="/pluses">
              <>
                <div className="h1 text-center mt-3"> Pluses </div>
                <div className="container common-container">
                  <div className="row">
                    <Pluses
                      handleAddClick={this.handleAddClick}
                      handleChangeQuantity={this.handleChangeQuantity} />
                  </div>
                </div>
              </>
            </Route>
            <Route path="/cut-sprouts">
              <>
                <div className="h1 text-center mt-3"> Cut Sporouts </div>
                <div className="container common-container">
                  <div className="row">
                    <CutSporouts
                      handleAddClick={this.handleAddClick}
                      handleChangeQuantity={this.handleChangeQuantity} />
                  </div>
                </div>
              </>
            </Route>

            <Route path="/cart">
              <Cart
                handleDeleteByOneClick={this.handleDeleteByOneClick}
                handleAddClick={this.handleAddClick}
                handleChangeQuantity={this.handleChangeQuantity} 
                handleDeleteCartData={this.handleDeleteCartData}
                handleDeleteCartId={this.handleDeleteCartId}
                />
            </Route>

            <Route path="/:id" exact render={(routeProps) => {
              return <SingleProduct id={routeProps.match.params.id}
                handleAddClick={this.handleAddClick}
                handleChangeQuantity={this.handleChangeQuantity}
                product={this.props.items.find((item) => {
                  return routeProps.match.params.id == item.id;
                })} />
            }} >
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>

    );
  }
}


const mapStateToProps = (state) => {
  return {
    items: state.itemsData.items,
    cartItems: state.cartItemsData.cartItems,
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    addData: (payload) => {
      return dispatch(addData(payload));
    },
    deleteData: () => {
      return dispatch(deleteData());
    },
    updateSingleCartData: (payload) => {
      return dispatch(updateSingleCartData(payload));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
