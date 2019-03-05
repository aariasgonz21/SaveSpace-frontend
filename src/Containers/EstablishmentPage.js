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

  // state = {
  //   establishment: {}
  // }

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
    .then(data => this.props.persistEst(data))
  }
  else{
    alert('just login, man.')
  }
}

  reviewToggle = () => {
    if (localStorage.getItem("token")){
      return(
        <ReviewForm establishment={this.props.establishment} reviewSubmitHandler={this.props.reviewSubmitHandler}/>
      )
    }
    else{
      return(
        <LoginForm changeHandler={this.props.changeHandler} loginHandler={this.props.loginHandler}/>
      )
    }
  }

  render() {
    //console.log("we made it lads")

    console.log(this.props.establishment_reviews);
    //let establishment = JSON.parse(localStorage.getItem('establishment'))

    return (
      <div>
        <Nav changeHandler={this.props.changeHandler} submitHandler={this.props.submitHandler} term={this.props.search.term} location={this.props.search.location} />

        <h1>{this.props.establishment.name}</h1>
        <img src={this.props.establishment.image_url} alt="main"/>
        <h1>Reviews</h1>
        <ReviewContainer reviews={this.props.establishment_reviews}/>

        <Popup trigger={
            <div className="ui bottom attached button" onClick>
            <i className='add icon'></i> Add Review </div>} modal
            position="right center">
            <div>{this.reviewToggle()}</div>
        </Popup>
      </div>
    );
  }

}

//

export default EstablishmentPage;
