import { Card } from '@material-ui/core';
import React from 'react';

const TocCard = () => (
  <Card className='pdCard'>
    <div><h2 className='title'>Contents</h2></div>
    <ul><a href="#ConfigureHormones">Configure Hormone Settings</a></ul>
    <ul><a href="#ConfigurePills">Configure Pill Settings</a></ul>
    <ul><a href="#ConfigureSites">Configure Site Settings</a></ul>
    <ul><a href="#PrivacyPolicy">Privacy Policy</a></ul>
  </Card>
)

export default TocCard
