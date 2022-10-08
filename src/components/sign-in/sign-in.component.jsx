import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import CustomeButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import './sign-in.style.scss'

class SignIn extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = async event => {
    event.preventDefault()

    const {email, password} = this.state

    try {
      await signInWithEmailAndPassword(auth, email, password)
      this.setState({email: '', password: ''})
    }
    catch(e) {
      console.log(e.message)
    }
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
            <CustomeButton onClick={ signInWithGoogle } isGoogleSignIn>
              Sign In With Google
            </CustomeButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn