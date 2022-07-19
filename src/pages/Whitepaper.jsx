

import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';


const Whitepaper = () => {

    window.location.replace('https://ocean-wave-tkn.gitbook.io/whitepaper-the-metaverse-exchange-dao/');

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
