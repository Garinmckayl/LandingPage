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
            description: "Financially solid item- and skin-trading with crypto.",
            icon : icon1,
            colorbg : "icon-color3"
        },
                {
            title: "Scholarships",
            description: "Receive game scholarships or invest in players or NFTs at fair terms.",
            icon : icon3,
            colorbg : "icon-color3"
        },
        {
            title: "New Liquidity",
            description: "Use our token '$MXDT' to enjoy financial benefits from your gameplay .",
            icon : icon2,
            colorbg : "icon-color3"
        },
        {
            title: "Financial Savings",
            description: "The $MXDT. HodL it. Invest it. Lend it to others. Make money with your game-play",
            icon : icon4,
            colorbg : "icon-color3"
        },
    ]
    return (
        <section className="tf-box-icon create tf-section bg-home-3">
            <div className="heading mg-bt-12">
                                <h2 className="tf-title">Our Services</h2>
                            </div>
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
