import React from 'react';
import { overviewOne, homeObjTwo, overviewTwo, homeObjFour } from './Data';
import Pricing from '../../Pricing';
import OverviewOne from '../OverviewOne/OverviewOne';
import OverviewTwo from '../OverviewTwo/OverviewTwo';
import Symptoms from '../Symptoms/Symptoms';
import Precautions from '../Precautions/Precautions';

function Home() {
  return (
    <>
      <OverviewOne />
      <OverviewTwo />
      <Pricing />
      <Symptoms />
      <Precautions />
    </>
  );
}

export default Home;
