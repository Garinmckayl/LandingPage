

import React, { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';


const CSGO = () => {


    return (
        <div className='item-details'>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">CS GO</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="tf-section tf-item-details content-section">
                <div className="themesflat-container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-md-12">
                            <div className="content-center">
                                <h1>Coming Soon</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <Footer />
        </div>
    );
}

export default CSGO;
