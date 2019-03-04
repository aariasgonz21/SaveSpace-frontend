import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class SearchResults extends Component {

  render() {
    //const {categories} = this.props.result
    return (
      <div className="box" onClick={(e) => this.props.clickHandler(e, this.props.result)}>
        <img className="search-img" alt={this.props.result.name} src={this.props.result.image_url}/>
        <h2 className="search-text">{this.props.result.name}</h2>
        <h3 className="search-text">
        {this.props.result.location.address1}</h3>
      </div>
    );
  }

}



export default SearchResults;
