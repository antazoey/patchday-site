import { Card } from '@material-ui/core';
import SimpleSites from 'Images/simple_sites.png';
import DoubleSites from 'Images/double_sites.png';
import React from 'react';

const SitesCard = () => (
  <Card id='ConfigureSites'>
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
)

export default SitesCard
