import React, { Component } from 'react';
import Review from '../Components/Review';

const ReviewContainer = props => {

    let singleReview = props.reviews.map(review => <Review key={review.id} review={review}/>)
    return (
      <div>
        {singleReview}
      </div>
    );

}

export default ReviewContainer;
