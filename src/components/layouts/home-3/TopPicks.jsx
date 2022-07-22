import React , { useState , Fragment } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import CardModal from '../CardModal';


const TopPicks = props => {


    const data = props.data;
    return (
        <section className="top-picks-section tf-section popular-collection bg-home-3">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-3 top-picks-col3">
                        <div className="">
                            <h2 className="tf-title style2 toppicks-h2">Top Picks</h2>
                            <div className="heading-line"></div>
                        </div>
                        <div class="vertical-menu">
  <a href="#" class="active">Accounts</a>
  <a href="#">Heros</a>
  <a href="#">Items</a>
  <a href="#">Mounts</a>
</div>
                    </div>
                    <div className="col-md-9">
                        <div className="collection">
                        <Swiper
                            modules={[Navigation, Scrollbar, A11y]}
                            spaceBetween={30}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                  },
                                767: {
                                  slidesPerView: 2,
                                },
                                991: {
                                  slidesPerView: 3,
                                },
                              }}
                            navigation
                            scrollbar={{ draggable: true }}
                        >
                            {
                                data.map((item,index) => (
                                    <SwiperSlide key={index}>
                                        <PopularCollectionItem item={item} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
    );
}
TopPicks.propTypes = {
    data: PropTypes.array.isRequired,
}

const PopularCollectionItem = props => {
    const [modalShow, setModalShow] = useState(false);

return (
    <><div className="swiper-container show-shadow carousel4 button-arow-style">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <div className="slider-item">
                    <div className="sc-card-collection">
                        <Link to="#" onClick={() => setModalShow(true)}>
                            <div className="media-images-box">
                                <img src={props.item.imgtop} style={{ height: '300px' }} alt="Axies" />
                                {/* <div className="bottom-media">
                                    <img src={props.item.imgright1} alt="Axies" />
                                    <img src={props.item.imgright2} alt="Axies" />
                                    <img src={props.item.imgright3} alt="Axies" />
                                </div> */}
                            </div>
                        </Link>
                        {/* <div className="card-bottom">
                            <div className="author">
                                <div className="sc-author-box style-2">
                                    <div className="author-avatar">
                                        <img src={props.item.imgAuthor} alt="Axies" className="avatar" />
                                        <div className="badge"><i className="ripple"></i></div>
                                    </div>
                                </div>
                                <div className="content">
                                    <h4><Link to="#" onClick={() => setModalShow(true)}>{props.item.title}</Link></h4>
                                    <div className="infor">
                                        <span>Created by</span>
                                        <span className="name"><Link to="#" onClick={() => setModalShow(true)}>{props.item.name}</Link></span>
                                    </div>
                                </div>
                            </div>
                            <Link to="/login" className="wishlist-button public heart"><span className="number-like">{props.item.wishlist}</span></Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div><CardModal
            show={modalShow}
            onHide={() => setModalShow(false)} /></>


)
}
export default TopPicks;
