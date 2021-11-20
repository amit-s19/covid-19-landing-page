import React, { useContext, useRef } from 'react';
import './Precautions.css';
import useWindowDimensions from '../../UseDimensions';
import tabContext from '../../TabContext';
import useOnScreen from '../../CheckVisible';

function Precautions() {
    const { setTab } = useContext(tabContext);
    const { width } = useWindowDimensions();
    const ref = useRef()
    const isVisible = useOnScreen(ref)
    if (isVisible) {
        setTab("prevention");
    }
    return (
        <div className='precautions__section' id="prevention-page" ref={ref}>
            <div className='precautions__wrapper'>
                <div className="contagion-header" style={{ textAlign: 'center', width: '100%' }}>
                    <div className="top-line">Covid-19</div>
                    <h1 className="heading dark">What Should We Do</h1>
                    <p className="dark" style={{ lineHeight: 2 }}>Corona viruses are a type of virus. There are many different kinds, and some cause disease.</p>
                    <p className="dark" style={{ lineHeight: 2 }}>A newly identified type has caused a recent outbreak of respiratory</p>
                </div>
                <div className='precautions__container'>
                    <div className="precautions-row">
                        <div className="precaution-info rpd">
                            <div className="center-image">
                                <img src="images/pr1.svg" className="precaution-number" />
                            </div>
                            <div className="precautions-text">
                                <h3>Wear Masks</h3>
                                <p>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively </p>
                            </div>
                        </div>
                        {
                            Number(width) < 768 ? <div className="center-image"><img src="images/pr1image.png" className="precaution-image"></img></div> : <img src="images/pr1image.png" className="precaution-image"></img>
                        }
                    </div>
                    <img src="images/greenCovid.png" className="cov-left" />
                    <div className="precautions-row">
                        {Number(width) > 768 ? <img src="images/pr2image.png" className="precaution-image"></img> : null}
                        <div className="precaution-info lpd">
                            <div className="center-image">
                                <img src="images/pr2.png" className="precaution-number" />
                            </div>
                            <div className="precautions-text">
                                <h3>Wash Your Hands</h3>
                                <p>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively </p>
                            </div>
                        </div>
                        {Number(width) < 768 ? <div className="center-image"><img src="images/pr2image.png" className="precaution-image" /> </div> : null}
                    </div>
                    <div className="precautions-row">
                        <div className="precaution-info rpd">
                            <div className="center-image">
                                <img src="images/pr3.png" className="precaution-number" />
                            </div>
                            <div className="precautions-text">
                                <h3>Use Nose-Rag</h3>
                                <p>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively </p>
                            </div>
                        </div>
                        {
                            Number(width) < 768 ? <div className="center-image">
                                <img src="images/pr3image.png" className="precaution-image"></img>
                            </div> : <img src="images/pr3image.png" className="precaution-image"></img>
                        }
                    </div>
                    <img src="images/covsm.png" className="cov-right-sm" />
                    <img src="images/covright.png" className="cov-right" />
                    <div className="precautions-row">
                        {Number(width) > 768 ? <img src="images/pr4image.png" className="precaution-image"></img> : null}
                        <div className="precaution-info lpd">
                            <div className="center-image">
                                <img src="images/pr4.png" className="precaution-number" />
                            </div>
                            <div className="precautions-text">
                                <h3>Avoid Contacts</h3>
                                <p>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively </p>
                            </div>
                        </div>
                        {Number(width) < 768 ? <div className="center-image"><img src="images/pr4image.png" className="precaution-image" /> </div> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Precautions;
