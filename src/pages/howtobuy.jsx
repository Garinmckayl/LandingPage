import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Accordion } from 'react-bootstrap-accordion'

const Howtobuy = () => {
    const [data] = useState(
        [
            {
                key: "0",
                title: 'How do I get the MXDT?',
                text: 'The token presale is scheduled for November 1. So right now the $MXDT is not sold or traded yet. Once the sale is on, please go to www.sushi.com and find the "Miso Marketplace". Under the "Miso Marketplace" you can buy the MXDT with USDC stablecoins. However, please make sure your wallet is connected and set to the Polygon chain. Please also make sure you have enough USDC stablecoin. You can use any standard wallet e.g. Metamask to buy sufficient USDC stablecoins with your credit- or debit-card.'
            },
            {
                key: "5",
                title: 'Is the MXDT token a safe investment?',
                text: 'Our token is different to other crypto assets, as we use ingame assets and game currencies as underlying assets. This means that in times of an increased sell-off the MXDT token´s value is always ensured through the countervalue of our treasury of already traded virtual goods on various global marketplaces.'
            },
             {   key: "3",
                show: "show",
                title: 'Why should I trade an ingame asset, skin or NFT?',
                text: 'We are the Ebay of item-trading, but we use blockchain technology. Similar to old books or clothes you can sell on Ebay, you can convert unused game items, skins or NFTs into money by using our platform. To be safe, we will offer a 30-day return guarantee if requested.'
            },
            {
                key: "2",
                title: 'How many games do you support?',
                text: 'Our platform does not limit the number of kind of games, items, skins, NFTs or currencies. As long as it is a legal trade and there is a buyer or seller for a specific game item or currency, the game will be part of our platform and community.'
            },
            {
                key: "4",
                title: 'How fast can I receive payment for my items?',
                text: 'For NFTs and blockchain games the transaction is done in real-time. If it is a non-blockchain game item, skin or currency, you will have to execute the trade with an ingame hand-over, but you will still get paid in MXDT, which is faster than any FIAT payment'
            },
            {
                key: "1",
                title: 'How do I receive a scholarship?',
                text: 'Right now, we are still building out our platform, but you can sign-up to the applicant list. You can move up the waitlist by inviting people to our Discord community. Our scholarships will be assigned, as soon as the platform goes live by providing a detailed process within your user-acount.'
            },
            {
                key: "6",
                title: 'Can I also be a scholarship investor?',
                text: 'Absolutely. First, you need to be a token-holder of MXDT tokens and have your wallet connected to our platform. In your account choose "scholarship" and select "Investor" and then fill out the form. Your investment will automatically be part of the overal scholarship funding. You can monitor the status of your investment in your account.'
            },
            {
                key: "7",
                title: 'What kind of wallets do you support?',
                text: 'During the starting phase we will provide integrations with Metamask, Binance, Coinbase. Later on we will offer more wallet integrations.'
            },
            {
                key: "8",
                title: 'Who is behind The Metaverse Exchange DAO?',
                text: 'The Metaverse Exchange DAO is a run by a group of technology executives who all have worked in relevant industries such as banking, fintech, gaming, internet infrastructure and live-operations. We also live from a lively community of several thousand gamers and guild members who contribute daily to our DAO.'
            },
            {
                key: "9",
                title: 'Why is the management anonymous?',
                text: 'A standard scam in crypto is to hijack the identity of an employee of a bigger crypto exchange or protocol and pretend you are helping during a problem, while instead they drain your wallet or account. To avoid this scam we have decided to not reveal our identities to a bigger audience at this point For institutional investors we can arrange face-to-face calls or meetings.'
            },        
            {
                key: "10",
                title: 'What is a DAO anyway?',
                text: 'A DAO is a Decentralized Autonomous Organization. This means that the organization is set up in a decentralized way with most decisions being made my by software written in smartcontracts. These smartcontracts can be developed in a way that it is impossible for humans to change decisions in a subjective or personal direction. Intead the smartcontracts are predefined and will be continuously be executed, e.g. how many tokens should be circulated, how many scholarships should be granted. More information on this is given in our Whitepaper especially in regards to the which sort of decisions are taken by token holders.'
            },
            

       
        ]
    )
    return (
        <div>
            <Header />
            <section className="flat-title-page inner faq-section">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">How to buy</h1>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <section className="tf-section wrap-accordion">
            <div className="container px-4 py-5" id="featured-3">
  <h2 className="pb-2 border-bottom">How to buy </h2>
  <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
    <div className="feature col">
      <div className="feature-icon bg-primary bg-gradient">
        <svg className="bi" width="1em" height="1em">
          <use xlinkHref="#collection" />
        </svg>
      </div>
      <h2 className='text-center'>1</h2>
      <p>
        The token presale is scheduled for November 1. Once the sale is on, please install a wallet like  <a href='https://metamask.io/' target='_blank'>metamask</a> installed. 
      </p>
    </div>
    <div className="feature col">
      <div className="feature-icon bg-primary bg-gradient">
        <svg className="bi" width="1em" height="1em">
          <use xlinkHref="#people-circle" />
        </svg>
      </div>
      <h2 className='text-center'>2</h2>
      <p>
        Then buy USDC stablecoins with the wallet set to the <a href='https://chainlist.org/chain/137' target='_blank'>Polygon Mainnet</a>. 
      </p>
    </div>
    <div className="feature col">
      <div className="feature-icon bg-primary bg-gradient">
        <svg className="bi" width="1em" height="1em">
          <use xlinkHref="#toggles2" />
        </svg>
      </div>
      <h2 className='text-center'>3</h2>
      <p>
      The auction will be at www.sushi.com. Please make sure your wallet is set to <a href='https://chainlist.org/chain/137' target='_blank'>Polygon Mainnet</a>
      </p>
      <a target='_blank'
                      href="https://app.sushi.com/miso/0xCff1F1A133e56CE31CC9AFB907B3C253Dc612bB6?chainId=137"
                      className="sc-button bg-secondary note fl-button pri-1"
                    >
                      <span>Buy token</span>
                    </a> 
    </div>
  </div>



</div>

<div
  className="row no-gutters clients-wrap clearfix wow fadeInUp howto-container"
  style={{ visibility: "visible", animationName: "fadeInUp" }}
>
  <div className="col-lg-3 col-md-4 col-xs-6">
    <div className="client-logo">
      <img
        src="https://uploads-ssl.webflow.com/5f9a1900790900e2b7f25ba1/60f6c47070e683cb60fd647f_Sushiswap.png"
        // className="img-fluid"
        width={200} height={150}
        alt=""
      />
    </div>
  </div>
  <div className="col-lg-3 col-md-4 col-xs-6">
    <div className="client-logo">
      <img
        src="https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Polygon-MATIC-900x0.png"
        // className="img-fluid"
        width={200} height={150}
        alt=""
      />
    </div>
  </div>
  <div className="col-lg-3 col-md-4 col-xs-6">
    <div className="client-logo">
      <img
        src="https://gopluslabs.io/images/plus2/about_logo.png"
        className=""
        width={200} height={150}
        alt=""
      />
    </div>
  </div>
  <div className="col-lg-3 col-md-4 col-xs-6">
    <div className="client-logo">
      <img
        src="https://www.geckoterminal.com/_next/image?url=%2Fimages%2Flogo_dark.png&w=256&q=75"
        className=""
        width={200} height={150}
        alt=""
      />
    </div>
  </div>


</div>

            </section>
            <Footer />
        </div>
    );
}

export default Howtobuy;
