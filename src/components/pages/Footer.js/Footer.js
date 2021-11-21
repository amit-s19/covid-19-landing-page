import React from 'react';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';

function Footer() {
  return (
    <div className='footer-container'>
      <div className="csmlight">
        <img src="images/csmlight.png" />
      </div>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Have Question in mind?
        </p>
        <p className='footer-subscription-heading'>
          Let us help you
        </p>
        <div className='input-areas'>
          <form>
            <div className="form-wrapper">
              <input
                className='footer-input'
                type='email'
                placeholder='snmonydemo@gmail.com'
              />
              <div className='btn-wrapper'>
                <btn>Send</btn>
              </div>
            </div>
          </form>
        </div>
      </section>
      <div className="csmlight2">
        <img src="images/csmlight2.png" />
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <div className='social-logo'>
              <img src="images/covIcon.png" />&nbsp;&nbsp;
              COVID-19
            </div>
          </div>
          <HashLink smooth to ="/" className='footer-tab-links'>Overview</HashLink>
          <HashLink smooth to ="/" className='footer-tab-links'>Symptoms</HashLink>
          <HashLink smooth to ="/" className='footer-tab-links'>Prevention</HashLink>
          <HashLink smooth to ="/" className='footer-tab-links'>Treatment</HashLink>
          <div className='social-icons'>
            <img src="images/fb.png" />
            <img src="images/yt.png" />
            <img src="images/vm.png" />
            <img src="images/twitter.png" />
          </div>
        </div>
      </section>
      <p className="copyright">2020 @ All rights reserved by pixelspark.co</p>
    </div>
  );
}

export default Footer;
