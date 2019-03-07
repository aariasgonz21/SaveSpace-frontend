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
import Typist from 'react-typist';

class Home extends Component {

  loginToggle = () => {
    if (localStorage.getItem("token")){
      return(
        <div className="nav-buttons">
          <h3 className="login-btn" onClick={this.props.logoutHandler}>Log Out</h3>
          <Link to="/profile" className="profile-btn">Your Profile</Link>
        </div>
      )
    }
    else {
      return(
          <div className="nav-buttons">
          <Popup trigger={
              <h3 className="login-btn" onClick> Login </h3>} modal
              position="right center">
              <div>{<LoginForm changeHandler={this.props.changeHandler} loginHandler={this.props.loginHandler}/>}</div>
          </Popup>

          <Popup trigger={
              <h3 className="login-btn" onClick> Sign Up </h3>} modal
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
          <img className="home-background" src='../savespace-hands2.svg' alt="background-img"/>
          <h1 className="main-title">SaveSpace<span id="nyc">nyc</span></h1>

          <div className="search">
            <SearchForm className="search" changeHandler={this.props.changeHandler} term={this.props.term} location={this.props.location} submitHandler={this.props.submitHandler}/>
          </div>

          <div>

            <h3 className="home-prompt">When you want to:
            <span className="home-prompt-slide">
            <Typist>
              <span>Take your new date from HER somewhere nice </span>
                <Typist.Backspace count={50} delay={250} />
                <span>Find out if a bar near you would make you feel comfortable</span>
              <Typist.Backspace count={70} delay={250} />
                <span>Check if your pizzeria is LGBTQ Friendly</span>
                <Typist.Backspace count={100} delay={250} />
                <span>See if your local sports bar will be great for girls football night</span>
                <Typist.Backspace count={110} delay={250} />
                <span>Check if your song request will be skipped to "comply with the audience"</span>
                </Typist>
              </span>
            </h3>
            <h1 className="about-prompt">Wanna know our backstory?</h1>
            <img id="down-arrow" src="../download.svg" alt="down arrow"/>
          </div>

          <div className="about-us">
            <h2 className="about-title">This is the story of 3 women of color and their experience bar hopping in College Park, Maryland.</h2>
            <div className="about-p">
              <h3 className="about-p1">Ana, Chanel and Wuraola went to their first Technica and decided to go around the town and grab a beer. But each bar they passed by had a more unwelcoming vibe than the next. When they sat down the next day to decide on a project,</h3>

              <h3 className="about-p1"> Wura said, "What should we do our project on?".</h3>

              <h3 className="about-p2">Chanel said, "We should make a project based on how we felt yesterday!"</h3>

              <h3 className="about-p3">Ana said, "Aha! Let's call it SaveSpace"</h3>
            </div>
          </div>
      </div>
    );
  }

}

export default Home;
