import { Card } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import React from 'react';

const Banner = () => (
  <Card className='pdCard'>
    <div>
      <div className='bannerPd'>
        <div className='title'>
          PatchDay /Help
        </div>
        <Button
          variant="outline-primary"
          className="storeButton"
          onClick={() => {
            window.location.href =
              'https://itunes.apple.com/us/app/patchday-hrt-schedule/id1253637065?mt=8';
          }}
        />
      </div>
    </div>
  </Card>
)

export default Banner;