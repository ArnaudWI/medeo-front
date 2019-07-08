import React, { Component } from 'react';
//import reactstrap elements
import {
  Row,
} from 'reactstrap';
//import components
import PractitionerCard from './practitioner-card';

class ListingPractitioner extends Component {

  state = {
    practitionerData: [],
  }

  componentDidMount(){
  fetch('http://localhost:3000/practitioner')
  .then(response => response.json())
  .then(data => this.setState({ practitionerData: data.practitioner.entry }))
  .catch(error => console.log('Request Practitioner data Failed', error));
  }

  render () {
    let practitionerList = this.state.practitionerData.map((practitioner, i) => {
      return <PractitionerCard address={practitioner.resource.address} telecom={practitioner.resource.telecom} name={practitioner.resource.name} gender={practitioner.resource.gender} id={practitioner.resource.id} key={i}/>
    });

    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <Row style={styles.rowListing}>
            {practitionerList}
          </Row>
        </div>
      </div>
    );
  }
}

export default ListingPractitioner;

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
