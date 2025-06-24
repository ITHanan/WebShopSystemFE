import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Registration.css'; 

const Registration = () => {
  const [form, setForm] = useState({
    userName: '',
    userEmail: '',
    password: '',
    courseLevel: '',
    agreeTerms: false,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7234/api/auth/register', form);console.log(response.data);
      setMessage('Registered successfully!');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="register-container">
        <h2 className='register-title'>Register for the course</h2>
        <form onSubmit={handleRegister} className='register-form'>
            <input
                type="text"
                name="userName"
                placeholder="Full name"
                value={form.userName}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="userEmail"
                placeholder="Email address"
                value={form.userEmail}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
            />
            <div className="select-with-arrow">
                <select
                    name="courseLevel"
                    value={form.courseLevel}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select your level</option>
                    <option value="beginner">Beginner</option>
                    <option value="upper-intermediate">Upper-Intermediate</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="pre-advanced">Pre-Advanced</option>
                    <option value="advanced">Advanced</option>
                </select>
                <span className="arrow-icon">→</span>
            </div>

            <label className="agree-checkbox">
                <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={form.agreeTerms}
                    onChange={(e) => setForm({ ...form, agreeTerms: e.target.checked })}
                    required
                />
                By signing up, you agree to our Terms and Privacy Policy.
            </label>


            <button className='register-btn' type="submit">Register</button>
            {message && <p>{message}</p>}
            <a className='signup-btn' href="/login">Sign up</a>
      </form>
    </div>
  );
};

export default Registration;
