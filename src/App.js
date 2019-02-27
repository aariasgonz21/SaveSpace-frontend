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
    establishment:{}
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // fetch request for form
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

  //reviewSubmitHandler
  reviewSubmitHandler = (e, reviewObj) => {
    e.preventDefault();
    alert("it's been submitted lad");
  }

  render() {
    //<Route component={NoMatch} />
    //console.log(this.props);
    return (
        <div>
          <Switch>
            <Route
              exact path="/"
              render={(props) => <Home {...props} search={this.state} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>} />
            <Route
              path="/profile/:userId"
              render={(props) => <ProfilePage {...props} search={this.state} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>}/>
            <Route
              path="/search"
              render={(props) => <SearchResultContainer {...props} search={this.state} changeHandler={this.changeHandler} submitHandler={this.submitHandler}
              /> }/>
            <Route
              path="/establishments/:id"
              render={(props) => {
                let id = props.match.params.id
                let establishment = this.state.results.find(result => result.id === id)
                //localStorage.setItem("establishment", JSON.stringify(establishment))
                //console.log(this.state.results)
                return <EstablishmentPage {...props} establishment={this.state.establishment} search={this.state} changeHandler={this.changeHandler} submitHandler={this.submitHandler} reviewSubmitHandler={this.reviewSubmitHandler}/>
              }}/>

          </Switch>
        </div>

    );
  }
}
export default withRouter(App);
