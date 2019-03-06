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
    establishment_reviews:[],
    user: {},
    logged_in: false
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token");
      let option = {
        headers: {
          "Content-Type": "application/json",
          Accepts: "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      fetch("http://localhost:3001/api/v1/profile", option)
        .then(resp => resp.json())
        .then(data => console.log(data) || this.setState({ user: data.user }))
    } else {
      this.props.history.push("/");
    }
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
    .then(data => {
      console.log("in submit handler");
      this.setState({results: data}, () => this.props.history.push('/search'))
     })
     .catch(console.error)
  }
  //-------------------------------//
  persistData = (data) => {
    console.log(data)
    if(data.name){
      this.setState({establishment:data})
    }
    else{
      this.setState({user:data})
    }
  }

  //-------------------------------//
  reviewSubmitHandler = (e, reviewObj) => {
    e.preventDefault();
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
            user_id:this.state.user.id,
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
    else {
      alert("Please Login to Submit a Review")
      this.props.history.push("/")
    }
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
    .then(data => {
      this.setState({user: data.user})
      this.setState({logged_in: true})
      localStorage.setItem('token', data.jwt)
      this.props.history.push(`/profile/${data.user.id}`)
    })
}

//-----------------------------//
loginHandler = (e, userObj) => {
  e.preventDefault();
  let option = {
    method: 'POST',
    headers:{
      'content-type': "application/json",
    },
    body: JSON.stringify({
      user: {
        username: userObj.username,
        password: userObj.password
      }
    })
  }
  fetch('http://localhost:3001/api/v1/login', option)
  .then(res => res.json())
  .then(data => {
    this.setState({user: data.user})
    this.setState({logged_in: true})
    localStorage.setItem('token', data.jwt)
    this.props.history.push(`/profile/${data.user.id}`)
  })
}

//-----------------------------//
logoutHandler = () => {
  localStorage.removeItem('token')
  window.location.reload();
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
            logoutHandler={this.logoutHandler}
            signupHandler={this.signupHandler}/>} />
          <Route
            path="/profile"
            render={(props) => <ProfilePage {...props}
            search={this.state}
            changeHandler={this.changeHandler}
            submitHandler={this.submitHandler}
            persistData={this.persistData}/>}/>
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
              submitHandler={this.submitHandler} reviewSubmitHandler={this.reviewSubmitHandler}
              loginHandler={this.loginHandler}
              persistData={this.persistData}/>
            }}/>
        </Switch>
      </div>
  );
}
    //<Route component={NoMatch} />
    //localStorage.setItem("establishment", JSON.stringify(this.state.establishment)
}
export default withRouter(App);
