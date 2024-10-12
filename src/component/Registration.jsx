import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import image from '../assets/Registration.jpg';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a new user with Firebase Authentication
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      console.log('User registered successfully');
      // Navigate to the login page after successful registration
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <form className="mx-1 mx-md-4" onSubmit={handleFormSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            name="name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                          <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                          <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            name="password"
                            className="form-control"
                            value={formData.password}
                            onChange={handleInputChange}
                          />
                          <label className="form-label" htmlFor="form3Example4c">Password</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            name="confirmPassword"
                            className="form-control"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                          />
                          <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          id="form2Example3c"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label" htmlFor="form2Example3c">
                          I agree to all statements in <a href="#!">Terms of Service</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">Register</button>
                      </div>
                      <p className='ms-5'>
              Already have an account? <a href="/login" className="link-info">login here</a>
            </p>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src={image} className="img-fluid" alt="Registration" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
