import { Card } from '@material-ui/core';
import FindSettings from 'Images/find_settings.png';
import SetSettings from 'Images/set_settings.png';
import React from 'react';
import Image from 'react-bootstrap/Image';

const HormonesCard = () => (
  <Card id='Hormones' className='pdCard'>
    <a title='Settings' />
    <h2 className='title'>Hormone and Global Settings</h2>
    <p>
      Tap the gear icon in the top right of the main screen to modify settings
      for the hormone schedule.
    </p>
    <p>
      Make sure to set the correct Delivery Method, Expiration Interval, and
      Quantity.
    </p>
    <Image src={FindSettings} alt='Find settings' />
    <Image src={SetSettings} alt='Set Settings' />
  </Card>
)

export default HormonesCard
