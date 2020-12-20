import { Card } from '@material-ui/core';
import SelectedPillsTab from 'Images/selected_pills_tab.png';
import DefaultPills from 'Images/default_pills.png';
import NewPillButton from 'Images/new_pill_button.png';
import SetPillProps from 'Images/set_pill_props.png';
import React from 'react';

const PillsCard = () => (
  <Card id='ConfigurePills'>
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
)

export default PillsCard
