import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class SearchResults extends Component {

  render() {
    //const {categories} = this.props.result
    return (
      <Link to={`/establishments/${this.props.result.id}`}>
      <div className="box">
        <img className="search-img" alt={this.props.result.name} src={this.props.result.image_url}/>
        <h2 className="search-text">{this.props.result.name}</h2>
      </div>
      </Link>
    );
  }

}



export default SearchResults;
