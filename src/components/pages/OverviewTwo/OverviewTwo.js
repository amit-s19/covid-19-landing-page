import React from 'react'
import './OverviewTwo.css';
function OverviewTwo() {
    return (
        <>
            <div className="container-fluid white-bg">
                <div className="row home__hero-row" style={{ flex: 'row', flexDirection: 'row-reverse' }}>
                    <div className="col pd-right">
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">What Is Covid-19</div>
                            <h1 className="heading dark">Coronavirus</h1>
                            <div className="covidImage" style={{ position: 'absolute', right: 0, }}><img src="images/covid.svg" alt="Vault" className="home__hero-img" /></div>
                            <p className="home__hero-subtitle dark">Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory illness now called COVID-19.Lauren Sauer, M.S., the director of operations with the Johns Hopkins Office of Critical Event Preparedness and Response</p>
                            <a href="/sign-up"><button className="btn-tomato-light">Learn More</button></a>
                            <div className="covidImage" style={{ position: 'absolute', right: 80, }}><img src="images/covidsm.svg" alt="Vault" className="home__hero-img" /></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="home__hero-img-wrapper"><img src="images/overviewTwo.svg" alt="Vault" className="home__hero-img" /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OverviewTwo
