import React, { Component } from 'react';
import SearchResults from '../Components/SearchResults'

class SearchResultContainer extends Component {


  render() {
    let searchResults = this.props.search.results.map(result => {
      return <SearchResults key={result.id} result={result}/>
    })

    return (
      <div className="search-container">
        <h1 className="title-text"> Search Results for <span className="term-name">{this.props.search.term}</span> in {this.props.search.location}</h1>
        <div>{searchResults}</div>
      </div>
    );
  }

}

export default SearchResultContainer;
