import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Review extends Component {

reviewHeader = () => {
    if(this.props.isProfile === true){
      return <Link className="est-link" to={`/establishments/${this.props.review.yelp_id}`}>{this.props.review.establishment_name}</Link>
    }
    else{
      return <h1 className="username">{this.props.review.user.first_name}</h1>
     }
  }

  render() {
    return (
      <div className="review-container">
        <div>{this.reviewHeader()}</div>
        <h2 className="review-title">"{this.props.review.name}"</h2>
        <div className="search-rating-bar rev-rate">
          <h3>Women Rating: {this.props.review.women_rating === 0 ? 'n/a' : this.props.review.women_rating}</h3>
          <h3>People of Color Rating: {this.props.review.poc_rating === 0 ? 'n/a' : this.props.review.poc_rating}</h3>
          <h3>LGBTQ Rating: {this.props.review.lgbtq_rating === 0 ? 'n/a' : this.props.review.lgbtq_rating}</h3>
        </div>
        <h4 className="review-text">{this.props.review.review_text}</h4>
      </div>
    );
  }
}

export default Review;
