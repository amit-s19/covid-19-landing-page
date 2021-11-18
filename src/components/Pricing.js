import React from 'react';
import './Pricing.css';
import { IconContext } from 'react-icons/lib';

function Pricing() {
  return (

    <div className='pricing__section'>
      <div className='pricing__wrapper'>
        <div className="contagion-header" style={{ textAlign: 'center', width: '100%', paddingBottom: 50 }}>
          <div className="top-line">Covid-19</div>
          <h1 className="heading dark">Contagion</h1>
          <p className="dark" style={{ lineHeight: 2 }}>Corona viruses are a type of virus. There are many different kinds, and some cause disease.</p>
          <p className="dark" style={{ lineHeight: 2 }}>A newly identified type has caused a recent outbreak of respiratory</p>
        </div>
        <div className='pricing__container'>
          <div className='pricing__container-card'>
            <div className='pricing__container-cardInfo'>
              <img src="images/maskGirl.png" style={{ maxWidth: '70%', padding: '15px 0px 50px 0px' }} />
              <h3>Air Transmission</h3>
              <p>Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify</p>
            </div>
          </div>
          <div className='pricing__container-card'>
            <div className='pricing__container-cardInfo'>
              <img src="images/handWash.png" style={{ maxWidth: '62%', padding: '15px 0px 50px 0px' }} />
              <h3>Human Contacts</h3>
              <p>Washing your hands is one of the simplest ways you can protect</p>
            </div>
          </div>
          <div className='pricing__container-card'>
            <div className='pricing__container-cardInfo'>
              <img src="images/noseRag.png" style={{ maxWidth: '70%', padding: '15px 0px 50px 0px' }} />
              <h3>Contaminated Objects</h3>
              <p>Use the tissue while sneezing, in this way you can protect your droplets.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pricing;
