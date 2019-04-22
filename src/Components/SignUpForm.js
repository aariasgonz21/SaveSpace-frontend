import React, { Component } from 'react';

class SignUpForm extends Component {

  state={
    first_name: '',
    username: '',
    password: '',
    bio: ''
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1 className="rev-rate">Sign Up Homie</h1>
        <form className="ui form" onSubmit={(e) => {this.props.signupHandler(e, this.state)}}>

            <div className="field">
              <label>First Name</label>
              <div className="ui left icon input">
                <input type="text" value={this.state.first_name} name="first_name" onChange={ this.changeHandler} required/>
              </div>
            </div>

            <div className="field">
              <label>Username</label>
              <div className="ui left icon input">
                <input type="text" placeholder="Username" name="username" value={this.state.username}
                onChange={ this.changeHandler} required/>
                <i className="user icon"></i>
              </div>
            </div>

            <div className="field">
              <label>Password</label>
              <div className="ui left icon input">
                <input type="password" name="password" value={this.state.password} onChange={this.changeHandler} required/>
                <i className="lock icon"></i>
              </div>
            </div>

            <div className="field">
              <label>Bio</label>
              <div className="ui left icon input">
                <input type="text" name="bio" value={this.state.bio} onChange={ this.changeHandler}/>
              </div>
            </div>

            <button className="ui blue submit button" type="submit">Sign Up</button>
        </form>
    </div>
    );
  }

}

export default SignUpForm;
