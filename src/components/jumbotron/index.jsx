import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styles from '../../styles.css';
import jumboStyles from './jumbotron.css';

const jumboClasses = () => `${jumboStyles['jumbotron-pd']}`;
const storeButtonClasses = () => `${jumboStyles.store_button}`;
const titleContainerClasses = () => `${jumboStyles['title-container']}`;
const titleClasses = () => `${styles.PDFont} ${jumboStyles.title}`;

const Jumbotron = () => (
  <div className={jumboClasses()}>
    <p>
      <Button
        variant="outline-primary"
        className={storeButtonClasses()}
        onClick={() => {
          window.location.href =
            'https://itunes.apple.com/us/app/patchday-hrt-schedule/id1253637065?mt=8';
        }}
      />
    </p>
    <div className={titleContainerClasses()}>
      {' '}
      <Link to="/" className={titleClasses()}>
        PatchDay
      </Link>
    </div>
  </div>
);

export default Jumbotron;
