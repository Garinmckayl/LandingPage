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



const Why = () => {


    return (
        <div className='item-details'>



            <div className="tf-section tf-item-details">

            <div className="heading mg-bt-12">
                                <h2 className="tf-title">The Metaverse Exchange DAO</h2>
                            </div>

                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details">

<ul className="list-group">
  <li className="list-group-item d-flex justify-content-between align-items-center" style={{    backgroundColor: "transparent"}}>
    <h2><span className="badge badge-primary badge-pill"><i className="fal fa-check"></i> </span> Sell your items</h2>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center"  style={{    backgroundColor: "transparent"}}>
  <h2> <span className="badge badge-primary badge-pill"><i className="fal fa-check"></i></span> Receive financial support</h2>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center"  style={{    backgroundColor: "transparent"}}>
  <h2><span className="badge badge-primary badge-pill"><i className="fal fa-check"></i></span> invest into other game items </h2>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center"  style={{    backgroundColor: "transparent"}}>
  <h2><span className="badge badge-primary badge-pill"><i className="fal fa-check"></i></span> Make money with your game-play </h2>
  </li>
</ul>


{/* <div className="col-md-12 align-item-center"> */}
              {/* <h4 className="modal__header">Sign up for early access</h4> */}
\
              {/* <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Signup</h1>
                            </div>
                            <a onClick={() => setModalShow(true)} className="sc-button style-2 fl-button pri-3" style={{border: "2px solid #fff", width: "30%", margin: "auto"}}>
                                            <span style={{color: "#fff"}}>Register</span>
                                        </a> */}

            {/* </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="content-left">
                                <div className="media">
                                    <img className='whyimg' src={graph} width="500" height="500" alt="Axies" style={{    marginBottom: "40px", height: "471px", width: "567px", marginLeft: "126px"}} />
                                {/* <img className='logo-light'  id="logo_header" src={scholar} alt="nft-gaming" />  */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Why;
