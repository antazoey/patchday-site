import React from 'react';
import { hot } from 'react-hot-loader';
import Banner from 'Components/Banner';
import TocCard from 'Components/TocCard';
import HormonesCard from 'Components/HormonesCard';
import PillsCard from 'Components/PillsCard';
import SitesCard from 'Components/SitesCard';
import PrivacyPolicy from 'Components/PrivacyPolicy';
import styles from 'Styles/App.css';

const App = () => (
  <div>
    <Banner />
    <TocCard />
    <HormonesCard />
    <PillsCard />
    <SitesCard />
    <PrivacyPolicy />
  </div>
);

export default hot(module)(App);