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
                title: 'How do I trade an item, game-currency, NFT or account?',
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
                text: 'TBD.'
            },
            {
                key: "3",
                title: 'Can I also be a scholarship investor?',
                text: 'TBD.'
            },
            {
                key: "4",
                title: 'What kind of wallets do you support?',
                text: 'TBD'
            },
            {
                key: "5",
                title: 'What is staking and how does it work?',
                text: 'TBD'
            },
            {
                key: "6",
                title: 'Who is behind the Red Blade DAO?',
                text: 'TBD'
            },
            {
                key: "7",
                title: 'Is it safe to invest in the Red Blade DAO token?',
                text: 'TBD.'
            },
            {
                key: "8",
                title: 'What is a DAO anyway?',
                text: 'TBD.'
            },
            {
                key: "9",
                title: 'How many games do you support?',
                text: 'TBD.'
            },
            {
                key: "10",
                title: 'Can I become an liquidity pool provider?',
                text: 'TBD.'
            },
            {
                key: "11",
                title: 'Do I have to pay gas fees for the trades?',
                text: 'TBD.'
            },
            {
                key: "12",
                title: 'Which blockchains are you supporting?',
                text: 'TBD.'
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
                                Let us try helping you by providing the most frequent questions we hear from our gamers.
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
