import React, { Component } from 'react';

class LoginForm extends Component {

  state={
    username: '',
    password: ''
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
          <form className="ui form" onSubmit={(e) => {this.props.loginHandler(e, this.state)}}>
              <div className="field">
                <label>Username</label>
                <div className="ui left icon input">
                  <input type="text" name="username" placeholder="Username" value={this.state.username}
                  onChange={this.changeHandler}/>
                  <i className="user icon"></i>
                </div>
              </div>

              <div className="field">
                <label>Password</label>
                <div className="ui left icon input">
                  <input type="password" name="password" value={this.state.password} onChange={this.changeHandler}/>
                  <i className="lock icon"></i>
                </div>
              </div>

              <button type="submit" className="ui blue submit button">Login</button>
          </form>
      </div>
    );
  }

}

export default LoginForm;
