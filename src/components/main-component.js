import React from 'react';
//import of components
import Header from './header/header';
import IntroPractitioner from './practitioner/intro';
import ListingPractitioner from './practitioner/listing';
import IntroDevice from './device/intro';
import ListingDevice from './device/listing';
import IntroManagement from './device-management/intro';
import ManagementForm from './device-management/form-management';

function MainComponent() {
  return (
    <div className="main-container">
      <Header/>
      <IntroPractitioner/>
      <ListingPractitioner/>
      <IntroDevice/>
      <ListingDevice/>
      <IntroManagement/>
      <ManagementForm/>
    </div>
  );
}

export default MainComponent;
