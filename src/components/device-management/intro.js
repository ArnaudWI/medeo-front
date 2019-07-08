import React, { Component } from 'react';
//import reactstrap elements
import {
  Row,
  Col,
} from 'reactstrap';
//import assets
import pictureManagement from '../assets/management-device.png';

class IntroManagement extends Component {
  render () {
    return (
      <div style={styles.container} id="management">
        <div style={styles.content}>
          <Row>
            <Col xs="6" style={styles.colIntro}>
              <img src={pictureManagement} alt='Device Management'/>
            </Col>
            <Col xs="6" style={styles.colIntro}>
              <h2 style={styles.IntroTitle} >Device Management</h2>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default IntroManagement;

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
