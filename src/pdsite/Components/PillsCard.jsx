import { Card } from '@material-ui/core';
import SelectedPillsTab from 'Images/selected_pills_tab.png';
import DefaultPills from 'Images/default_pills.png';
import NewPillButton from 'Images/new_pill_button.png';
import SetPillProps from 'Images/set_pill_props.png';
import React from 'react';

const PillsCard = () => (
  <Card id='Pills' className='pdCard'>
      <h2 className='title'>Pill Settings</h2>
      <p>Tap the center Pills tab to navigate to the Pills View.</p>
      <p>Select a pill from the list to edit or take it.</p>
      <p>Or, to add pills, use the plus arrow in the top right corner of the Pills View.</p>
      <p>By inserting a new pill (or tapping on / editing a current pill), you
          can adjust its properties.
      </p>
      <img src={SelectedPillsTab} alt="Pills Tab" />
      <img src={DefaultPills} alt="Default pills" />
      <img src={NewPillButton} alt="New pill button" />
      <img src={SetPillProps} alt="Set pill props" />
  </Card>
)

export default PillsCard
