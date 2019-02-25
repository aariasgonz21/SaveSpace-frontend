import React, { Component } from 'react';
import SearchForm from "./SearchForm"

class Nav extends Component {

  render() {
    return (
      <div className="ui grid" id="nav">
        <a href="#" className="three wide column link">SaveSpace Logo</a>
        <SearchForm changeHandler={this.props.changeHandler} term={this.props.term} location={this.props.location} submitHandler={this.props.submitHandler}/>
        <a className="link review" href="#">Write a Review</a>
      </div>
    );
  }

}

export default Nav;
