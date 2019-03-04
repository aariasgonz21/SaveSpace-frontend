import React from 'react';

const Review = props => {
  return(
    <div>
      <h1>{props.review.name}</h1>
      <h3>Women Rating: {props.review.women_rating}</h3>
      <h3>People of Color Rating: {props.review.poc_rating}</h3>
      <h3>LGBTQ Rating: {props.review.lgbtq_rating}</h3>
      <h2>{props.review.review_text}</h2>
    </div>
  )
}

export default Review;
