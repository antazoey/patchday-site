import React from 'react';
import { Button } from 'react-bootstrap';
import { hot } from 'react-hot-loader';
import { Card } from '@material-ui/core'
import styles from 'Styles/App.css';  // Unused import ok
import FindSettings from 'Images/find_settings.png'
import SetSettings from 'Images/set_settings.png'
import SelectedPillsTab from 'Images/selected_pills_tab.png'
import NewPillButton from 'Images/new_pill_button.png'
import DefaultPills from 'Images/default_pills.png'
import SetPillProps from 'Images/set_pill_props.png'
import SimpleSites from 'Images/simple_sites.png'
import DoubleSites from 'Images/double_sites.png'

const App = () => (
  <div>
    <Card>
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
    <Card>
      <div><h2 className='title'>Contents</h2></div>
      <ul><a href="#ConfigureHormones">Configure Hormone Settings</a></ul>
      <ul><a href="#ConfigurePills">Configure Pill Settings</a></ul>
      <ul><a href="#ConfigureSites">Configure Site Settings</a></ul>
    </Card>
    <br/>
    <Card id="ConfigureHormones">
      <a title="ConfigureHormoneSettings" />
      <div><h2 className='title'>Configure Hormone Settings</h2></div>
      <p>
        Tap the gear icon in the top right of the main screen to modify settings
        for the hormone schedule.
      </p>
      <img src={FindSettings} alt={"Find settings"} />
      <p>
        Make sure to set the correct Delivery Method, Expiration Interval, and
        Quantity.
      </p>
      <img src={SetSettings} alt="Set Settings"/>
    </Card>
    <br/>
    <Card id="ConfigurePills">
      <div><h2 className='title'>Configure Pill Settings</h2></div>
      <p>Tap the center Pills tab to navigate to the Pills View.</p>
      <img src={SelectedPillsTab} alt="Pills Tab" />
      <p>Select a pill from the list to edit or take it.</p>
      <img src={DefaultPills} alt="Default pills" />
      <p>Or, to add pills, use the plus arrow in the top right corner of the Pills View.</p>
      <img src={NewPillButton} alt="New pill button" />
      <p>By inserting a new pill (or tapping on / editing a current pill), you
        can adjust its properties.
      </p>
      <img src={SetPillProps} alt="Set pill props" />
    </Card>
    <br/>
    <Card id="ConfigureSites">
      <div><h2 className='title'>Configure Site Settings</h2></div>
      <p>
        Create sites to match the order you wish to have autofill work.
        Edit site details by tapping one of the sites or inserting a new site
        with the green plus button.
      </p>
      <p>Change the site name or image associated with it.</p>
      <img src={SimpleSites} alt="Simple sites" />
      <p>Another use case might be that you use the same site 2x in a row.
      Here is how you would achieve that: Add more sites with the green plus
      button and then use the name picker to select the names of the other sites.
      Also choose the corresponding site image if you want the full effect.
      Here is what that would look like:
      </p>
      <img src={DoubleSites} alt="Double sites" />
    </Card>
  </div>
);

export default hot(module)(App);