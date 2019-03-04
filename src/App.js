import React, { Component } from 'react';
import './App.css';
import SearchResultContainer from './Containers/SearchResultContainer'
import Home from './Containers/Home'
import ProfilePage from './Containers/ProfilePage'
import EstablishmentPage from './Containers/EstablishmentPage'
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

class App extends Component {
  state = {
    term: "",
    location: "Queens",
    results: [],
    establishment:{},
    establishment_reviews:[]
  }

  //-------------------------------//
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //-------------------------------//
  submitHandler = (e) => {
    e.preventDefault();
    console.log("in submit handler");
    this.props.history.push('/search');
    let option = {
      method: 'POST',
      headers:{
        'content-type': "application/json",
      },
      body: JSON.stringify({
        term: this.state.term,
        location: this.state.location
      })
    }
    fetch('http://localhost:3001/api/v1/establishments', option)
    .then(res => res.json())
    .then(data => this.setState({results: data}))
  }

  //-------------------------------//
  reviewSubmitHandler = (e, reviewObj) => {
    e.preventDefault();
    let option = {
      method: 'POST',
      headers:{
        'content-type': "application/json",
      },
      body: JSON.stringify({
        review:{
          yelp_id: this.state.establishment.id,
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
      .then(data => this.setState({
        establishment_reviews: [data, ...this.state.establishment_reviews]
      }))
  }

  //-------------------------------//
  clickHandler = (e, searchObj) => {
    let id = searchObj.id
    let establishment = this.state.results.find(result => result.id === id)
    this.setState({
      establishment: establishment
    })
    this.props.history.push(`/establishments/${establishment.id}`)
  }

//-------------------------------//
signupHandler = (e, signupObj) => {
  e.preventDefault();
  let option = {
    method: 'POST',
    headers:{
      'content-type': "application/json",
    },
    body: JSON.stringify({
      user: {
        first_name:signupObj.first_name,
        username: signupObj.username,
        password: signupObj.password,
        bio: signupObj.bio,
      }
    })
  }
  fetch('http://localhost:3001/api/v1/users', option)
    .then(res => res.json())
    .then(data => console.log(data))
}

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact path="/"
            render={(props) => <Home {...props}
            search={this.state}
            changeHandler={this.changeHandler}
            submitHandler={this.submitHandler}
            loginHandler={this.loginHandler}
            signupHandler={this.signupHandler}/>} />
          <Route
            path="/profile/:userId"
            render={(props) => <ProfilePage {...props}
            search={this.state}
            changeHandler={this.changeHandler}
            submitHandler={this.submitHandler}/>}/>
          <Route
            path="/search"
            render={(props) => <SearchResultContainer {...props}
            search={this.state}
            changeHandler={this.changeHandler}
            clickHandler={this.clickHandler}
            submitHandler={this.submitHandler}
            /> }/>
          <Route
            path="/establishments/:id"
            render={(props) => {
              return <EstablishmentPage {...props} establishment={this.state.establishment} establishment_reviews={this.state.establishment_reviews} search={this.state}
              changeHandler={this.changeHandler}
              submitHandler={this.submitHandler} reviewSubmitHandler={this.reviewSubmitHandler}/>
            }}/>
        </Switch>
      </div>
  );
}
    //<Route component={NoMatch} />
    //localStorage.setItem("establishment", JSON.stringify(this.state.establishment)
}
export default withRouter(App);
