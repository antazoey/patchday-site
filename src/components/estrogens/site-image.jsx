import React from 'react';
import PropTypes from 'prop-types';
import patchAbLeftImage from '../../images/patches/ab-l.png';
import patchAbRightImage from '../../images/patches/ab-r.png';
import patchGluteLeftImage from '../../images/patches/glute-l.png';
import patchGluteRightImage from '../../images/patches/glute-r.png';
import injectionGluteLeftImage from '../../images/injections/glute-l.png';
import injectionGluteRightImage from '../../images/injections/glut-r.png';
import injectionQuadLeftImage from '../../images/injections/quad-l.png';
import injectionQuadRightImage from '../../images/injections/quad-r.png';
import injectionDeltLeftImage from '../../images/injections/delt-l.png';
import injectionDeltRightImage from '../../images/injections/delt-r.png';
import DeliveryMethodEnum from './delivery-method-enum';

const patchImageNameToAlt = n => {
  switch (n) {
    case 'glute_l':
      return 'Patch Left Glute';
    case 'glute_r':
      return 'Patch Right Glute';
    case 'ab_l':
      return 'Patch Left Abdomen';
    case 'ab_r':
      return 'Patch Right Abdomen';
    default:
      return 'Patch Left Glute';
  }
};

const injectionImageNameToAlt = n => {
  switch (n) {
    case 'glute_l':
      return 'Injection Left Glute';
    case 'glute_r':
      return 'Injection Right Glute';
    case 'quad_l':
      return 'Injection Quad Left';
    case 'quad_r':
      return 'Injection Quad Right';
    case 'delt_l':
      return 'Injection Delt Left';
    case 'delt_r':
      return 'Injection Delt Right';
    default:
      return 'Injection Left Glute';
  }
};

const patchImage = n => {
  switch (n) {
    case 'ab_l':
      return patchAbLeftImage;
    case 'ab_r':
      return patchAbRightImage;
    case 'glute_l':
      return patchGluteLeftImage;
    case 'glute_r':
      return patchGluteRightImage;
    default:
      return patchAbLeftImage;
  }
};

const injectionImage = n => {
  switch (n) {
    case 'glute_l':
      return injectionGluteLeftImage;
    case 'glute_r':
      return injectionGluteRightImage;
    case 'quad_l':
      return injectionQuadLeftImage;
    case 'quad_r':
      return injectionQuadRightImage;
    case 'delt_l':
      return injectionDeltLeftImage;
    case 'delt_r':
      return injectionDeltRightImage;
    default:
      return injectionGluteLeftImage;
  }
};

class SiteImage extends React.Component {
  constructor(props) {
    super(props);
    const { deliveryMethod, imageName } = props;
    this.state = { ...props, deliveryMethod, imageName };
  }

  makeImage() {
    const { deliveryMethod, imageName } = this.state;
    switch (deliveryMethod) {
      case DeliveryMethodEnum.PATCHES:
        return {
          file: patchImage(imageName),
          altText: patchImageNameToAlt(imageName),
        };
      default:
        return {
          file: injectionImage(imageName),
          altText: injectionImageNameToAlt(imageName),
        };
    }
  }

  render() {
    const image = this.makeImage();
    return <img src={image.file} alt={image.altText} />;
  }
}

SiteImage.propTypes = {
  imageName: PropTypes.string.isRequired,
  deliveryMethod: PropTypes.number.isRequired,
};

export default SiteImage;
