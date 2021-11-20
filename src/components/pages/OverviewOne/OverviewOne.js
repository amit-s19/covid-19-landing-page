import React, { useRef, useContext } from 'react'
import './OverviewOne.css';
import '../../Button.css';
import tabContext from '../../TabContext';
import useOnScreen from '../../CheckVisible';

function OverviewOne() {
    const { setTab } = useContext(tabContext);
    const ref = useRef()
    const isVisible = useOnScreen(ref)
    if (isVisible) {
        setTab("overview");
    }
    return (
        <>
            <div className="container-fluid gradient-bg" id="overview-page" ref={ref}>
                <div className="row home__hero-row" style={{ display: 'flex', flexDirection: 'row' }}>
                    <div className="col pd-left">
                        <div class="home__hero-text-wrapper">
                            <div class="top-line">COVID-19 Alert</div>
                            <h1 class="heading">Stay At Home Quarantine To Stop Corona Virus</h1>
                            <p class="home__hero-subtitle dark">There is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to .</p>
                            <a href="/sign-up"><button class="btn-tomato">Let Us Help</button></a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="home__hero-img-wrapper"><img src="images/svg-1.svg" alt="covidIllustration" class="home__hero-img" /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OverviewOne
