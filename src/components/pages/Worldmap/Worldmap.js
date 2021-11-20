import React, { useEffect, useState } from 'react';
import WorldMap from 'react-svg-worldmap';
import './Worldmap.css';

const tableHeaders = {
    '0': 'Total Cases',
    '1': 'Total Deaths',
    '2': 'Total Recovered',
    '3': 'Active Cases',
    '4': 'Total Tests',
};

function Worldmap() {
    const [covidData, setCovidData] = useState([]);
    const [dataType, setDataType] = useState('0');
    const [mapData, setMapData] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const pageSize = 7;

    useEffect(() => {
        async function getCovidData() {
            const response = await fetch("https://corona.lmao.ninja/v2/countries?yesterday=&sort=");
            const body = await response.json();
            setCovidData(body);
            generateWorldMap('0');
        }
        getCovidData();
    }, []);

    const handleSelect = (event) => {
        generateWorldMap(event.target.value);
    }

    const generateWorldMap = (type) => {
        setDataType(type);
        const data = [];
        const data2 = [];
        covidData.forEach(country => {
            let x = {
                country: country.countryInfo.iso2,
                value: undefined
            };

            let y = {
                flag: country.countryInfo.flag,
                country: country.country,
                value: undefined
            };

            switch (type) {
                case '0': x.value = country.cases
                    y.value = country.cases
                    break;
                case '1': x.value = country.deaths
                    y.value = country.deaths
                    break;
                case '2': x.value = country.recovered
                    y.value = country.recovered
                    break;
                case '3': x.value = country.active
                    y.value = country.active
                    break;
                case '4': x.value = country.tests
                    y.value = country.tests
                    break;
                default:
                    break;
            }
            if (x.country && x.value && y.country && y.flag) {
                data.push(x);
                data2.push(y);
            }
        });
        data2.sort((a, b) => {
            if (a.value > b.value)
                return -1
            if (a.value < b.value)
                return 1
            return 0
        })
        setMapData(data)
        setTableData(data2);
    }

    const getTableData = () => {
        if (tableData.length > 0) {
            return tableData.slice(pageNumber * pageSize, pageNumber * pageSize + pageSize).map(td =>
                <div className="country-data">
                    <img src={td.flag} style={{ maxWidth: 40 }} />
                    <p>{td.country}</p>
                    <p>{td.value}</p>
                </div>
            )
        }
        return null
    }

    const incrementPage = () => {
        if ((tableData.length - (pageNumber * pageSize)) <= pageSize) { }
        else setPageNumber(pageNumber + 1);

    }

    const decrementPage = () => {
        if (pageNumber === 0) { }
        else setPageNumber(pageNumber - 1)
    }

    return (
        <div className='world-map__section'>
            <div className='world-map__wrapper'>
                <div className="contagion-header" style={{ textAlign: 'center', width: '100%' }}>
                    <div className="top-line">Covid-19</div>
                    <h1 className="heading dark">Recent Covid Data</h1>
                    <select class="data-select" onChange={handleSelect}>
                        <option selected disabled>Select type of data</option>
                        <option value="0" >Total Cases</option>
                        <option value="1">Total Deaths</option>
                        <option value="2">Total Recovered</option>
                        <option value="3">Active Cases</option>
                        <option value="4">Total Tests</option>
                    </select>
                </div>
                <div className='world-map__container'>
                    <div className="map-container">
                        <WorldMap
                            color="red"
                            size="responsive"
                            data={mapData}
                        />
                    </div>
                    <div className="data-table">
                        <div className="data-table-header">
                            <h3>{tableHeaders[dataType]}</h3>
                            <div className="pagination-btns">
                                <btn className={pageNumber === 0 ? 'pagination-btn-left disabled' : 'pagination-btn-left'} onClick={decrementPage}>&lt;</btn>
                                <p>|</p>
                                <btn className={pageNumber === Math.floor(tableData.length / pageSize) ? 'pagination-btn-right disabled' : 'pagination-btn-right'} onClick={incrementPage}>&gt;</btn>
                            </div>
                        </div>
                        {getTableData()}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Worldmap;
