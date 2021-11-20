import React from 'react';
import Contagion from '../Contagion/Contagion';
import OverviewOne from '../OverviewOne/OverviewOne';
import OverviewTwo from '../OverviewTwo/OverviewTwo';
import Symptoms from '../Symptoms/Symptoms';
import Precautions from '../Precautions/Precautions';
import Worldmap from '../Worldmap/Worldmap';

function Home() {
  return (
    <>
      <OverviewOne />
      <OverviewTwo />
      <Contagion />
      <Symptoms />
      <Precautions />
      <Worldmap />
    </>
  );
}

export default Home;
