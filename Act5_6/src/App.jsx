import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'; // Import Link
import SignUp from './components/SignUp';
import Error404 from './components/Error404';
import SignIn from './components/SignIn';
import { auth } from './config/firebase'; // Import auth from Firebase config
import { onAuthStateChanged, signOut } from 'firebase/auth'; // Import onAuthStateChanged and signOut

function App() {
  // State variables to store user information and loading status
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // useEffect hook to listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, user => {
      console.log('onAuthStateChanged', user);
      setUser(user);
      setLoading(false);
    });
    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  const onSignOut = async () => {
    // Function to handle user sign out
    await signOut(auth);
  }

  return (
    <div>
      {
        loading ? <div>Loading...</div> : <>
          
          {user ? <button onClick={onSignOut} className='sign-out'>Sign out</button> : null}
          <Router>
            <nav>
            
              {!user && <Link to="/sign-up">Sign Up</Link>}
              {!user && <Link to="/sign-in">Sign In</Link>}
            </nav>
            <Routes>
       
              <Route path="/sign-up" element={user ? <Navigate to="/" /> : <SignUp />} />

              <Route path="/sign-in" element={user ? <Navigate to="/" /> : <SignIn />} />

              {/* Other routes */}
              {/* <Route path="/some-other-route" element={<SomeComponent />} /> */}
            </Routes>
          </Router>
        </>
      }
    </div>
  )
}

export default App;
