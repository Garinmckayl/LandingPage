import React from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../../assets/images/icon/Wallet.png'
import icon2 from '../../../assets/images/icon/Category.png'
import icon3 from '../../../assets/images/icon/Image2.png'
import icon4 from '../../../assets/images/icon/Bookmark.png'

const Create = () => {
    const data = [
        {
            title: "Worldwide Itemtrade",
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
            description: "As a DAO member you can benefit from early-bird campaigns, discounts and special goodies. We even have our own tradeable NFTs.",
            icon : icon2,
            colorbg : "icon-color3"
        },
        {
            title: "Benefits as a $MXDT tokenholder",
            description: "As a tokenholder you can benefit financially from our growing community and its the scholarship returns. DAO votes will ensure only the best ingame assets, NFTs, players or games will receive financial support.",
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
        <h3 className="heading"><Link to="/wallet-connect">{props.item.title}</Link></h3>
        <p className="content">{props.item.description}</p>
    </div>
    </div>
    
)

export default Create;
