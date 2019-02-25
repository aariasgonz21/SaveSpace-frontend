import React, { Component } from 'react';
//import logo from './logo.svg';
import Nav from './Components/Nav'
import SearchResultContainer from './Containers/SearchResultContainer'
import './App.css';

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

  submitHandler = (e) => {
    e.preventDefault();
    let option = {
      method: 'POST',
      headers:{
        'content-type': "application/json",
      },
      body: JSON.stringify(this.state)
    }
    fetch('http://localhost:3001/api/v1/establishments', option)
      .then(res => res.json())
      .then(data => this.setState({results: data}))
 }

  render() {
    console.log(this.state.results)
    return (
      <div className="App">
        <Nav changeHandler={this.changeHandler} submitHandler={this.submitHandler} term={this.state.term} location={this.state.location} />
        <SearchResultContainer search={this.state}/>
      </div>
    );
  }
}

export default App;
