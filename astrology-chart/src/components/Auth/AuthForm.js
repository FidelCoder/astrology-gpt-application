import React, { useState } from 'react';
import axios from 'axios';
import './AuthForm.css'; 

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      // Do something with the response.data (user object)
      console.log(response.data);
    } catch (error) {
      console.error('Failed to login:', error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/signup', {
        fullName,
        username,
        age,
        country,
        email,
        password,
      });

      // After a successful signup, switch back to login form
      switchToLogin();
    } catch (error) {
      console.error('Failed to signup:', error);
    }
  };

  const switchToSignup = () => {
    setIsSignup(true);
  }

  const switchToLogin = () => {
    setIsSignup(false);
  }

  return (
    <form className="form">
      <p id="heading">{isSignup ? 'Sign Up' : 'Login'}</p>
      {isSignup && (
        <>
          <div className="field">
            <input placeholder="Full Name" className="input-field" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </div>
          <div className="field">
            <input placeholder="Age" className="input-field" type="text" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className="field">
            <input placeholder="Country" className="input-field" type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
          </div>
          <div className="field">
            <input placeholder="Email" className="input-field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </>
      )}
      <div className="field">
        <input autoComplete="off" placeholder="Username" className="input-field" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="field">
        <input placeholder="Password" className="input-field" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="btn">
        {isSignup 
          ? <button className="button2" onClick={handleSignup}>Sign Up</button>
          : <button className="button1" onClick={handleLogin}>Login</button>
        }
      </div>
      {isSignup 
        ? <button className="button3" type="button" onClick={switchToLogin}>Switch to Login</button>
        : <button className="button3" type="button" onClick={switchToSignup}>Switch to Sign Up</button>
      }
    </form>
  );
}

export default AuthForm;
