// NavBar/Searchform
// SearchResults

import React, { Component } from 'react';
import SearchResults from '../Components/SearchResults'
import Nav from '../Components/Nav'
import { Route, Switch } from 'react-router-dom';

class SearchResultContainer extends Component {

  componentDidMount() {
    if (this.props.search.results.length === 0) {
      this.props.history.push('/')
    }
  }

  render() {
    //console.log(this.props.search);
    let searchResults = this.props.search.results.map(result => {
      return <SearchResults key={result.id} result={result}/>
    })

    return (
      <React.Fragment>
        <Nav changeHandler={this.props.changeHandler} submitHandler={this.props.submitHandler} term={this.props.search.term} location={this.props.search.location} />

        <div className="search-container">
          <h1 className="title-text"> Search Results for <span className="term-name">{this.props.search.term}</span> in {this.props.search.location}</h1>
          <div> {searchResults} </div>
        </div>

      </React.Fragment>
    );
  }

}

export default SearchResultContainer;
