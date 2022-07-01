import React from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../../assets/images/icon/Wallet.png'
import icon2 from '../../../assets/images/icon/Category.png'
import icon3 from '../../../assets/images/icon/Image2.png'
import icon4 from '../../../assets/images/icon/Bookmark.png'

const Create = () => {
    const data = [
        {
            title: "Money in your pocket",
            description: "Sell your items, currencies, NFTs, accounts or keys. You can do it with any game.",
            icon : icon1,
            colorbg : "icon-color1"
        },
                {
            title: "Scholarships",
            description: "Receive financial support through the DAO. We help you enter the most popular games at fair terms.",
            icon : icon3,
            colorbg : "icon-color3"
        },
        {
            title: "Crypto assets",
            description: "Use our Metaverse Exchange DAO token "MXDT" to invest into other game items or crypto currencies.",
            icon : icon2,
            colorbg : "icon-color2"
        },
        {
            title: "Financial Savings",
            description: "The Metaverse Exchange DAO token. HodL it. Invest it. Lend it to others. Make money with your game-play",
            icon : icon4,
            colorbg : "icon-color4"
        },
    ]
    return (
        <section className="tf-box-icon create tf-section bg-home-3">
            <div className="themesflat-container">
                <div className="row">
                    {
                        data.map((item , index) => (
                            <CreateItem key={index} item={item} />
                        ))
                    }
                </div>                 
            </div>
        </section>
    );
}

const CreateItem = props => (
    <div className='col-lg-3 col-md-6 col-12'>
        <div className="sc-box-icon">
        <div className="image center">
            <div className={`icon-create ${props.item.colorbg}`}>
                    <img src={props.item.icon} alt="" />
                </div>                                                                           
            </div>
        <h3 className="heading"><Link to="/wallet-connect">{props.item.title}</Link></h3>
        <p className="content">{props.item.description}</p>
    </div>
    </div>
    
)

export default Create;
