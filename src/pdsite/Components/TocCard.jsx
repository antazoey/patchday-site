import { Card } from '@material-ui/core';
import React from 'react';

const TocCard = () => (
  <Card className='pdCard'>
    <h2 className='title'>Contents</h2>
    <ul><a href="#Hormones">Configure Hormone Settings</a></ul>
    <ul><a href="#Pills">Configure Pill Settings</a></ul>
    <ul><a href="#Sites">Configure Site Settings</a></ul>
    <ul><a href="#PrivacyPolicy">Privacy Policy</a></ul>
  </Card>
)

export default TocCard
