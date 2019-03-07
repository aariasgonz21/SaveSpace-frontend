import React from 'react';

const Review = props => {

  return(
    <div>
      <h1>{props.review.user.first_name}</h1>
      <h2>{props.review.name}</h2>
      <h3>Women Rating: {props.review.women_rating}</h3>
      <h3>People of Color Rating: {props.review.poc_rating}</h3>
      <h3>LGBTQ Rating: {props.review.lgbtq_rating}</h3>
      <h4>{props.review.review_text}</h4>
    </div>
  )
}

export default Review;
