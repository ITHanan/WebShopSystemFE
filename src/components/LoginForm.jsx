import React, { useState } from 'react';
import '../styles/LoginForm.css'; 

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
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
		value={email}
		onChange={(e) => setEmail(e.target.value)}
		required
		/>
		</div>
		<div className='form-group'>
		<label>Password:</label>
		<input
		type="password"
		value={password}
		onChange={(e) => setPassword(e.target.value)}
		required
		/>
		</div>
		<button type="submit">Login</button>
		</form>
	);
};

export default LoginForm;
