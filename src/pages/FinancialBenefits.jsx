import React, { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LiveAuction from '../components/layouts/LiveAuction';
import img1 from '../assets/images/avatar/avt-3.jpg'
import img2 from '../assets/images/avatar/avt-11.jpg'
import img3 from '../assets/images/avatar/avt-1.jpg'
import img4 from '../assets/images/avatar/avt-5.jpg'
import img5 from '../assets/images/avatar/avt-7.jpg'
import img6 from '../assets/images/avatar/avt-8.jpg'
import img7 from '../assets/images/avatar/avt-2.jpg'
import imgdetail1 from '../assets/images/box-item/images-item-details.jpg'
import inventory from '../assets/images/svg/inventory.svg'
import withour from '../assets/images/svg/withour.svg'
import scholar from '../assets/images/svg/scholar.svg'
import wallet from '../assets/images/svg/wallet.svg'
import sell from '../assets/images/svg/sell.svg'
import help from '../assets/images/svg/help.svg'

import pic1 from '../assets/images/newdesign/1.png';
import pic2 from '../assets/images/newdesign/2.png';
import pic3 from '../assets/images/newdesign/3.svg';
import pic4 from '../assets/images/newdesign/4.png';
import pic5 from '../assets/images/newdesign/5.png';
import pic6 from '../assets/images/newdesign/7.png';




const FinancialBenefits = () => {
    const [dataHistory] = useState(
        [
            {
                img: img1,
                name: "Mason Woodward",
                time: "8 hours ago",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
            {
                img: img2,
                name: "Mason Woodward",
                time: "at 06/10/2021, 3:20 AM",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
            {
                img: img3,
                name: "Mason Woodward",
                time: "8 hours ago",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
            {
                img: img4,
                name: "Mason Woodward",
                time: "8 hours ago",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
            {
                img: img5,
                name: "Mason Woodward",
                time: "8 hours ago",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
            {
                img: img6,
                name: "Mason Woodward",
                time: "8 hours ago",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
        ]
    )
    return (
        <><Header /><div className='item-details'>
            {/* <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Game Finance Benefits</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
                        <section className="flat-title-page-financial inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center heading-titles">Game Finance Benefits</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="tf-section tf-item-details">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="">
                                <img src={pic1} style={{ width: '70%' }} alt="Axies" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details ">
                                    <h2 className="style2">Monetize your inventory </h2>
                                    <h4 class="lineHeight34 font400">

                                        Sell any ingame asset into crypto tokens and enjoy the financial benefits as tokenholder of the Metaverse Exchange DAO token ($MXDT).Enjoy a new level of financial flexibility: buy access to other games, provide scholarships to other players or simply keep your new crypto savings in a save place with us.</h4>

                                </div>
                                <br /><hr />
                                <button className='buy__token'>
                                    <a href="/howtobuy">Buy Token</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="tf-section tf-item-details">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details">
                                    <h2 className="style2">Fair game scholarships</h2>
                                    <h4 class="lineHeight34 font400">Use $MXDT to receive scholarships to play your favourite games. We provide entry financing for various game titles across Web2 and Web3.</h4>
                                </div>
                                <br /><hr />
                                <button  className='buy__token'>
                                    <a  href="/howtobuy">Buy Token</a>
                                </button>
                            </div>

                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="">
                                <img src={pic2} style={{ width: '70%' }} alt="Axies" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="tf-section tf-item-details">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="">
                                <img src={pic3} style={{ width: '70%' }} alt="Axies" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details">
                                    <h2 className="style2">Use your MXDT </h2>
                                    <h4 class="lineHeight34 font400">As a MXDT tokenholder you can avoid ingame currency inflation. Keep your inventory value by storing it in $MXDT as an asset-backed token.</h4>
                                </div>
                                <br /><hr />
                                <button className='buy__token'>
                                    <a href="/howtobuy">Buy Token</a>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <div className="tf-section tf-item-details">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details">
                                    <h2 className="style2">Invest in other players </h2>
                                    <h4 class="lineHeight34 font400">The Metaverse Exchange DAO has a selection of blockchain-based games where players can apply for scholarships. These scholarships are agreements about future revenues that the scholar will generate with his game-play. As a MXDT tokenholder you can use your tokens as a form of financing for these players and receive interest.</h4>
                                </div>
                                <br /><hr />
                                <button  className='buy__token'>
                                    <a  href="/howtobuy">Buy Token</a>
                                </button>
                            </div>

                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="">
                                <img src={pic4} style={{ width: '70%' }} alt="Axies" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="tf-section tf-item-details">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="">
                                <img src={pic5} style={{ width: '70%' }} alt="Axies" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details">
                                    <h2 className="style2">Invest by staking </h2>
                                    <h4 class="lineHeight34 font400">You can invest your $MXDT tokens into other crypto services such as staking or liquidity pools. 

                                   
                                    </h4>
                                </div>
                                <br /><hr />
                                <button  className='buy__token'>
                                    <a  href="/howtobuy">Buy Token</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



   



            <Footer />
        </div></>
    );
}

export default FinancialBenefits;
