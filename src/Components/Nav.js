import React, { Component } from 'react';
import SearchForm from "./SearchForm"
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'

class Nav extends Component {

  profileLink = () => {
    if (localStorage.getItem("token")){
      return <Link to={`/profile`} className="link review">Your Profile</Link>
    }
  }

  render() {
    return (
      <div className="ui grid" id="nav">
        <Link to="/" className="three wide column link">SaveSpace Logo</Link>
        <SearchForm changeHandler={this.props.changeHandler} term={this.props.term} location={this.props.location} submitHandler={this.props.submitHandler}/>
        <a className="link review" href="/">Write a Review</a>
        {this.profileLink()}
      </div>
    );
  }

}

export default withRouter(Nav);
