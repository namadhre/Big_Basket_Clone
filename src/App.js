import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Products from './components/Products';
import Signup from './components/Signup';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Signup />
        <>
          <div className='d-flex justify-content-center'>
            <img className="img-fluid" src='https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_320123_Bangalore.jpg' />
          </div>
          <div className='container mt-4'>
            <div className='row'>
              <div className='col d-flex justify-content-center'>
                <img className="img-thumbnail" src='https://www.bigbasket.com/media/uploads/banner_images/cp_GM-republic_EPbanner_400_250123.jpg' alt='image' />
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
        </Router>
      </div>

    );
  }
}

export default App;
