import React, { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
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



const FinancialBenefits = () => {
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
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Financial Benefits</h1>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <div className="tf-section tf-item-details">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="sc-card-product text-center bg-white">
                                <img src={inventory} style={{width: '70%'}} alt="Axies" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details ">
                                    <h2 className="style2">Use your inventory </h2>
                                    <h4 class="lineHeight34 font400">No matter what the game is, WoW, Eldenring, CS, Fortnite, Roblox. We got you covered. 

Convert any game inventory into crypto tokens and enjoy the financial benefits. You can put your inventory items, your currencies or account up for sale and wait for a buyer. The transaction will be executed as on any other item exchange. However, you can also choose to receive your payments in Red Blade crypto tokens and then use these tokens like any other blockchain-based token. As long as your uploaded item is not sold to buyer, you can also claim your item back from us. </h4>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="tf-section tf-item-details">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="sc-card-product text-center bg-white">
                                <img src={withour} style={{width: '70%'}} alt="Axies" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details">
                                    <h2 className="style2">What can you do with our token? </h2>
                                    <h4 class="lineHeight34 font400">The first thing you can do with these tokens is buy access to blockchain games. You can either pay for access to a new blockchain game or, if you already pay other games, you can buy items from these games and pay with the Red Blade token. We are integrating new blockchain games every week to provide a broad selection of current titles for you. </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="tf-section tf-item-details">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                             <div className="sc-card-product text-center bg-white">
                                <img src={scholar} style={{width: '70%'}} alt="Axies" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details">
                                    <h2 className="style2">Store your Red Blade tokens </h2>
                                    <h4 class="lineHeight34 font400">One simple benefit from receiving crypto currency in exchange for your inventory items is to use your tokens against ingame inflation. This means you can simply hold the tokens and avoid the usual ingame price erosion that happens over time. As a gamer you know: unless there is an update, prices for game items, currencies and accounts suffer from 20-30% inflation per year. However, with our token you can ensure that this does not happen.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="tf-section tf-item-details">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                           <div className="sc-card-product text-center bg-white">
                                <img src={help} style={{width: '70%'}} alt="Axies" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details">
                                    <h2 className="style2">Scholarships: invest in other players </h2>
                                    <h4 class="lineHeight34 font400">The recent craze with blockchain-based games has led to new models, where players need to make major upfront payments. This is not always affordable, so we want to help out. The Red Blade has a selection of blockchain-based games where players can apply for scholarships. These scholarships are agreements about future revenues that the scholar will generate with his game-play. As a Red Blade token holder you can use your tokens as a form of financing for these players and receive interest from this lending approach.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="tf-section tf-item-details">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                              <div className="sc-card-product text-center bg-white">
                                <img src={sell} style={{width: '70%'}} alt="Axies" />
                                </div>
                            </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details">
                                    <h2 className="style2">Swap and stake them </h2>
                                    <h4 class="lineHeight34 font400">You can invest your new Red Blade tokens into existing blockchain services. The most common is to stake your tokens. We explain here how staking works, and why it is comparatively safe to deposit your crypto currency. 

You can also use it to buy other crypto currency, e.g. Bitcoin or Ethereum. This is called swapping and can be done on any bigger crypto exchange or also a decentral exchange ("DEX") like Uniswap, Pangolin, Pancakeswap or Traderjoexyz. 

There are new financial services for crypto currencies launched every day. While some of them offer attractive returns to investors, we refrain from providing specific investment advice.
</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="tf-section tf-item-details">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                             <div className="sc-card-product text-center bg-white">
                                <img src={wallet} style={{width: '70%'}} alt="Axies" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details">
                                    <h2 className="style2">Connect a crypto wallet </h2>
                                    <h4 class="lineHeight34 font400">To trade your Red Blade tokens outside our platform, you will have to connect your crypto wallet. We support all standard wallet integrations like Metamask, Coinbase, Trust Wallet, Binance Wallet or Safepal.
</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </div>
    );
}

export default FinancialBenefits;
