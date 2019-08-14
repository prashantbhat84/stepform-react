import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';

export default class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  };
  //proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  //go back to previous step
  previousStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  //handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, bio, city } = this.state;
    const values = { firstName, lastName, email, occupation, bio, city };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <h1>Personal details</h1>;
      case 3:
        return <h1>confirm</h1>;
      case 4:
        return <h1>success</h1>;

      default:
    }
  }
}
