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
                                    <h2 className="style2">Game Financing and investors </h2>
                                    <h4  class="lineHeight34 font400">

                                    Crypto assets should be stable. Nobody wants to worry about his savings and investments. As a crypto investor you want to avoid 
        high volatility and benefit from the growth of the ecosystem that you support with your token purchase.  The Metaverse Exchange DAO is providing this necessary stability through its treasury and the underlying game assets which it holds. <br/>
       
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

<h2>Community Growth</h2><br/>
<h4  class="lineHeight34 font400">
<br/>
        
        Game-players can benefit from a new financial model for their inventory. They also benefit from a easier connectivity into the newly evolving world of crypto games. While there is scepticism against some forms of blockchain-based games and NFTs, we are dealing with an unstoppable force. Accordingly, we want to allow gamers to utilize this trends to their advantage. 
<br />
We also see other gaming platforms and ecoystems pushing into the blockchain world. Here we see ourselves as neutral: we are planning to integrate any game-title or item to be published or traded through our platform. We also except other gaming crypto currencies and plan to integrate these as well, assuming we can arrange benefits for our gamers. 
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
                                    <h2 className="style2">scholarships votes </h2>
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
