// @ts-nocheck
import React from 'react';
import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  const handleSigninSubmit = (data) => {
    console.log('Signin data:', data);
  };

  const handleSignupSubmit = (data) => {
    console.log('Signup data:', data);
  };
  return (
    <>
      <h1>Signin</h1>
      <Signin onSubmit={handleSigninSubmit} />
      <h1>Signup</h1>
      <Signup onSubmit={handleSignupSubmit} />
    </>
  );
}

export default App;
