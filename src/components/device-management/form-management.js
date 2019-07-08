import React, { Component } from 'react';
//import reactstrap elements
import {
  Button,
} from 'reactstrap';
//import REDUX
import {connect} from 'react-redux';

class ManagementForm extends Component {

  state = {
    Id: '',
    Location: '',
    Manufacturer: '',
    ManufactureDate: '',
    ExpiredDate: '',
    deviceUpdated: {}
  }

  updateDevice = e => {
    fetch(`http://hapi.fhir.org/baseDstu3/Device/${this.state.Id}?_format=json&_pretty=true`, {
     method: 'PUT',
     headers: {'Content-Type':'application/fhir+json'},
     body: `Location=${this.state.Location}&Manufacturer=${this.state.Manufacturer}&ManufactureDate=${this.state.ManufactureDate}&ExpiredDate=${this.state.ExpiredDate}`
   })
    .then(response => response.json())
    .then(deviceUpdated => this.setState({ deviceUpdated: deviceUpdated}))
    .catch(error => console.error(error))
    e.preventDefault() //pour ne pas faire apparaitre la data sur l'url
    // réinitialise les states pour refaire apparaitre le placeholder
    this.setState({
      Id: '',
      Location: '',
      Manufacturer: '',
      ManufactureDate: '',
      ExpiredDate: '',
    });
  }

  render () {
    console.log(this.props.deviceData)
    return (
      <div style={styles.container}>
        <div style={styles.content}>
        <form style={styles.form} id="form">
          <label style={styles.label}>ID from your device</label>
          <input
            style={styles.input}
            name="Id"
            placeholder="ID"
            value={this.props.deviceData.id === undefined ? this.state.Id : this.props.deviceData.id}
            onChange={e => this.setState({ Id: e.target.value})}
          />
          <br />
          <label style={styles.label}>Location</label>
          <input
            style={styles.input}
            name="Location"
            placeholder="Location"
            value={this.props.deviceData.location === undefined ? this.state.Location : this.props.deviceData.location}
            onChange={e => this.setState({ Location: e.target.value})}
          />
          <br />
          <label style={styles.label}>Manufacturer</label>
          <input
            style={styles.input}
            name="Manufacturer"
            placeholder="Manufacturer"
            value={this.props.deviceData.manufacturer === undefined ? this.state.Manufacturer : this.props.deviceData.manufacturer}
            onChange={e => this.setState({ Manufacturer: e.target.value})}
          />
          <br />
          <label style={styles.label}>Manufactured Date</label>
          <input
            style={styles.input}
            name="ManufacturedDate"
            placeholder="Manufactured Date"
            value={this.props.deviceData.manufactureDate === undefined ? this.state.ManufactureDate : this.props.deviceData.manufactureDate}
            onChange={e => this.setState({ ManufacturedDate: e.target.value})}
          />
          <br />
          <label style={styles.label}>Expired Date</label>
          <input
            style={styles.input}
            name="ExpiredDate"
            placeholder="Expired Date"
            value={this.props.deviceData.expiredDate === undefined ? this.state.ExpiredDate : this.props.deviceData.expiredDate}
            onChange={e => this.setState({ ExpiredDate: e.target.value})}
          />
          <br />
          <Button style={styles.button} onClick={this.updateDevice}>Update Device</Button>
        </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deviceData: state.deviceData,
  };
}

export default connect(mapStateToProps, null)(ManagementForm);

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
  form: {
    width: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'rgb(41, 89, 116)',
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 30
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
    maxWidth: 450,
  },
  input: {
    width: 450,
  },
  button: {
    backgroundColor: '#149CEB',
    width: 450,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'white',
    fontWeight: 'bold',
    color: 'white',
  }
}
