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
import auc1 from '../assets/images/Items/auc1.png'
import auc2 from '../assets/images/Items/auc2.png'
import auc3 from '../assets/images/Items/auc3.png'
import auc4 from '../assets/images/Items/auc4.png'
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
  <li className="list-group-item d-flex justify-content-between align-items-center border-0" style={{    backgroundColor: "transparent"}}>
    <h2><span className="badge badge-primary badge-pill"><i className="fal fa-check"></i> </span> Sell your items</h2>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center border-0"  style={{    backgroundColor: "transparent"}}>
  <h2> <span className="badge badge-primary badge-pill"><i className="fal fa-check"></i></span> Receive financial support</h2>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center border-0"  style={{    backgroundColor: "transparent"}}>
  <h2><span className="badge badge-primary badge-pill"><i className="fal fa-check"></i></span> invest into other game items </h2>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center border-0"  style={{    backgroundColor: "transparent"}}>
  <h2><span className="badge badge-primary badge-pill"><i className="fal fa-check"></i></span> Make money with your game-play </h2>
  </li>
</ul>


                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12 pt-5 mt-5">
                            <div className='row px-5 my-5 pt-5'  style={{height:'300px', alignItems:'flex-end'}}>
                                <div className='col-2 offset-1 h-25 mvx-gradient-primary rounded-3'>
                                    <img src={auc1} alt='nft 1' width='80%' style={{marginTop:'-60%'}} />
                                </div>
                                <div className='col-2 offset-1  h-50 mvx-gradient-primary rounded-3'>
                                    <img src={auc2} alt='nft 1' style={{marginTop:'-60%'}} />
                                </div>
                                <div className='col-2 offset-1 h-75 mvx-gradient-primary rounded-3'>
                                    <img src={auc3} alt='nft 1' style={{marginTop:'-60%'}} />
                                </div>
                                <div className='col-2 offset-1 h-100 mvx-gradient-primary rounded-3'>
                                    <img src={auc4} alt='nft 1' style={{marginTop:'-60%'}} />
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
