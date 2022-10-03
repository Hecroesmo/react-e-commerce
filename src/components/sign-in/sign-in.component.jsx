import React from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomeButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import './sign-in.style.scss'

class SignIn extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: 'hecroesmo@gmail.com',
      password: 'hecro123'
    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({ email: '', password: '' })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an acount</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
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
          <div className="button-container">
            <CustomeButton type="submit">Sign In</CustomeButton>
            <CustomeButton onClick={ signInWithGoogle }>
              {' '}
              Sign In With Google
              {' '}
            </CustomeButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn