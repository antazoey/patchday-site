import React from 'react';
import { Row, Col } from 'react-bootstrap';
import style from '../../styles.css';
import estrogenStyle from './estrogens.css';
import SiteImage from './site-image';
import DeliveryMethodEnum from './delivery-method-enum';
import PatchStaggeringImageFile from '../../images/patch-staggering.png';

const stdClasses = () =>
  `${style.STDFont} ${style.STDText} ${estrogenStyle.instruction}`;
const titleClasses = () => `${estrogenStyle.title}`;

const centerStyle = () => ({
  textAlign: 'center',
});

const PatchSiteGrid = () => (
  <Row>
    <Col xs={3} style={centerStyle()}>
      <SiteImage
        imageName="glute_l"
        deliveryMethod={DeliveryMethodEnum.PATCHES}
      />
      <SiteImage
        imageName="glute_r"
        deliveryMethod={DeliveryMethodEnum.PATCHES}
      />
      <SiteImage imageName="ab_l" deliveryMethod={DeliveryMethodEnum.PATCHES} />
      <SiteImage imageName="ab_r" deliveryMethod={DeliveryMethodEnum.PATCHES} />
    </Col>
  </Row>
);

const InjectionSiteGrid = () => (
  <Row>
    <Col xs={2} style={centerStyle()}>
      <SiteImage
        imageName="glute_l"
        deliveryMethod={DeliveryMethodEnum.INJECTIONS}
      />
      <SiteImage
        imageName="glute_r"
        deliveryMethod={DeliveryMethodEnum.INJECTIONS}
      />
      <SiteImage
        imageName="quad_l"
        deliveryMethod={DeliveryMethodEnum.INJECTIONS}
      />
      <SiteImage
        imageName="quad_r"
        deliveryMethod={DeliveryMethodEnum.INJECTIONS}
      />
      <SiteImage
        imageName="delt_l"
        deliveryMethod={DeliveryMethodEnum.INJECTIONS}
      />
      <SiteImage
        imageName="delt_r"
        deliveryMethod={DeliveryMethodEnum.INJECTIONS}
      />
    </Col>
  </Row>
);

const SiteGrid = () => (
  <div>
    <PatchSiteGrid />
    <InjectionSiteGrid />
  </div>
);

const Title = () => (
  <h2>
    <p className={titleClasses()}>
      Never forget <i>when and where</i> to change a patch.
    </p>
  </h2>
);

const PatchStaggeringImage = () => (
  <Row style={centerStyle()}>
    <Col xs={12}>
      <img
        style={centerStyle()}
        src={PatchStaggeringImageFile}
        alt="Show what patch staggering is."
      />
    </Col>
  </Row>
);

const EditEstrogen = () => (
  <div>
    <p className={stdClasses()}>
      Use our <strong>Autofill</strong> feature to set &apos;date and time
      placed&apos; to the current date and time,
    </p>
    <p className={stdClasses()}>
      {' '}
      as well as the &apos;site&apos; to the next available site in the site
      schedule.
    </p>
    <p className={stdClasses()}>
      Enable <strong>notifications</strong> to easily stay in touch with your
      schedule.
    </p>
    <p className={stdClasses()}>
      PatchDay works for both patches and injections, and even has a place for
      pills, such as testosterone-blockers and progesterone.
    </p>
  </div>
);

const EstrogenInfo = () => (
  <Row style={centerStyle()}>
    <Col xs={6}>
      <EditEstrogen />
    </Col>
  </Row>
);

const Estrogens = () => (
  <div>
    <Title />
    <PatchStaggeringImage />
    <EstrogenInfo />
    <SiteGrid />
  </div>
);

export default Estrogens;
