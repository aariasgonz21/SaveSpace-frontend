// Landing Page
// we want to render
// 1. Logo & login & sign up buttons
// 2. SearchForm

import React, { Component } from 'react';
import Nav from '../Components/Nav'

class Home extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <Nav changeHandler={this.props.changeHandler} term={this.props.search.term} location={this.props.search.location} submitHandler={this.props.submitHandler}/>
        <h1>Home</h1>
      </div>
    );
  }

}

export default Home;
