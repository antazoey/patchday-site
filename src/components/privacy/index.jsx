import React from 'react';
import privacyStyles from './privacy.css';

const PrivacyPage = () => (
  <div className={privacyStyles.PDPrivacy}>
    <h2>Privacy Policy.</h2>
    <p>
      I, Juliya Smith, the developer of PatchDay - HRT Schedule (hereto referred
      to as &quot;the app&quot;), do not collect, view, sell, or use any user
      data.
    </p>
    <p>
      The app has no sensitive data collection functions or processes, meaning
      that users&apos; HRT schedule data cannot be used to identify them.
    </p>
    <p>
      The app uses{' '}
      <a href="https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html">
        CoreData
      </a>
      , which defaults to a SQLite database (the most{' '}
      <a href="https://sqlite.org/index.html">commonly</a> used database engine
      in the world). The app also stores some variables in{' '}
      <a href="https://developer.apple.com/documentation/foundation/userdefaults">
        NSUserDefaults
      </a>
      . All data in the app is stored locally on the user&apos;s device, and is
      not visible to the outside world.
    </p>
    <p>
      {' '}
      The data is only ever manipulated when it is brought into memory by the
      app.
    </p>
  </div>
);

export default PrivacyPage;
