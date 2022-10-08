import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
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
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { displayName, email, password, confirmPassword } = this.state

    if (password !== confirmPassword) {
      alert('passwords don\'t match')
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      await createUserProfileDocument(user, { displayName })

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    }
    catch (e) {
      console.log(e.message)
    }
  }

  render() {
    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
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

          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />

          <CustomeButton type="submit">Sign Up</CustomeButton>
        </form>

      </div>
    )
  }
}

export default SignUp