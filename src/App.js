import React from 'react';

import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.confic';

firebase.initializeApp(firebaseConfig);

function App() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () =>{
   firebase.auth().signInWithPopup(provider)
   .then(res =>{
     console.log(res);
     
     
   })
  }
  return (
    <div className="App">
      
      <button onClick={handleSignIn}>Sing In Google</button>
    </div>
  );
}

export default App;
