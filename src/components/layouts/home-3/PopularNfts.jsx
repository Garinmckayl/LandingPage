import React , { useState , Fragment } from 'react';
import { Link } from 'react-router-dom'
import CardModal from '../CardModal';


const PopularNfts = props => {
    const data = props.data;
    return (
        <section className="tf-section popular-nfts bg-home-3">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="">
                            <h2 className="tf-title style2 authorh2">
                                Popular NFTs</h2>
                            <div className="heading-line s1"></div>
                        </div>
                    </div>
                    {
                        data.map((item,index) => (
                            <TopSellerItem key={index} item={item} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}


const TopSellerItem = props => {
    const [modalShow, setModalShow] = useState(false);

    return (
    <>
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
        <div className="sc-author-box nft-box">
            <div className="author-infor">
                <h2 className="style2"><Link to="#"  onClick={() => setModalShow(true)}>{props.item.name}</Link></h2>
                <span className="price">{props.item.price}</span>
            </div>
            <div className="author-avatar">
                <Link to="#" onClick={() => setModalShow(true)}>
                    <img src={props.item.img} alt="Axies" style={{height: "300px", marginLeft: "123px"}} />
                </Link>
                <div className="badge"><i className="ripple"></i></div>
            </div>
        </div>    
    </div>
    <CardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
    </>
    );

    }

export default PopularNfts;
