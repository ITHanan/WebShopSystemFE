import React, { useState } from 'react';
import '../styles/LoginForm.css'; 
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	
	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('https://localhost:7234/api/Auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Login failed');
				}
				return response.json();
			})
			.then((data) => {
				// Handle successful login
				console.log('Login successful:', data);
			})
			.catch((error) => {
				// Handle errors
				console.error('Error logging in:', error);
			});
	};
	
	return (
		<form className='login-form' onSubmit={handleSubmit}>
		<h2>Login to your account</h2>
		<div className='form-group'>
		<label>Email:</label>
		<input
		type="email"
		placeholder='Email address'
		value={email}
		onChange={(e) => setEmail(e.target.value)}
		required
		/>
		</div>
		<div className='form-group'>
		<label>Password:</label>
		<input
		type="password"
		placeholder='Password'
		value={password}
		onChange={(e) => setPassword(e.target.value)}
		required
		/>
		</div>

	            <div className="form-actions">
                <button type="submit">Login</button>
                <button
                    type="button"
                    className="switch-btn"
                    onClick={() => navigate('/signup')}
                >
                    Sign up
                </button>
            </div>
            <div className="lost-password">
                Lost password? <a href="#">Click here</a>
            </div>
		</form>
	);
};

export default LoginForm;
