import { Card } from '@material-ui/core';
import React from 'react';

const PrivacyPolicy = () => (
  <Card id='PrivacyPolicy' className='footer'>
    <div><h2 className='title'>Privacy Policy</h2></div>
    <p>
      I, <a href='https://juliyasmith.com'>Juliya Smith</a>, the developer of{' '}
      <a href='https://apps.apple.com/us/app/patchday-hrt-schedule/id1253637065'>PatchDay - HRT Schedule</a>{' '}
      do not collect, view, sell, or use any user data.
    </p>
    <p>
      All user data is stored locally on the iOS device that installs the app.
    </p>
  </Card>
)

export default PrivacyPolicy
