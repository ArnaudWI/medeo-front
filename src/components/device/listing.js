import React, { Component } from 'react';
//import reactstrap elements
import {
  ListGroup,
} from 'reactstrap';
//import components
import DeviceList from './device-list';

class ListingDevice extends Component {

  state = {
    deviceData: [],
  }

  componentDidMount(){
  fetch('http://localhost:3000/device')
  .then(response => response.json())
  .then(data => this.setState({ deviceData: data.device.entry }))
  .catch(error => console.log('Request Practitioner data Failed', error));
  }

  render () {
    let deviceList = this.state.deviceData.map((device, i) => {
      return <DeviceList data={device.resource} key={i}/>
    });

    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <ListGroup width='100%' style={styles.rowListing}>
          {deviceList}
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default ListingDevice;

const styles = {
  container: {
    backgroundColor: '#149CEB',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    maxWidth: 1160,
  },
  rowListing: {
    marginTop: 40,
    marginBottom: 40,
  },
}
