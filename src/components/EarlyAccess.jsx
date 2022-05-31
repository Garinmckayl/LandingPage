import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Modal from 'react-bootstrap/Modal'


function MyVerticallyCenteredModal(props) {
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Early Access
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Sign Up</h4>
          <p>
            

          <div>
        {/* Begin Mailchimp Signup Form */}
        <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css" rel="stylesheet" type="text/css" />
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:600px;}\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n" }} />
        <div id="mc_embed_signup">
          <form action="https://team.us4.list-manage.com/subscribe/post?u=a45ca27fcc08e4bed1fc56b51&id=489c458b92" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
              <h2>Subscribe</h2>
              <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span>
                </label>
                <input type="email" defaultValue name="EMAIL" className="required email" id="mce-EMAIL" />
              </div>
              <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response" style={{display: 'none'}} />
                <div className="response" id="mce-success-response" style={{display: 'none'}} />
              </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
              <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_a45ca27fcc08e4bed1fc56b51_489c458b92" tabIndex={-1} defaultValue /></div>
              <div className="optionalParent">
                <div className="clear foot">
                  <input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                  <p className="brandingLogo"><a href="http://eepurl.com/hgopMr" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" /></a></p>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/*End mc_embed_signup*/}
      </div>
    
          </p>
        </Modal.Body>
        <Modal.Footer>
          <a onClick={props.onHide}>Close</a>
        </Modal.Footer>
      </Modal>
    );
  }

const EarlyAccess = () => {

    const [modalShow, setModalShow] = React.useState(false);

    
    return (
        <div>
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12 align-item-center">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Signup</h1>
                            </div>
                            <a onClick={() => setModalShow(true)} className="sc-button style-2 fl-button pri-3" style={{border: "2px solid #fff"}}>
                                            <span style={{color: "#fff"}}>Register</span>
                                        </a>

                        </div>
                    </div>
                </div>                    
            </section>
            





      <a variant="primary" onClick={() => setModalShow(true)}>
      </a>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

        </div>
    );
}

export default EarlyAccess;
