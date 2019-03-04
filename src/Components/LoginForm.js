import React, { Component } from 'react';

class LoginForm extends Component {

  state={

  }

  render() {
    return (
      <div>
        <h2>Login</h2>
          <div className="ui form" onSubmit={this.props.loginHandler}>
              <div className="field">
                <label>Username</label>
                <div className="ui left icon input">
                  <input type="text" placeholder="Username" value={this.state.username}
                  onChange={this.props.changeHandler}/>
                  <i className="user icon"></i>
                </div>
              </div>
              <div className="field">
                <label>Password</label>
                <div className="ui left icon input">
                  <input type="password" value={this.state.password} onChange={this.props.changeHandler}/>
                  <i className="lock icon"></i>
                </div>
              </div>
              <div className="ui blue submit button">Login</div>
          </div>
      </div>
    );
  }

}

export default LoginForm;
