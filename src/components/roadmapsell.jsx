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



            <div className="tf-section tf-item-details">

            <div className="heading mg-bt-12">
                                <h2 className="tf-title">The Metaverse Exchange DAO</h2>
                            </div>

                <div className="themesflat-container">






                <div className="container-fluid">
  <div className="container p-5">
    <div className="row d-flex justify-content-center">
      <div className="col-lg-2 col-md-12 mb-4">
        <div className="card card1 h-100 p-5">
          <div className="card-body">
            <h3 className="card-title">Private Sale</h3>
            <small className="text-muted">Individual</small>
            <br />
            <br />
            <span className="h2">$8</span>/month
            <br />
            <br />
            <div className="d-grid my-3">
              <button className="btn btn-outline-dark btn-block">Select</button>
            </div>
            <ul>
              <li>Cras justo odio</li>
              <li>Dapibus ac facilisis in</li>
              <li>Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-12 mb-4">
        <div className="card card2 h-100 p-5">
          <div className="card-body">
          <h3 className="card-title">Presale 1</h3>
            <small className="text-muted">Small Business</small>
            <br />
            <br />
            <span className="h2">$20</span>/month
            <br />
            <br />
            <div className="d-grid my-3">
              <button className="btn btn-outline-dark btn-block">Select</button>
            </div>
            <ul>
              <li>Cras justo odio</li>
              <li>Dapibus ac facilisis in</li>
              <li>Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-12 mb-4">
        <div className="card card3 h-100 p-5">
          <div className="card-body">
          <h3 className="card-title">Presale 2</h3>
            <small className="text-muted">Large Company</small>
            <br />
            <br />
            <span className="h2">$40</span>/month
            <br />
            <br />
            <div className="d-grid my-3">
              <button className="btn btn-outline-dark btn-block">Select</button>
            </div>
            <ul>
              <li>Cras justo odio</li>
              <li>Dapibus ac facilisis in</li>
              <li>Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-12 mb-4">
        <div className="card card3 h-100 p-5">
          <div className="card-body">
          <h3 className="card-title">Private Sale</h3>
            <small className="text-muted">Large Company</small>
            <br />
            <br />
            <span className="h2">$40</span>/month
            <br />
            <br />
            <div className="d-grid my-3">
              <button className="btn btn-outline-dark btn-block">Select</button>
            </div>
            <ul>
              <li>Cras justo odio</li>
              <li>Dapibus ac facilisis in</li>
              <li>Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-12 mb-4">
        <div className="card card3 h-100 p-5">
          <div className="card-body">
            <h5 className="card-title">Premium</h5>
            <small className="text-muted">Large Company</small>
            <br />
            <br />
            <span className="h2">$40</span>/month
            <br />
            <br />
            <div className="d-grid my-3">
              <button className="btn btn-outline-dark btn-block">Select</button>
            </div>
            <ul>
              <li>Cras justo odio</li>
              <li>Dapibus ac facilisis in</li>
              <li>Vestibulum at eros</li>
            </ul>
          </div>
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
