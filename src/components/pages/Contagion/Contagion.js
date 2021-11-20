import React, { useContext, useRef } from 'react';
import './Contagion.css';
import tabContext from '../../TabContext';
import useOnScreen from '../../CheckVisible';

function Contagion() {
  const { setTab } = useContext(tabContext);
  const ref = useRef()
  const isVisible = useOnScreen(ref)
  if (isVisible) {
    setTab("contagion");
  }
  return (
    <div className='contagion__section' id="contagion-page" ref={ref}>
      <div className="covIcon">
        <img src="images/covcontagion.png" style={{ maxWidth: 200 }} />
      </div>
      <div className='contagion__wrapper'>
        <div className="contagion-header" style={{ textAlign: 'center', width: '100%', paddingBottom: 50 }}>
          <div className="top-line">Covid-19</div>
          <h1 className="heading dark">Contagion</h1>
          <p className="dark" style={{ lineHeight: 2 }}>Corona viruses are a type of virus. There are many different kinds, and some cause disease.</p>
          <p className="dark" style={{ lineHeight: 2 }}>A newly identified type has caused a recent outbreak of respiratory</p>
        </div>
        <div className='contagion__container'>
          <div className='contagion__container-card'>
            <div className='contagion__container-cardInfo'>
              <img src="images/maskGirl.png" style={{ maxWidth: '70%', padding: '15px 0px 50px 0px' }} />
              <h3>Air Transmission</h3>
              <p>Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify</p>
            </div>
          </div>
          <div className='contagion__container-card'>
            <div className='contagion__container-cardInfo'>
              <img src="images/handWash.png" style={{ maxWidth: '62%', padding: '15px 0px 50px 0px' }} />
              <h3>Human Contacts</h3>
              <p>Washing your hands is one of the simplest ways you can protect</p>
            </div>
          </div>
          <div className='contagion__container-card'>
            <div className='contagion__container-cardInfo'>
              <img src="images/noseRag.png" style={{ maxWidth: '70%', padding: '15px 0px 50px 0px' }} />
              <h3>Contaminated Objects</h3>
              <p>Use the tissue while sneezing, in this way you can protect your droplets.</p>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}
export default Contagion;
