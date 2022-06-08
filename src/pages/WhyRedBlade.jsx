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
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">The Red Blade DAO Token</h1>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>


            <div className="tf-section tf-item-details">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="content-left">
                                <div className="media">
                                    <img src="https://via.placeholder.com/500" alt="Axies" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details">
                                    <h4 className="style2">Game Financing and investors </h4>
                                    <h5>

                                    Crypto assets should be stable. Nobody wants to worry about his savings and investments. As a crypto investor you want to avoid 
        high volatility and benefit from the growth of the ecosystem that you support with your token purchase.</h4><br/>
        
        The Red Blade DAO is providing this necessary stability through its treasury and the underlying game assets which it holds. 
        With the Red Blade token you therefore have a unique token whose value is secured by widely traded game-items, currencies, characters and accounts. 
        Our DAO will invests in and also holds these items over a certain period while tracking their value, prices and exchange-rates on the various worlwide 
        item exchanges. Check our Investor Information section and also our DAO Whitepaper for more information about the our tokenomics and how the Treasury operates.
</h5><br/><br/>
<h4>Community Growth</h4><br/>
<h6>
We are a multidimensional project. First of all, our token is a utility for gamers. </h4><br/>
        
        Game-players can benefit from a new financial model for their inventory. They also benefit from a easier connectivity into the newly evolving world of crypto games. While there is scepticism against some forms of blockchain-based games and NFTs, we are dealing with an unstoppable force. Accordingly, we want to allow gamers to utilize this trends to their advantage. 
<br />
We also see other gaming platforms and ecoystems pushing into the blockchain world. Here we see ourselves as neutral: we are planning to integrate any game-title or item to be published or traded through our platform. We also except other gaming crypto currencies and plan to integrate these as well, assuming we can arrange benefits for our gamers. 
<br /><br />
We are also providing scholarships for players. Scholarships are revenue-sharing arrangements, where players of blockchain-based games can borrow or rent NFTs or accounts in order to play without paying bigger upfront fees. In exchange for this sort of financing, the investor or NFT owner can expect interest payments from the game-play in the form of NFTs or crypto-currency. Don´t worry, the player usually gets the biggest share.

Buying game credits is nothing new. New is that we offer this based on game inventory, so it allows players to store their items and currencies to accumulate value instead of ingame inflation. This will support the price-levels of our token and serve as an underlying asset.
</h6> <br /><br />
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
