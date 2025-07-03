import React, { useState } from 'react';
import '../styles/LoginForm.css'; 
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const [error, setError] = useState('');
	
	const handleSubmit = (e) => {
		e.preventDefault();
		setError('');
		if (!email || !password) {
			setError('Email and password are required');
			return;
		}
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
		<div>
			<Header></Header>
		<form className='login-form' onSubmit={handleSubmit}>
		{error && <div className="error-message">{error}</div>}
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
		<Footer></Footer>
		</div>
	);
};

export default LoginForm;
