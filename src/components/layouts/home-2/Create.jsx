import React from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../../assets/images/icon/Wallet.png'
import icon2 from '../../../assets/images/icon/Category.png'
import icon3 from '../../../assets/images/icon/Image2.png'
import icon4 from '../../../assets/images/icon/Bookmark.png'

const Create = () => {
    const data = [
        {
            title: "Worldwide Item-trade",
            description: "Sell or buy your ingame assets in real-time by using crypto currencies. Don't wait for banks to open!",
            icon : icon1,
            colorbg : "icon-color3"
        },
                {
            title: "Onestop GameFi Provider",
            description: "Receive game scholarships at fair terms. Re-invest your profits into other games, NFTs or crypto savings plan.",
            icon : icon3,
            colorbg : "icon-color3"
        },
        {
            title: "DAO Membership Benefits",
            description: "Benefit from early-bird campaigns, discounts or our own tradeable NFTs.",
            icon : icon2,
            colorbg : "icon-color3"
        },
        {
            title: "Benefits as a $MXDT tokenholder",
            description: "Financial upside from our growing community and. DAO votes ensure returns from only the most profitable items, scholarships and players.",
            icon : icon4,
            colorbg : "icon-color3"
        },
    ]
    return (
        <section className="tf-box-icon create tf-section bg-home-3">
            <div className="heading mb-5">
                                <h2 className="tf-title">Our Service</h2>
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
        <h3 className="heading">{props.item.title}</h3>
        <p className="content">{props.item.description}</p>
    </div>
    </div>
    
)

export default Create;
