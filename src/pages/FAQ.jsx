import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Accordion } from 'react-bootstrap-accordion'

const FAQ = () => {
    const [data] = useState(
        [
            {   key: "0",
                show: "show",
                title: 'How do I trade an ingame asset or NFT?',
                text: 'To buy an item, first connect your crypto wallet or register a payment service. Then click on the item you want to buy, execute the payment and wait for the item to be handed over to you. The hand-over can be either in-game or - if blockchain-based - directly into your wallet. To sell an item, you have to fill out the creation form under sell-item, and then wait for a buyer.'
            },
            {
                key: "1",
                title: 'How fast can I receive payment?',
                text: 'For NFTs and blockchain games the transaction is done in real-time assuming you use your crypto wallet. If it is a non-blockchain game item, currency or account, you will have to execute the trade with an ingame hand-over.'
            },
            {
                key: "2",
                title: 'How do I receive a scholarship?',
                text: 'Go to your account, then choose "scholarship" and fill out the form. We will review the application and contact you by email. Please note that you have to be a MXDT tokenholder to qualify for scholarhips.'
            },
            {
                key: "3",
                title: 'Can I also be a scholarship investor?',
                text: 'Absolutely. First, you need to be a token-holder of MXDT tokens and have your wallet connected to our platform. In your account choose "scholarship" and select "Investor" and then fill out the form. Your investment will automatically be part of the overal scholarship funding. You can monitor the status of your investment in your account.'
            },
            {
                key: "4",
                title: 'What kind of wallets do you support?',
                text: 'During the starting phase we will provide integrations with Metamask, Binance, Coinbase. Later on we will offer more wallet integrations.'
            },
             {
                key: "5",
                title: 'How do I get the MXDT?',
                text: 'Please go to Sushiswap and buy the MXDT. During the initial launch purchasing the MXDT will require holding the stablecoin USDC in your wallet and on the Polygon chain. You can use any standard wallet e.g. Metamask to buy USDC with your credit- or debit-card.'
            },
            {
                key: "5",
                title: 'Is the MXDT token a safe investment?',
                text: 'Our token is different to other crypto assets, as we use ingame assets and game currencies as underlying assets. This means that in times of an increased sell-off the MXDT token´s value is always ensured through the countervalue of our treasury of already traded virtual goods on various global marketplaces.'
            },
            {
                key: "6",
                title: 'Who is behind The Metaverse Exchange DAO?',
                text: 'The Metaverse Exchange DAO is a run by a group of technology executives who all have worked in relevant industries such as banking, fintech, gaming, internet infrastructure and live-operations. We also live from a lively community of several thousand gamers and guild members who contribute daily to our DAO.'
            },
            {
                key: "7",
                title: 'How can I trust The Metaverse Exchange DAO?',
                text: 'We are gamers ourselves and understand the current inconveniences of playing several games, financing them and avoiding cryptocurrency scams. With our DAO and also platform we want to provide an opportunity to keep one foot in the original games and put another foot in the newly emerging world of blockchain games. We are trying to use blockchain technology and smartcontracts to set up processes that are independent from individual decisions and thereby provide a better way to secure your finances.'
            },
            {
                key: "8",
                title: 'What is a DAO anyway?',
                text: 'A DAO is a Decentralized Autonomous Organization. This means that the organization is set up in a decentralized way with most decisions being my by software written in smartcontracts. These smartcontracts can be developed in a way that it is impossible for humans to change decisions in a subjective or personal direction. Intead the smartcontracts are predefined and will be continuously be executed, e.g. how many tokens should be circulated, how many scholarships should be granted. More information on this is given in our Whitepaper especially in regards to the which sort of decisions are taken by token holders.'
            },
            {
                key: "9",
                title: 'How many games do you support?',
                text: 'This is completely up to the community, our platform does not limit the number of kind of games and items. As long as there is buyer or seller for a specific game item or currency, the game will be part of our platform and community.'
            },

       
        ]
    )
    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">FAQ</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <section className="tf-section wrap-accordion">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="tf-title-heading ct style-2 fs-30 mg-bt-10">
                                Anything unclear yet? Do you need support?
                            </h2>
                            <h5 className="sub-title help-center mg-bt-32 ">
                                Let us try helping you by answering the most frequent questions we hear from our gamers.
                            </h5>
                        </div>
                        <div className="col-md-12">
                            <div className="flat-accordion2">
                                {
                                    data.map((item,index) => (
                                        <Accordion key={index} title={item.title} >
                                            <p>{item.text}</p>
                                        </Accordion>
                                    ))
                                }                             
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default FAQ;
