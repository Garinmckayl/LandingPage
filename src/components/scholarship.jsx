import React, { useState } from 'react';
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
import scholar from '../assets/images/svg/scholar.png'
import { Button, Form } from 'react-bootstrap';



const Scholarship = () => {

    const [userEmail, setUserEmail] = useState('');
    const [isComplete, setIsComplete] = useState(true);
    const [isSpin, setIsSpinner] = useState(false);
  
    const updateUserEmail = (e) => {
      const { value } = e.target;
      if (value) {
        setUserEmail(e.target.value)
      }
  
    }
  
    const sendEmail = (event) => {
  
      if (userEmail && ValidateEmail(userEmail)) {
        setIsSpinner(true)
        setTimeout(() => {
          setIsComplete(false)
          setIsSpinner(false)
        }, 1000)
      }
      else {
        console.log('Make border outline')
        setIsSpinner(false)
      }
    }
  
    const ValidateEmail = (mail) => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
      }
      return (false)
    }

    const [dataHistory] = useState(
        [
            {
                img: img1,
                name:"Mason Woodward",
                time: "8 hours ago",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
            { 
                img: img2,
                name:"Mason Woodward",
                time: "at 06/10/2021, 3:20 AM",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
            {
                img: img3,
                name:"Mason Woodward",
                time: "8 hours ago",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
            {
                img: img4,
                name:"Mason Woodward",
                time: "8 hours ago",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
            {
                img: img5,
                name:"Mason Woodward",
                time: "8 hours ago",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
            {
                img: img6,
                name:"Mason Woodward",
                time: "8 hours ago",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
        ]
    )
    return (
        <div className='item-details'>
            {/* <section className="inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Scholarships</h1>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section> */}


            <div className="tf-section tf-item-details">

            <div className="heading mg-bt-12">
                                <h2 className="tf-title">Scholarships for GAMERS</h2>
                            </div>

                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details">
                                    <h2 className="style2">Are you already playing blockchain-based games, but need financial support? </h2>
                                    <h5>


                                    We can help you with scholarships for any recent game-title. Our terms are straight-forward and the process is quick and easy. We are gamers and we understand why people want to play games. 

Register with us now.
</h5>

{/* <div className="col-md-12 align-item-center"> */}
              {/* <h4 className="modal__header">Sign up for early access</h4> */}
              <form autocomplete="off" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" noValidate className="validate early__sign__up__form">
                <input type="email" onChange={(e) => updateUserEmail(e)} name="EMAIL" class="user__email" id="mce-EMAIL" placeholder='Email' typee="email" />
                {isComplete ?
                  <div >
                    <Button onClick={sendEmail} className="signin__button">
                      {!isSpin ? <i className="fas fa-arrow-right" style={{ fontSize: "24px" }}></i> : <i class='fas fa-undo-alt' style={{ fontSize: "24px", animationName: "spin", animationDuration: "1000ms", animationIterationCount: "infinite", animationTimingFunction: "linear" }}></i>}


                    </Button>
                  </div>
                  :
                  <Button onClick={() => window.open('https://discord.com/invite/PNHvcp8KXq')} className="discord__button">
                    <a> <span><i className="icon-fl-vt"></i></span><span>You are now on the waitlist! Click here to join our Discord!</span></a>
                  </Button>
                }
              </form>
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
                                    <img src={scholar} alt="Axies" style={{    marginBottom: "40px"}} />
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

export default Scholarship;
