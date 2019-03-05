// Landing Page
// we want to render
// 1. Logo & login & sign up buttons
// 2. SearchForm

import React, { Component } from 'react';
import SearchForm from '../Components/SearchForm'
import LoginForm from '../Components/LoginForm'
import SignUpForm from '../Components/SignUpForm'
import Popup from "reactjs-popup";
import { Link } from 'react-router-dom'

class Home extends Component {

  loginToggle = () => {
    if (localStorage.getItem("token")){
      return(
        <div className="nav-buttons">
          <h3 className="link review" onClick={this.props.logoutHandler}>Log Out</h3>
          <Link to="/profile" className="link review">Your Profile</Link>
        </div>
      )
    }
    else {
      return(
          <div className="nav-buttons">
          <Popup trigger={
              <button className="ui button" onClick> Login </button>} modal
              position="right center">
              <div>{<LoginForm changeHandler={this.props.changeHandler} loginHandler={this.props.loginHandler}/>}</div>
          </Popup>

          <Popup trigger={
              <button className="ui button" onClick> Sign Up </button>} modal
              position="right center">
              <div>{<SignUpForm changeHandler={this.props.changeHandler} signupHandler={this.props.signupHandler}/>}</div>
          </Popup>
        </div>
      )
    }
  }

  render() {
    //console.log(this.props.search.logged_in)
    return (
      <div>
          {this.loginToggle()}
          <h1 className="main-title">SaveSpace<span id="nyc">nyc</span></h1>
          <div className="search">
            <SearchForm className="search" changeHandler={this.props.changeHandler} term={this.props.term} location={this.props.location} submitHandler={this.props.submitHandler}/>
          </div>
          <div>
            <h3 className="home-prompt">When you want to: <span className="home-prompt-slide">introduce your girlfriend that you met on HER to your parents</span></h3>
          </div>
      </div>
    );
  }

}

export default Home;
