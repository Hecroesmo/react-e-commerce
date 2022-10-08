// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, doc, query } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider, signInWithPopup, setPersistence, browserSessionPersistence } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-l3Q7OktcXHHbec5VMDrgEW-3wCUWp8s",
  authDomain: "clothes-ecommerce-78bbd.firebaseapp.com",
  projectId: "clothes-ecommerce-78bbd",
  storageBucket: "clothes-ecommerce-78bbd.appspot.com",
  messagingSenderId: "988000281993",
  appId: "1:988000281993:web:4d9586ef1ff444bf90ed58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
export const auth = getAuth(app)
setPersistence(auth, browserSessionPersistence)

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => signInWithPopup(auth, provider)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = collection(firestore, `users`)

  console.log(query(doc(userRef, `${userAuth.uid}`)))
  // const snapshot = await userRef.get()
  // console.log(snapshot)
}

export default app