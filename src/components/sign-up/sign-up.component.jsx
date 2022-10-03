import React from "react";
import CustomeButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import './sign-up.style.scss'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleChange = event => {
    const {value, name} = event.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        <h2>I do not have an account</h2>
        <span>sign up with your email and password</span>
        <form>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />

          <FormInput
            type="email"
            name="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />

          <CustomeButton>Sign Up</CustomeButton>
        </form>

      </div>
    )
  }
}

export default SignUp