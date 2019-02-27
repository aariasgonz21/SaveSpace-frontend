import React, { Component } from 'react';
import './App.css';
import SearchResultContainer from './Containers/SearchResultContainer'
import Home from './Containers/Home'
import ProfilePage from './Containers/ProfilePage'
import EstablishmentPage from './Containers/EstablishmentPage'
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

class App extends Component {
  state = {
    term: "",
    location: "Queens",
    results: []
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

  render() {
    //<Route component={NoMatch} />
    console.log(this.props);
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

                return <EstablishmentPage {...props} establishment={establishment} search={this.state} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
              }}/>

          </Switch>
        </div>

    );
  }
}
export default withRouter(App);
