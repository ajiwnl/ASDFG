import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import SignUp from './components/SignUp';
import Error404 from './components/Error404';
import SignIn from './components/SignIn';
import Feeds from './components/Feeds'; // Import the Feeds component
import { auth } from './config/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false); // State variable to track authentication status

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
      setLoading(false);
      if (user) {
        setAuthenticated(true); // Set authenticated to true when user is logged in
      }
    });
    return () => unsubscribe();
  }, []);

  const onSignOut = async () => {
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
              {/* Render Feeds component if authenticated */}
              {authenticated && <Route path="/" element={<Feeds />} />}
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
