import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleUserInfo = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

  handleSubmit = event => {
    event.preventDefault()
    console.log("made it here")
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleUserInfo(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"onChange={event => this.handleUserInfo(event)} />
          </label>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
