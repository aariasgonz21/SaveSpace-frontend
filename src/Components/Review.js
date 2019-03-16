import React from 'react';

const Review = props => {
  return(
    <div className="review-container">
      <h1 className="username">{props.review.user.first_name}</h1>
      <h2 className="review-title">"{props.review.name}"</h2>
      <div className="search-rating-bar rev-rate">
        <h3>Women Rating: {props.review.women_rating === 0 ? 'n/a' : props.review.women_rating}</h3>
        <h3>People of Color Rating: {props.review.poc_rating === 0 ? 'n/a' : props.review.poc_rating}</h3>
        <h3>LGBTQ Rating: {props.review.lgbtq_rating === 0 ? 'n/a' : props.review.lgbtq_rating}</h3>
      </div>
      <h4 className="review-text">{props.review.review_text}</h4>
    </div>
  )
}

export default Review;
