import React, { Component } from 'react';
import Review from '../Components/Review';

const ReviewContainer = props => {
    //console.log(props.reviews);
    let singleReview = props.reviews.map(review => <Review key={review.id} review={review} user={props.user} isProfile={props.isProfile}/>)
    return (
      <div>
        {singleReview}
      </div>
    );

}

export default ReviewContainer;
