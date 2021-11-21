import React, { useRef, useContext } from 'react';
import './Symptoms.css';

import tabContext from '../../TabContext';
import useOnScreen from '../../CheckVisible';

function Symptoms() {
    const { setTab } = useContext(tabContext);
    const ref = useRef()
    const isVisible = useOnScreen(ref)
    if (isVisible) {
        setTab("symptoms");
    }
    return (
        <div className='symptoms__section' id="symptoms-page" ref={ref}>
            <div className='symptoms__wrapper'>
                <div className="contagion-header" style={{ textAlign: 'center', width: '100%' }}>
                    <div className="top-line">Covid-19</div>
                    <h1 className="heading dark">Symptoms</h1>
                    <p className="dark" style={{ lineHeight: 2 }}>Corona viruses are a type of virus. There are many different kinds, and some cause disease.</p>
                    <p className="dark" style={{ lineHeight: 2 }}>A newly identified type has caused a recent outbreak of respiratory</p>
                </div>
                <div className='symptoms__container'>
                    <img src="images/symptoms.png" style={{ maxWidth: '80%' }} />
                    <div className="sleft">
                        <img src="images/sleft.png" />
                    </div>
                    <div className="sright">
                        <img src="images/sright.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Symptoms;
