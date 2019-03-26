// NavBar/Searchform
// establishments info
// ReviewCards

import React, { Component } from 'react';
import Popup from "reactjs-popup";
import ReviewForm from '../Components/ReviewForm';
import LoginForm from '../Components/LoginForm';
import Nav from '../Components/Nav';
import ReviewContainer from './ReviewContainer';

class EstablishmentPage extends Component {

  state = {
    establishment: {},
    reviews: [],
    user: {},
    isProfile: false
  }

  componentDidMount(){
    console.log();
    if (localStorage.getItem("token")) {
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
      this.setState({establishment: data.establishment, reviews:
        (data.reviews ? data.reviews : [])})
    })
  }
}

reviewSubmitHandler = (e, reviewObj) => {
  e.preventDefault();
  console.log(reviewObj)
  if (localStorage.getItem("token")) {
    let token = localStorage.getItem("token");
    let option = {
      method: 'POST',
      headers:{
        'Content-Type': "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        review:{
          yelp_id: this.state.establishment.id,
          establishment_name: reviewObj.establishment_name,
          user_id:this.props.user.id,
          name: reviewObj.name,
          women_rating:reviewObj.women_rating,
          poc_rating:reviewObj.poc_rating,
          lgbtq_rating: reviewObj.lgbtq_rating,
          review: reviewObj.review
        }
      })
    }
    fetch('http://localhost:3001/api/v1/reviews', option)
      .then(res => res.json())
      .then(data => this.setState({reviews: [...this.state.reviews, data]}))
    }
  else {
    alert("Please Login to Submit a Review")
    this.props.history.push("/")
  }
}

  reviewToggle = () => {
    if (localStorage.getItem("token")){
      return(
        <ReviewForm establishment={this.state.establishment} reviewSubmitHandler={this.reviewSubmitHandler}/>
      )
    }
    else{
      return(
        <LoginForm changeHandler={this.props.changeHandler} loginHandler={this.props.loginHandler}/>
      )
    }
  }

  render() {
    //console.log(this.props.establishment_reviews);
    //let establishment = JSON.parse(localStorage.getItem('establishment'))

    return (
      <div>
        <Nav changeHandler={this.props.changeHandler} submitHandler={this.props.submitHandler} term={this.props.search.term} location={this.props.search.location} />

        <Popup trigger={
          <div className="ui brown button" onClick>
          <i className='add icon'></i> Add Review </div>} modal
          position="right center">
          <div>{this.reviewToggle()}</div>
          </Popup>

        <img className="est-img" src={this.state.establishment.image_url} alt="main"/>
        <h1 className="est-name">{this.state.establishment.name}</h1>
        <div className="divider1"></div>


        <h1 className="est-review-title">Reviews</h1>
        <div className="divider2"></div>

        <ReviewContainer isProfile={this.state.isProfile} user={this.props.user} reviews={this.state.reviews}/>
      </div>
    );
  }

}

//

export default EstablishmentPage;
