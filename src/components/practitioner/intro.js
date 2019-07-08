import React, { Component } from 'react';
//import reactstrap elements
import {
  Row,
  Col,
} from 'reactstrap';
//import assets
import picturePractitioner from '../assets/practitioner-listing.png';

class IntroPractitioner extends Component {
  render () {
    return (
      <div style={styles.container} id="practitioner">
        <div style={styles.content}>
          <Row>
            <Col xs="6" style={styles.colIntro}>
              <h2 style={styles.IntroTitle} >Practitioner Listing</h2>
            </Col>
            <Col xs="6" style={styles.colIntro}>
              <img src={picturePractitioner} alt='Practitioner Listing'/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default IntroPractitioner;

const styles = {
  container: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    maxWidth: 1160,
  },
  colIntro: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  IntroTitle: {
    color: 'rgb(41, 89, 116)',
    fontWeight: 'bold',
    fontSize: 40,
  }
}
