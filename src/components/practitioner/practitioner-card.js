import React, { Component } from 'react';
//import reactstrap elements
import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
//import assets
import doctorFemale from '../assets/doctor-female.png';
import doctorMale from '../assets/doctor-male.png';

class PractitionerCard extends Component {

  state = {
    favorites: false,
  }

  componentDidMount(){
    fetch('http://localhost:3000/myfavorites')
    .then(response => response.json())
    .then(data => {
      for (let i = 0;i < data.favorites.length; i++) {
        if (this.props.id === data.favorites[i].id) {
          this.setState({
            favorites: true,
          })
        }
      }
    })
    .catch(error => console.log('Request Practitioner data Failed', error));
  };

  AddtoFavorites = () => {
    if (!this.state.favorites) {
      fetch('http://localhost:3000/add-favorites', {
       method: 'POST',
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
       body:  `id=${this.props.id}&prefix=${this.props.name[0].prefix[0]}&familyName=${this.props.name[0].family}
       &firstName=${this.props.name[0].given[0]}&gender=${this.props.gender}`
      })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.error(error));
    }
    else {
      fetch(`http://localhost:3000/delete-favorites/${this.props.id}/`, {
       method: 'DELETE',
      })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.error(error));
    }
    this.setState({
      favorites: !this.state.favorites,
    });

  }

  render () {

    let line1 = "";
    if (this.props.address !== undefined && this.props.address[0].line[0] !== undefined) {
      line1 = this.props.address[0].line[0];
    };

    let line2 = "";
    if (this.props.address !== undefined && this.props.address[0].line[1] !== undefined) {
      line2 = this.props.address[0].line[1];
    };

    let postalCode = "";
    if (this.props.address !== undefined && this.props.address[0].postalCode !== undefined) {
      postalCode = this.props.address[0].postalCode;
    };

    let city = "";
    if (this.props.address !== undefined && this.props.address[0].city !== undefined) {
      city = this.props.address[0].city;
    };

    let country = "";
    if (this.props.address !== undefined && this.props.address[0].country !== undefined) {
      country = this.props.address[0].country;
    };

    let address = `${line1}, ${line2}, ${postalCode}, ${city}, ${country}`;

    let telecomThree;
    if (this.props.telecom !== undefined && this.props.telecom[2] !== undefined) {
      telecomThree = <li>{this.props.telecom[2].value}</li>
    };

    let telecomTwo;
    if (this.props.telecom !== undefined && this.props.telecom[1] !== undefined ) {
      telecomTwo = <li>{this.props.telecom[1].value}</li>
    };

    let telecomOne;
    if (this.props.telecom !== undefined && this.props.telecom[0].value !== undefined  ) {
      telecomOne = <li>{this.props.telecom[0].value}</li>
    };

    let givenPractitioner = "";
    if (this.props.name !== undefined && this.props.name[0].given !== undefined) {
      givenPractitioner = this.props.name[0].given[0];
    };

    let familyPractitioner = "";
    if (this.props.name !== undefined && this.props.name[0].family !== undefined) {
      familyPractitioner = this.props.name[0].family;
    };

    let prefixPractitioner = "";
    if (this.props.name !== undefined && this.props.name[0].prefix !== undefined) {
      prefixPractitioner = this.props.name[0].prefix[0];
    };

    let picturePractitioner = doctorMale;
    if (this.props.gender === 'female') {
      picturePractitioner = doctorFemale;
    };
    return (
        <Col xs="3" style={styles.colPractitioner}>
          <Card>
            <CardImg top style={styles.imgPractitioner} src={picturePractitioner} alt="Doctor" />
            <CardBody>
              <CardTitle style={styles.titleDoctor}>{prefixPractitioner} {givenPractitioner} {familyPractitioner}</CardTitle>
              {this.props.telecom === undefined ? null :
                <div>
                  <CardSubtitle>Telecom :</CardSubtitle>
                  <div>
                    <ul>
                      {telecomOne}
                      {telecomTwo}
                      {telecomThree}
                    </ul>
                  </div>
                </div>
              }
              {this.props.address === undefined ? null :
                <div>
                  <CardSubtitle>Address :</CardSubtitle>
                  <div>
                    {address}
                  </div>
                </div>
              }

              <Button
                color={this.state.favorites ? "success" : "warning"}
                onClick={this.AddtoFavorites}
              >
                {this.state.favorites ? "Practitioner Favorite" : "Add to favorites"}
              </Button>
            </CardBody>
          </Card>
        </Col>
    );
  }
}

export default PractitionerCard;

const styles = {
  colPractitioner: {
    marginBottom: 20
  },
  imgPractitioner: {
    width: '80%',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  titleDoctor: {
    fontWeight: 'bold',
    textAlign: 'center',
  }
}
