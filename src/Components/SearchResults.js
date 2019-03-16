import React, { Component } from 'react';

//import { Link } from 'react-router-dom'

class SearchResults extends Component {

  render() {
    console.log(this.props.result)
    return (
      <div className="box" onClick={(e) => this.props.clickHandler(e, this.props.result)}>
        <img className="search-img" alt={this.props.result.name} src={this.props.result.image_url}/>
        <h2 className="search-text">{this.props.result.name}</h2>
        <h3 className="search-text">
        {this.props.result.location.address1}</h3>
        <h3 className="search-text pt2">
        {this.props.result.location.city}, {this.props.result.location.state} {this.props.result.location.zip_code}</h3>
        <h3 className="search-text pt3">
        {this.props.result.phone}</h3>
        <div className="search-rating-bar">
          <h3 className="five wide column"><span className="search-rating">{
          this.props.result.poc ? this.props.result.poc : 'n/a' }</span> POC Friendly</h3>
          <h3 className="five wide column"><span className="search-rating">{this.props.result.women ? this.props.result.women : 'n/a'}</span> Women Friendly</h3>
          <h3 className="five wide column"><span className="search-rating">{this.props.result.lgbtq ? this.props.result.lgbtq : 'n/a'}</span> LGBTQ Friendly</h3>
        </div>
      </div>
    );
  }

}



export default SearchResults;
