import React from 'react';
import './Precautions.css';
import useWindowDimensions from '../../UseDimensions';
function Precautions() {

    const { height, width } = useWindowDimensions();

    return (
        <div className='pricing__section'>
            <div className='pricing__wrapper'>
                <div className="contagion-header" style={{ textAlign: 'center', width: '100%' }}>
                    <div className="top-line">Covid-19</div>
                    <h1 className="heading dark">What Should We Do</h1>
                    <p className="dark" style={{ lineHeight: 2 }}>Corona viruses are a type of virus. There are many different kinds, and some cause disease.</p>
                    <p className="dark" style={{ lineHeight: 2 }}>A newly identified type has caused a recent outbreak of respiratory</p>
                </div>
                <div className='precautions__container'>
                    <div className="precautions-row">
                        <div className="precaution-info">
                            <img src="images/pr1.svg" style={{ maxWidth: '60px', maxHeight: '60px' }} />
                            <div className="precautions-text">
                                <h3>Wear Masks</h3>
                                <p>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively </p>
                            </div>
                        </div>
                        <img src="images/pr1image.png" style={{ maxWidth: '30%' }}></img>
                    </div>
                    <div className="precautions-row">
                        {Number(width) > 768 ? <img src="images/pr2image.png" style={{ maxWidth: '30%' }}></img> : null}
                        <div className="precaution-info">
                            <img src="images/pr2.png" style={{ maxWidth: '60px', maxHeight: '60px' }} />
                            <div className="precautions-text">
                                <h3>Wash Your Hands</h3>
                                <p>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively </p>
                            </div>
                        </div>
                        {Number(width) < 768 ? <img src="images/pr2image.png" style={{ maxWidth: '50%' }} /> : null}
                    </div>
                    <div className="precautions-row">
                        <div className="precaution-info">
                            <img src="images/pr3.png" style={{ maxWidth: '60px', maxHeight: '60px' }} />
                            <div className="precautions-text">
                                <h3>Use Nose-Rag</h3>
                                <p>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively </p>
                            </div>
                        </div>
                        <img src="images/pr3image.png" style={{ Width: '100%', maxHeight: '50%' }}></img>
                    </div>
                    <div className="precautions-row">
                        {Number(width) >768 ? <img src="images/pr4image.png" style={{ maxWidth: '30%', marginRight: 100 }}></img> : null }
                        <div className="precaution-info">
                            <img src="images/pr4.png" style={{ maxWidth: '60px', maxHeight: '60px' }} />
                            <div className="precautions-text">
                                <h3>Avoid Contacts</h3>
                                <p>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively </p>
                            </div>
                        </div>
                        {Number(width) < 768 ? <img src="images/pr4image.png" style={{ maxWidth: '100%' }} /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Precautions;
