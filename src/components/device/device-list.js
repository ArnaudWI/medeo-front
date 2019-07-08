import React, { Component } from 'react';
import smoothScroll from 'smoothscroll-polyfill';
//import reactstrap elements
import {
  ListGroupItem,
  ListGroupItemHeading,
  Button,
} from 'reactstrap';
//import REDUX
import {connect} from 'react-redux';
// Polyfill for function scrollIntoView
smoothScroll.polyfill();


class DeviceList extends Component {

  state = {
    organizationName: ''
  }

componentDidMount(){
  fetch('http://localhost:3000/owner', {
   method: 'POST',
   headers: {'Content-Type':'application/x-www-form-urlencoded'},
   body: 'owner='+this.props.data.owner.reference
  })
  .then(response => response.json())
  .then(owner => this.setState({ organizationName: owner.owner.name}))
  .catch(error => console.error(error))
};

goToUpdate = () => {
  document.getElementById("form").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  this.props.UpdateDevice(this.props.data.id, this.props.data.location.display, this.props.data.manufacturer, this.props.data.manufactureDate, this.props.data.expirationDate)
}

  render () {
    return (
        <div>
        <ListGroupItem>
          <ListGroupItemHeading>{this.props.data.type.coding[0].display}</ListGroupItemHeading>
          <div>
            <ul>
              <li>ID of device : {this.props.data.id}</li>
              <li>Location: {this.props.data.location.display}</li>
              <li>Manufacturer: {this.props.data.manufacturer}</li>
              <li>Manufactured Date: {this.props.data.manufactureDate}</li>
              <li>Expired Date: {this.props.data.expirationDate}</li>
              <li>Owner: {this.state.organizationName}, </li>
            </ul>
          </div>
          <Button onClick={this.goToUpdate}>Update This Device</Button>
        </ListGroupItem>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    UpdateDevice: function(id, location, manufacturer, manufactureDate, expiredDate) {
      dispatch({
        type: 'updateDevice',
        id: id,
        location: location,
        manufacturer: manufacturer,
        manufactureDate: manufactureDate,
        expiredDate: expiredDate
      })
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(DeviceList);
