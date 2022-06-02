

import React, { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';


const Whitepaper = () => {

    window.location.replace('https://drive.google.com/file/d/1ILYUnIxMHtN1Bnx5WFqBGqCuqn8zRowg/view?usp=sharing');

    return (
        <div className='item-details'>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Whitepaper</h1>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>

<h1>Loading</h1>

            <Footer />
        </div>
    );
}

export default Whitepaper;
