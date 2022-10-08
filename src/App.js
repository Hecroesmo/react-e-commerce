
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Routes } from 'react-router-dom';
import ShopPage from './components/shop/shop.component';

import './App.css';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument, firestore } from './firebase/firebase.utils';
import { onAuthStateChanged } from 'firebase/auth'
import { doc, onSnapshot } from 'firebase/firestore';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        onSnapshot(doc(firestore, "users", userRef.id), (user) => {
          this.setState({
            currentUser: {
              id: userRef.id,
              ...user.data()
            }
          })
        })
      }
      else {
        this.setState({currentUser: userAuth})
      }
    })
  }

  componentWillUnmount() {
    this.state.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/sign-in' element={<SignInAndSignUp />} />
        </Routes>
      </div>
    );
  }
}

export default App;
