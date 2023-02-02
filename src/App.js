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


class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      value: "",
      product: "",
      isItemFound: false,
    }

  }

  handleChangeValue = (event) => {

    let item = this.props.items.filter((product) => {
      let name = event.target.value.toLowerCase();
      let productName = product.name.toLowerCase();

      return productName.includes(name)
    });
    console.log(item);
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


  render() {

    return (
      <div className="App">
        <Router>
          <Header products={this.props.items}
            handleChangeValue={this.handleChangeValue}
          />
          <Switch>
            <Route path="/" exact>
              <>
                {this.state.isItemFound === true && this.state.value !== "" &&
                  <>
                    <div className="h1 text-center mt-3">Are You Looking for this?
                    </div>
                    <div className="container common-container">
                      <div className="row">
                        <SearchItem items={this.state.product} />
                      </div>
                    </div>
                  </>

                }
                {this.state.value !== "" && this.state.isItemFound == false &&
                  <>
                    <div className='h1 text-center'>No Item found </div>
                  </>

                }
                <div className='d-flex justify-content-center mt-2'>
                  <img className="img-fluid" src='https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_320123_Bangalore.jpg' />
                </div>
                <div className='container mt-4'>
                  <div className='row'>
                    <div className='col d-flex justify-content-center'>
                      <img className="img-thumbnail" src='https://www.bigbasket.com/media/uploads/banner_images/cp_GM-republic_EPbanner_400_250123.jpg' alt='image' />
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
                    <Products />
                  </div>
                </div>
              </>
            </Route>
            <Route path="/fruits">
              <>
                <div className="h1 text-center mt-3"> Fruits </div>
                <div className="container common-container">
                  <div className="row">
                    <Fruits />
                  </div>
                </div>
              </>
            </Route>
            <Route path="/vegetables">
              <>
                <div className="h1 text-center mt-3"> Vegetables </div>
                <div className="container common-container">
                  <div className="row">
                    <Vegetables />
                  </div>
                </div>
              </>
            </Route>
            <Route path="/pluses">
              <>
                <div className="h1 text-center mt-3"> Pluses </div>
                <div className="container common-container">
                  <div className="row">
                    <Pluses />
                  </div>
                </div>
              </>
            </Route>
            <Route path="/cut-sprouts">
              <>
                <div className="h1 text-center mt-3"> Cut Sporouts </div>
                <div className="container common-container">
                  <div className="row">
                    <CutSporouts />
                  </div>
                </div>
              </>
            </Route>

            <Route path="/:id" exact render={(routeProps) => {
              return <SingleProduct id={routeProps.match.params.id}
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
    items: state.itemsData.items
  }
}

export default connect(mapStateToProps)(App);
