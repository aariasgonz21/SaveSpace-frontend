// NavBar/Searchform
// ReviewCards
// and the rest of the profile page

import React, { Component } from 'react';
import Nav from '../Components/Nav'

class ProfilePage extends Component {

  render() {
    return (
      <div>
        <Nav changeHandler={this.props.changeHandler} submitHandler={this.props.submitHandler} term={this.props.search.term} location={this.props.search.location} />

        <h1>Wow here's your profile</h1>
      </div>
    );
  }

}

export default ProfilePage;
