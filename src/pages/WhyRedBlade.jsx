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
import growth from '../assets/images/growth.gif'
import gaming from '../assets/images/svg/gamingfi.svg'


import p from '../assets/images/newdesign/7.png'
import f from '../assets/images/newdesign/6.png'
import g from '../assets/images/newdesign/8.png'


const WhyRedBlade = () => {
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
            <section className="flat-title-page-token inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center heading-titles">The Metaverse Exchange DAO Token</h1>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>


            <div className="tf-section tf-item-details">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="text-center">
                                    <img src={p} style={{width: '70%'}} alt="Axies" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details">
                                    <h2 className="style2">An asset-backed token </h2>
                                    <h4  class="lineHeight34 font400">

                                    Crypto assets should be stable. Nobody wants to worry about his savings and investments. As a crypto investor you want to avoid 
        high volatility and benefit from the growth of the ecosystem that you support with your token purchase.  
       <br/>
        The Metaverse Exchange DAO is providing this necessary stability through its treasury and the underlying game assets which it holds. <br/>
       
       <br/>
        </h4>
                                    <br />
                                    <button onClick={() => { window.open('https://app.sushi.com/miso/0xFbDFFc73e2a80d33fC6C63C345899bC38e2bf136?chainId=137'); } } className='buy__token'>
                                        <a>Buy MXDT Token</a>
                                    </button>
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
                            <div className="content-right">
                                <div className="sc-item-details">

<h2>A truly global market</h2><br/>
<h4  class="lineHeight34 font400">
<br/>
        
        Today game-players can already use item-trading platforms. However, most platforms are regional, limited to certain games or genres and also often illegal. 
<br />
<br/>            
We see ourselves as the Ebay of game-trading using blockchain technology replacing existing industry practices and creating new value for users and investors. Doing so we are creating a whole new market on literally a next-level technology. 
<br /><br />
</h4>
                                    <br />
                                    <button onClick={() => { window.open('https://app.sushi.com/miso/0xFbDFFc73e2a80d33fC6C63C345899bC38e2bf136?chainId=137'); } } className='buy__token'>
                                        <a>Buy MXDT Token</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="text-center">
                                    <img src={f} style={{width: '70%'}} alt="Axies" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="tf-section tf-item-details">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="text-center">
                                    <img src={g} style={{width: '70%'}} alt="Axies" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details">
                                    <h2 className="style2">DAO investments </h2>
                                    <h4  class="lineHeight34 font400">

                                    We are also providing scholarships for players. Scholarships are revenue-sharing arrangements, where players of blockchain-based games can borrow or rent NFTs or accounts in order to play without paying bigger upfront fees. In exchange the investor or NFT owner can expect interest payments from the game-play in the form of NFTs or crypto-currency. 
                                   <br/>
                                    Our approach is that we include our gamers to vote for who should receive scholarhips, which items should be scholarships and also which items should the Metaverse Exchange DAO invest in. We believe the community will have a better understanding than just one single investor.
                                        </h4>
                                    <br />
                                    <button onClick={() => { window.open('https://app.sushi.com/miso/0xFbDFFc73e2a80d33fC6C63C345899bC38e2bf136?chainId=137'); } } className='buy__token'>
                                        <a>Buy MXDT Token</a>
                                    </button>
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

export default WhyRedBlade;
