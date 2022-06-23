import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import CardModal from '../CardModal';

const TodayPicks = props => {
    const data = props.data;

    const [visible, setVisible] = useState(8);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    }

    const [modalShow, setModalShow] = useState(false);

    return (
        <Fragment>
            <section className="tf-section sc-explore-1">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="wrap-box explore-1 flex mg-bt-40">
                                <div className="seclect-box style-1">


                                    <div id="buy" className="dropdown">
                                        <Link to="#" className="btn-selector nolink">Select Game</Link>
                                    </div>

                                    <div id="buy" className="dropdown">
                                        <Link to="#" className="btn-selector nolink">Select Region</Link>
                                        <ul >
                                            <li><span>Asia</span></li>
                                            <li><span>MEA</span></li>
                                            <li><span>EU</span></li>
                                            <li><span>AS</span></li>
                                        </ul>
                                    </div>

                                    <div id="all-items" className="dropdown">
                                        <Link to="#" className="btn-selector nolink">Select Server</Link>
                                    </div>



                                </div>
                                <div className="seclect-box style-2 box-right">
                                    <div id="item_category" className="dropdown">
                                        <Link to="#" className="btn-selector nolink">Categories</Link>
                                        <ul >
                                            <li>Item/NFT</li>
                                            <li>Currency</li>
                                            <li>Character</li>
                                            <li>Account/Keys</li>
                                        </ul>
                                    </div>
                                    <div id="item_category" className="dropdown">
                                        <Link to="#" className="btn-selector nolink">Payment</Link>
                                        <ul >
                                            <li>Crypto</li>
                                            <li>Paypal</li>
                                            <li>Visa</li>
                                            <li>Mastercard</li>
                                            <li>Google Pay</li>
                                            <li>Apple Pay</li>
                                            <li>Amex</li>
                                        </ul>
                                    </div>

                                    <div id="artworks" className="dropdown">
                                        <Link to="#" className="btn-selector nolink">All Artworks</Link>
                                        <ul >
                                            <li><span>Abstraction</span></li>
                                            <li><span>Skecthify</span></li>
                                            <li><span>Patternlicious</span></li>
                                            <li><span>Virtuland</span></li>
                                            <li><span>Papercut</span></li>
                                        </ul>
                                    </div>

                                    <div id="sort-by" className="dropdown">
                                        <Link to="#" className="btn-selector nolink">Sort by</Link>
                                        <ul >
                                            <li><span>Top rate</span></li>
                                            <li><span>Mid rate</span></li>
                                            <li><span>Low rate</span></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {
                            data.slice(0, visible).map((item, index) => (
                                <div key={index} className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className={`sc-card-product ${item.feature ? 'comingsoon' : ''} `}>
                                        <div className="card-media">
                                            <Link to="#" onClick={() => setModalShow(true)}><img src={item.img} alt="axies" /></Link>
                                            <Link to="#" onClick={() => setModalShow(true)} className="wishlist-button heart"><span className="number-like">{item.wishlist}</span></Link>
                                            <div className="coming-soon">{item.feature}</div>
                                        </div>
                                        <div className="card-title">
                                            <h5 className="style2"><Link to="#" onClick={() => setModalShow(true)}>"{item.title}"</Link></h5>
                                            <div className="tags">{item.tags}</div>
                                        </div>
                                        <div className="meta-info">
                                            <div className="author">
                                                <div className="avatar">
                                                    <img src={item.imgAuthor} alt="axies" />
                                                </div>
                                                <div className="info">
                                                    <span>Owned By</span>
                                                    <h6> <Link to="#" onClick={() => setModalShow(true)}>{item.nameAuthor}</Link> </h6>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <span>Current Bid</span>
                                                <h5> {item.price}</h5>
                                            </div>
                                        </div>
                                        <div className="card-bottom">
                                            <button onClick={() => setModalShow(true)} className="sc-button style bag fl-button pri-3 no-bg"><span>Place Bid</span></button>
                                            <Link to="#" className="view-history reload">View History</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        {
                            visible < data.length &&
                            <div className="col-md-12 wrap-inner load-more text-center">
                                <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                            </div>
                        }
                    </div>
                </div>
            </section>
            <CardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Fragment>
    );
}



TodayPicks.propTypes = {
    data: PropTypes.array.isRequired,
}


export default TodayPicks;
