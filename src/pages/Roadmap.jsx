

import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';


const Roadmap = () => {

    window.location.replace('https://drive.google.com/file/d/1NmHjxOQlzCVUeelPnLdjCpN00uFCY4B-/view?usp=sharing');

    return (
        <div className='item-details'>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Roadmap</h1>
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

export default Roadmap;
