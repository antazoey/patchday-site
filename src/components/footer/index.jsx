import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import footerStyles from './footer.css';

const linkClasses = () => `${footerStyles.FooterLink}`;
const lastLinkClasses = () => `${linkClasses()} ${footerStyles.LastLink}`;
const firstLinkClasses = () => `${linkClasses()} ${footerStyles.FirstLink}`;

const PDFooter = () => (
  <div className={footerStyles.PDFooter}>
    <p className={footerStyles.LinkColumn}>
      <Button
        className={firstLinkClasses()}
        onClick={() => {
          window.location.href = 'mailto:juliya@juliyasmith.com';
        }}
      >
        Message the developer
      </Button>
    </p>
    <p className={footerStyles.LinkColumn}>
      <Link to="/privacy" className={lastLinkClasses()}>
        Privacy Policy{' '}
      </Link>
    </p>
  </div>
);

export default PDFooter;
