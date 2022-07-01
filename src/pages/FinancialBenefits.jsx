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
        <div className='item-details'>
            <Header />
            <section className="flat-title-page inner">
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
            </section>
            <div className="tf-section tf-item-details">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="sc-card-product text-center bg-white">
                                <img src={inventory} style={{ width: '70%' }} alt="Axies" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details ">
                                    <h2 className="style2">Monetize your inventory </h2>
                                    <h4 class="lineHeight34 font400">Web3 or Web2 games, you can make money from your inventory.

                                        Sell any ingame asset into crypto tokens and enjoy the financial benefits as tokenholder of the Metaverse Exchange DAO token (MXDT). Enjoy a new level of financial flexibility: buy access to other games, provide scholarships to other players or simply keep your new crypto savings in a save place with us. As long as your uploaded item is not sold to a buyer, you can claim your item back from us. If the item is sold, but you still want it back, we will pay you back in your game currency. </h4>

                                </div>
                                <button onClick={() => {window.open('https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x6B3595068778DD592e39A122f4f5a5cF09C90fE2&chainId=1')}} className='buy__token'>
                                    <a>Buy Token</a>
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
                            <div className="sc-card-product text-center bg-white">
                                <img src={withour} style={{ width: '70%' }} alt="Axies" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details">
                                    <h2 className="style2">Game scholarships as a DAO member</h2>
                                    <h4 class="lineHeight34 font400">If you become a tokenholder, you automatically qualify for scholarship and game sponsoring. Players can apply through their account for a specific game scholarship, where we provide entry financing for Pay-to-Play games. We also provide sponsorships for selected games and specific players through subscription subsidies, ingame items & currencies or account sponsoring. As we are a DAO, we will allow tokenholders to vote in regards to these scholarships, i.e. which games should be sponsored, which players should be sponsored and how much of the DAO funds should be allocated. </h4>
                                </div>
                                <button onClick={() => {window.open('https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x6B3595068778DD592e39A122f4f5a5cF09C90fE2&chainId=1')}} className='buy__token'>
                                    <a>Buy MXDT Token</a>
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
                            <div className="sc-card-product text-center bg-white">
                                <img src={scholar} style={{ width: '70%' }} alt="Axies" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details">
                                    <h2 className="style2">Use your MXDT </h2>
                                    <h4 class="lineHeight34 font400">As a MXDT tokenholder you can avoid ingame currency inflation. Many games suffer from currency inflation, unless there are new upgrades. With our token you should be able to keep the value of your inventory, so you can always afford to buy new ingame items when necessary. </h4>
                                </div>
                                <button onClick={() => {window.open('https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x6B3595068778DD592e39A122f4f5a5cF09C90fE2&chainId=1')}} className='buy__token'>
                                    <a>Buy MXDT Token</a>
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
                            <div className="sc-card-product text-center bg-white">
                                <img src={help} style={{ width: '70%' }} alt="Axies" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details">
                                    <h2 className="style2">Scholarships: invest in other players </h2>
                                    <h4 class="lineHeight34 font400">The recent craze with blockchain-based games has led to new models, where players need to make major upfront payments. This is not always affordable, so we want to help out. The Metaverse Exchange DAO has a selection of blockchain-based games where players can apply for scholarships. These scholarships are agreements about future revenues that the scholar will generate with his game-play. As a MXDT tokenholder you can use your tokens as a form of financing for these players and receive interest from this lending approach.</h4>
                                </div>
                                <button onClick={() => {window.open('https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x6B3595068778DD592e39A122f4f5a5cF09C90fE2&chainId=1')}} className='buy__token'>
                                    <a>Buy MXDT Token</a>
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
                            <div className="sc-card-product text-center bg-white">
                                <img src={sell} style={{ width: '70%' }} alt="Axies" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details">
                                    <h2 className="style2">Swap and stake them </h2>
                                    <h4 class="lineHeight34 font400">You can invest your MXDT tokens into other cryptocurrency services. The most common investment is to stake your tokens. We explain here how staking works, and why it is comparatively safe to deposit your crypto currency.

                                        You can also use it to buy other cryptocurrency, e.g. Bitcoin or Ethereum. This is called swapping and can be done on any bigger crypto exchange or also a decentral exchange ("DEX") like Sushiswap, Uniswap, Pangolin, Pancakeswap or Traderjoexyz.

                                        There are new financial services for crypto currencies launched every day, but be careful when you are unsure what exactly they are offering.
                                    </h4>
                                </div>
                                <button onClick={() => {window.open('https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x6B3595068778DD592e39A122f4f5a5cF09C90fE2&chainId=1')}} className='buy__token'>
                                    <a>Buy Token</a>
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
                            <div className="sc-card-product text-center bg-white">
                                <img src={wallet} style={{ width: '70%' }} alt="Axies" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details">
                                    <h2 className="style2">Trade with the MXDT </h2>
                                    <h4 class="lineHeight34 font400">To trade your MXDT outside our platform, you will have to connect your crypto wallet. We support all standard wallet integrations like Metamask, Coinbase, Trust Wallet, Binance Wallet or Safepal.
                                    </h4>
                                </div>
                                <button onClick={() => {window.open('https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x6B3595068778DD592e39A122f4f5a5cF09C90fE2&chainId=1')}} className='buy__token'>
                                    <a>Buy Token</a>
                                </button>
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
