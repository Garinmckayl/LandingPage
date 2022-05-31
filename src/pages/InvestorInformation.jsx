// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';


// function InvestorInformation() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div>
//       <Document file="https://github.com/Garinmckayl/thebladedaolanding/raw/master/src/assets/TheRedBladeDAO%20-%20IRInformation.pptx.pdf" onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// }

// export default InvestorInformation;


import React, { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LiveAuction from '../components/layouts/LiveAuction';
import img1 from '../assets/images/avatar/avt-3.jpg'
import img2 from '../assets/images/avatar/avt-11.jpg'
import img3 from '../assets/images/avatar/avt-1.jpg'
import img4 from '../assets/images/avatar/avt-5.jpg'
import img5 from '../assets/images/avatar/avt-7.jpg'
import img6 from '../assets/images/avatar/avt-8.jpg'
import img7 from '../assets/images/avatar/avt-2.jpg'
import imgdetail1 from '../assets/images/box-item/images-item-details.jpg'

const InvestorInformation = () => {

    window.location.replace('https://drive.google.com/file/d/1JdJkRRFL7qMtSkafDMZ4BycqIXfxzAo4/view?usp=sharing');


    const [dataHistory] = useState(
        [
            {
                img: img1,
                name:"Mason Woodward",
                time: "8 hours ago",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
            {
                img: img2,
                name:"Mason Woodward",
                time: "at 06/10/2021, 3:20 AM",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
            {
                img: img3,
                name:"Mason Woodward",
                time: "8 hours ago",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
            {
                img: img4,
                name:"Mason Woodward",
                time: "8 hours ago",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
            {
                img: img5,
                name:"Mason Woodward",
                time: "8 hours ago",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
            {
                img: img6,
                name:"Mason Woodward",
                time: "8 hours ago",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
        ]
    )
    return (
        <div className='item-details'>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Investor Information</h1>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>


            <div className="tf-section tf-item-details">
                <div className="themesflat-container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-md-12">
                            <div className="content-center">
                            <h3>our ppt-pitchdeck as pdf, so that people can scroll down, reference:
File is attached as pdf</h3><br />

<a href="https://www.ludenaprotocol.io/wp-content/uploads/2022/01/Ludena-Protocol-White-Paper-2.5.pdf" target="_blank" className="sc-button header-slider style style-2 note fl-button pri-1"><span>Investor Information
                                        </span></a><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </div>
    );
}

export default InvestorInformation;
