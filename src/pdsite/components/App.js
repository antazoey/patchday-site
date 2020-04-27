import React from 'react';
import { Button } from 'react-bootstrap';
import { hot } from 'react-hot-loader';
import styles from 'Styles/App.css';

const App = () => (
  <div>
    <div className='bannerPd'>
      <div className='title'>
        PatchDay Help
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
    <div className="main">
      <h2>Use cases</h2>
      <hr/>
      <h3>3 Estrogen patches + Spironolactone and Progesterone</h3>
      <p>
        In this example, we will set up PatchDay to handle scheduling 3 estrogen patches that expire every half-week, 1
        Spironolactone a-day, and one Progesterone a-day for the first ten days of each month.
      </p>
    </div>
  </div>
);

export default hot(module)(App);