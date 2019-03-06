// NavBar/Searchform
// ReviewCards
// and the rest of the profile page

import React, { Component } from 'react';
import Nav from '../Components/Nav'
import ReviewContainer from './ReviewContainer'

class ProfilePage extends Component {
  state = {
    user: {},
    reviews: []
  }

  componentDidMount(){
    //console.log();
      let token = localStorage.getItem("token");
        let options = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }

    fetch(`http://localhost:3001/api/v1${this.props.match.url}`, options)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.props.persistData(data)
      this.setState({user: data.user, reviews: data.user_reviews})
    })
  }

  render() {
    console.log(this.state.reviews)
    return (
      <div>
        <Nav changeHandler={this.props.changeHandler} submitHandler={this.props.submitHandler} term={this.props.search.term} location={this.props.search.location} />
        <div className="ui grid">
          <div className="six wide column">
              <img className="profile-img" src="../savespace-icon-1.svg" alt="user img"/>
          </div>
          <div className="ten wide column">
            <h1 className="profile-name">{this.state.user.first_name}</h1>
            <div className="ui divider"></div>
            <h1>Reviews</h1>
              <ReviewContainer reviews={this.state.reviews}/>
          </div>
        </div>
      </div>
    );
  }

}

export default ProfilePage;
