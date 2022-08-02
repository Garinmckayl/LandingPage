import React, { useState, useEffect, useRef } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Link } from 'react-router-dom';
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LiveAuction from './layouts/LiveAuction';
import img1 from '../assets/images/avatar/avt-3.jpg'
import img2 from '../assets/images/avatar/avt-11.jpg'
import img3 from '../assets/images/avatar/avt-1.jpg'
import img4 from '../assets/images/avatar/avt-5.jpg'
import img5 from '../assets/images/avatar/avt-7.jpg'
import img6 from '../assets/images/avatar/avt-8.jpg'
import img7 from '../assets/images/avatar/avt-2.jpg'
import imgdetail1 from '../assets/images/box-item/images-item-details.jpg'
import graph from '../assets/images/svg/graph.png'
import { Button, Form } from 'react-bootstrap';



const RoadMapSell = () => {


    return (
        <div className='item-details'>
<br />
<br />
<hr />


            <div className="tf-section tf-item-details pb-5">

            <div className="heading mg-bt-12">
                                <h2 className="tf-title">Join the $MXDT Token PreSales!</h2>
                            </div>

                <div className="themesflat-container mb-5">






  <div className="container">
    <div className="row d-flex justify-content-center">

      <div className="col-lg-3 col-md-12 mb-4">
        <div className="card text-center my-3">
          <div className="card-header">
            Pre-Sale
          </div>
          <div className="card-body">
            <h5 className="card-title">0.01 USDC</h5>
            <p className="card-text">Whitelist only<br />
              Sold out!</p>
          </div>
        </div>  
      </div>

      <div className="col-lg-3 col-md-12 mb-4">
        <div className="card text-center my-3">
          <div className="card-header">
            Pre-Sale 1
          </div>
          <div className="card-body">
            <h5 className="card-title">0.02 USDC</h5>
            <p className="card-text"></p>
            <a href="https://app.sushi.com/miso/0xAc6d5AeF8F56177f0f882cE1123F8AD1737f9601?chainId=137" target="_blank" className="btn btn-primary">Buy Now</a>
          </div>
          <div className="card-footer text-muted">
          Start: August 1 - 10
          </div>
        </div> 
      </div>

      <div className="col-lg-3 col-md-12 mb-4">
        <div className="card text-center my-3">
          <div className="card-header">
            Pre-Sale 2
          </div>
          <div className="card-body">
            <h5 className="card-title">0.02 USDC</h5>
            <p className="card-text"></p>
            <a href="https://app.sushi.com/miso/0xAc6d5AeF8F56177f0f882cE1123F8AD1737f9601?chainId=137" target="_blank" className="btn btn-primary">Coming Soon</a>
          </div>
          <div className="card-footer text-muted">
          Start: August 15 - 22
          </div>
        </div> 
      </div>

      <div className="col-lg-3 col-md-12 mb-4">
        <div className="card text-center my-3">
          <div className="card-header">
            IDO
          </div>
          <div className="card-body">
            <h5 className="card-title">0.08 USDC</h5>
            <p className="card-text"></p>
            <a href="https://app.sushi.com/miso/0xAc6d5AeF8F56177f0f882cE1123F8AD1737f9601?chainId=137" target="_blank" className="btn btn-primary">Coming Soon</a>
          </div>
          <div className="card-footer text-muted">
            Start: October 1 - 15
          </div>
        </div> 
      </div>
    </div>
  </div>
</div>



            </div>


        </div>
    );
}

export default RoadMapSell;
