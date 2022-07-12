import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import liveAuctionData from '../assets/fake-data/data-live-auction';
import heroSliderData from '../assets/fake-data/data-slider-3';
import Create from '../components/layouts/home-2/Create';
import LiveAuction from '../components/layouts/home-3/LiveAuction';
import TopSeller from '../components/layouts/home-3/TopSeller';
import Slider from '../components/slider/Slider';
import topSellerData from '../assets/fake-data/data-top-seller';
import popuplarNftsData from '../assets/fake-data/popularNftsData';
import TodayPicks from '../components/layouts/home-3/TodayPicks';
import Popularnfts from '../components/layouts/home-3/PopularNfts';
import todayPickData from '../assets/fake-data/data-today-pick';
import PopularCollection from '../components/layouts/home-3/PopularCollection';
import TopPicks from '../components/layouts/home-3/TopPicks';
import popularCollectionData from '../assets/fake-data/data-popular-collection';
import EarlyAccess from '../components/EarlyAccess';
import CallToAction from '../components/CallToAction';
import Scholarship from '../components/scholarship';


const Home03 = () => {
    return (
        <div className='home-3'>
            <Header />
            <Slider data={heroSliderData} />
            <Create />
            <TopPicks data={popularCollectionData} />
            <Scholarship/>
            <Popularnfts data={popuplarNftsData} />
            <CallToAction/>
            {/* <LiveAuction data={liveAuctionData} /> */}
            {/* <EarlyAccess/>
            <PopularCollection data={popularCollectionData} />
            <EarlyAccess/> */}
            <TopSeller data={topSellerData} />
            <Footer />
        </div>
    );
}

export default Home03;
