import { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../config/firebase';
import './signin.css';

function SignIn() {
  // State variables to store error message, email, and password
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithEmail = async () => {
    try {
      setErrorMessage('');
  
      // Check if email or password is empty
      if (email.trim() === '' || password.trim() === '') {
        setErrorMessage('Email and password are required.');
        return;
      }
  
      // Sign in with email and password using Firebase auth
      await signInWithEmailAndPassword(auth, email, password);
  
      // Clear email and password fields after successful sign in
      setEmail('');
      setPassword('');
    } catch (error) {
      // Log the specific error returned by Firebase Authentication
      console.error('Sign-in error:', error);
  
      // Handle specific error codes
      if (error.code === 'auth/invalid-email') {
        setErrorMessage('Invalid email address.');
      } else if (error.code === 'auth/user-disabled') {
        setErrorMessage('User account has been disabled.');
      } else if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setErrorMessage('Invalid email or password.');
      } else {
        setErrorMessage('Failed to sign in.');
      }
    }
  };
  

  return (
    <div className='form'>
    <h1>Sign In</h1>
    <div className='error'>{errorMessage}</div>
    <div className='input-group'>
      <label>Email:</label>
      <input
        type='email'
        placeholder='Enter your email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className='input-group'>
      <label>Password:</label>
      <input
        type='password'
        placeholder='Enter your password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <button onClick={signInWithEmail}>Sign In</button>
  </div>
  );
}

export default SignIn;