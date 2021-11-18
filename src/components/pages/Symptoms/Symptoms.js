import React from 'react';
import './Symptoms.css';

function Symptoms() {
    return (
        <div className='pricing__section'>
            <div className='pricing__wrapper'>
                <div className="contagion-header" style={{ textAlign: 'center', width: '100%' }}>
                    <div className="top-line">Covid-19</div>
                    <h1 className="heading dark">Symptoms</h1>
                    <p className="dark" style={{ lineHeight: 2 }}>Corona viruses are a type of virus. There are many different kinds, and some cause disease.</p>
                    <p className="dark" style={{ lineHeight: 2 }}>A newly identified type has caused a recent outbreak of respiratory</p>
                </div>
                <div className='pricing__container'>
                    <img src="images/symptoms.png" style={{ maxWidth: '80%' }} />
                    <img src="images/sleft.png" style={{ maxWidth: '10%', position: 'absolute', left: 50, marginTop: '10%' }} />
                    <img src="images/sright.png" style={{ maxWidth: '10%', position: 'absolute', right: 50, marginTop: '20%' }} />
                </div>
            </div>
        </div>
    );
}
export default Symptoms;
