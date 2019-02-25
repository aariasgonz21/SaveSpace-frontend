import React, { Component } from 'react';

class SearchResults extends Component {

  render() {
    return (
      <div className="box">
        <img className="search-img" src={this.props.result.image_url}/>
        <h2 className="search-text">{this.props.result.name}</h2>
      </div>
    );
  }

}

export default SearchResults;
