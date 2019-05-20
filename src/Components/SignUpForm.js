import React, { useState } from 'react';

function SignUpForm(props){
  const {firstName,
  username,
  password,
  subObj,
  fnChangeHandler,
  unChangeHandler,
  passChangeHandler} = useSignUpState();

    return (
      <div>
        <h1 className="rev-rate">Sign Up Homie</h1>
        <form className="ui form" onSubmit={(e) => {props.signupHandler(e, subObj)}}>
            <div className="field">
              <label>First Name</label>
              <div className="ui left icon input">
                <input type="text" value={firstName} name="first_name" onChange={fnChangeHandler} required/>
              </div>
            </div>
            <div className="field">
              <label>Username</label>
              <div className="ui left icon input">
                <input type="text" placeholder="Username" name="username" value={username}
                onChange={unChangeHandler} required/>
                <i className="user icon"></i>
              </div>
            </div>
            <div className="field">
              <label>Password</label>
              <div className="ui left icon input">
                <input type="password" name="password" value={password} onChange={passChangeHandler} required/>
                <i className="lock icon"></i>
              </div>
            </div>
            <button className="ui blue submit button" type="submit">Sign Up</button>
        </form>
    </div>
    );
}

function useSignUpState(){

  const [firstName, setFirstName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const subObj = [firstName, username, password];

  function fnChangeHandler(e){ setFirstName(e.target.value);}
  function unChangeHandler(e) { setUsername(e.target.value);}
  function passChangeHandler(e) { setPassword(e.target.value);}

  return {
    firstName,
    username,
    password,
    subObj,
    fnChangeHandler,
    unChangeHandler,
    passChangeHandler
  };
}

export default SignUpForm;
