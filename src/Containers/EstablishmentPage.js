// NavBar/Searchform
// establishments info
// ReviewCards

import React, { Component } from 'react';
import Popup from "reactjs-popup";
import ReviewForm from '../Components/ReviewForm';
import Nav from '../Components/Nav'

class EstablishmentPage extends Component {

  render() {
    console.log("we made it lads")
    console.log(this.props.establishment)
    return (
      <div>
        <Nav changeHandler={this.props.changeHandler} submitHandler={this.props.submitHandler} term={this.props.search.term} location={this.props.search.location} />

        <h1>{this.props.establishment.name}</h1>

        <img src={this.props.establishment.image_url} alt="main"/>
        <h1>Reviews</h1>

        <Popup trigger={
      <div className="ui bottom attached button" onClick>
      <i className='add icon'></i> Add Review </div>} modal
      position="right center">
        <div>{<ReviewForm establishment={this.props.establishment} reviewSubmitHandler={this.props.reviewSubmitHandler}/>}</div>
        </Popup>
      </div>
    );
  }

}

//

export default EstablishmentPage;
