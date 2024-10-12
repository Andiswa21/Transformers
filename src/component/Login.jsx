import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import { auth } from '../firebaseConfig';  // Import Firebase Auth
import { signInWithEmailAndPassword } from 'firebase/auth';  // Firebase method for signing in
import image from '../assets/Registration.jpg?url';  // Update image import statement

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Verify that email and password are not empty
    if (!email || !password) {
      setError('Please enter a valid email and password');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Logged in as:', user.email);
        // Redirect or perform actions after successful login
      })
      .catch((error) => {
        setError(error.message);  // Display error if login fails
        console.error('Error logging in:', error.message);
      });
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm='6'>
          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0">Easylearn</span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Welcome back 🎉</h3>

            {error && <p style={{ color: 'red' }} className="ms-5">{error}</p>}  {/* Display login error */}

            <MDBInput 
              wrapperClass='mb-4 mx-5 w-100' 
              label='Email address' 
              id='emailInput' 
              type='email' 
              size="lg" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />

            <MDBInput 
              wrapperClass='mb-4 mx-5 w-100' 
              label='Password' 
              id='passwordInput' 
              type='password' 
              size="lg" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />

            <MDBBtn 
              className="mb-4 px-5 mx-5 w-100" 
              color='info' 
              size='lg'
              onClick={handleLogin}  // Call handleLogin when button is clicked
            >
              Login
            </MDBBtn>

            <p className="small mb-5 pb-lg-3 ms-5">
              <a className="text-muted" href="#!">Forgot password?</a>
            </p>

            <p className='ms-5'>
              Don't have an account? <a href="/" className="link-info">Register here</a>
            </p>
          </div>
        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src={new URL(image, import.meta.url).href}
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;