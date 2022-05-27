import React from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../../assets/images/icon/Wallet.png'
import icon2 from '../../../assets/images/icon/Category.png'
import icon3 from '../../../assets/images/icon/Image2.png'
import icon4 from '../../../assets/images/icon/Bookmark.png'

const Create = () => {
    const data = [
        {
            title: "Create your account",
            description: "Start trading worldwide with your items, currencies, accounts or keys.",
            icon : icon1,
            colorbg : "icon-color1"
        },
        {
            title: "Receive Red Blade tokens",
            description: "Get paid in our cryptocurrency, the Red Blade token. Use it for other games or cryptocurrencies.",
            icon : icon2,
            colorbg : "icon-color2"
        },
        {
            title: "Buy other items or games",
            description: "Choose any items, game or NFT, no matter if it is a traditional game or a new blockchain-based game",
            icon : icon3,
            colorbg : "icon-color3"
        },
        {
            title: "Enjoy financial benefits",
            description: "Re-invest your tokens, receive scholarships for blockchain games or buy more crypto currencies.",
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
