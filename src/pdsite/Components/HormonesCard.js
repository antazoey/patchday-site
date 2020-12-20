import { Card } from '@material-ui/core';
import FindSettings from 'Images/find_settings.png';
import SetSettings from 'Images/set_settings.png';
import React from 'react';

const HormonesCard = () => (
  <Card id='ConfigureHormones' className='pdCard'>
    <a title='ConfigureHormoneSettings' />
    <div><h2 className='title'>Configure Hormone Settings</h2></div>
    <p>
      Tap the gear icon in the top right of the main screen to modify settings
      for the hormone schedule.
    </p>
    <img src={FindSettings} alt={"Find settings"} className='horizontal' />
    <p>
      Make sure to set the correct Delivery Method, Expiration Interval, and
      Quantity.
    </p>
    <img src={SetSettings} alt="Set Settings" className='horizontal' />
  </Card>
)

export default HormonesCard
