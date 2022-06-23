import React, { useState, useEffect, useRef } from 'react';
import { Modal } from "react-bootstrap";
import { Button, Form } from 'react-bootstrap';

const CardModal = (props) => {
    const [isComplete, setIsComplete] = useState(true);
    const submit = () => {
        setIsComplete(false)
        const form = document.getElementById('mc-embedded-subscribe-form');
        form.submit()
    }
    const onHide = () => {
        setIsComplete(true)
        props.onHide()
    }


    return (

        <Modal
            show={props.show}
            onHide={onHide}
            style={{ height: "195px" }}
        >
            <Modal.Header closeButton>
                <h4 className="modal__header">Sign up for early access</h4>
            </Modal.Header>

            <form autocomplete="off" action="https://team.us4.list-manage.com/subscribe/post?u=a45ca27fcc08e4bed1fc56b51&id=489c458b92" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate className="validate  early__sign__up__form__modal">
                <input type="email" name="EMAIL" class="user__email" id="mce-EMAIL" placeholder='Email' typee="email" />
                {isComplete ?
                    <div >
                        <Button type="submit" onClick={submit} className="signin__button">
                            <i className="fas fa-arrow-right" style={{ fontSize: "24px" }}></i>
                        </Button>
                    </div>
                    :
                    <Button onClick={() => window.open('https://discord.com/invite/PNHvcp8KXq')} className="discord__button">
                        <a> <span><i className="icon-fl-vt"></i></span><span>You are now on the waitlist! Click here to join our Discord!</span></a>
                    </Button>
                }
            </form>
        {/* <div className="modal-body space-y-20 pd-40">
        <h3>Place a Bid</h3>
        <p className="text-center">You must bid at least <span className="price color-popup">4.89 ETH</span>
        </p>
        <input type="text" className="form-control"
            placeholder="00.00 ETH" />
        <p>Enter quantity. <span className="color-popup">5 available</span>
        </p>
        <input type="number" className="form-control" placeholder="1" />
        <div className="hr"></div>
        <div className="d-flex justify-content-between">
            <p> You must bid at least:</p>
            <p className="text-right price color-popup"> 4.89 ETH </p>
        </div>
        <div className="d-flex justify-content-between">
            <p> Service free:</p>
            <p className="text-right price color-popup"> 0,89 ETH </p>
        </div>
        <div className="d-flex justify-content-between">
            <p> Total bid amount:</p>
            <p className="text-right price color-popup"> 4 ETH </p>
        </div>
        <Link to="/wallet-connect" className="btn btn-primary" data-toggle="modal" data-target="#popup_bid_success" data-dismiss="modal" aria-label="Close"> Place a bid</Link>
    </div> */}
        </Modal>

    );
};

export default CardModal;
