import React, { useState } from 'react';
import '../styles/SignUpForm.css'; 
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
	const [signupName, setSignupName] = useState('');
	const [signupEmail, setSignupEmail] = useState('');
	const [signupPassword, setSignupPassword] = useState('');
	const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
	const navigate = useNavigate();
	
	const handleSignup = (e) => {
		e.preventDefault();
		if (signupPassword !== signupConfirmPassword) {
			alert("Passwords do not match!");
			return;
		}
		fetch('https://localhost:7234/api/Auth/login', {// TODO: may need to update this URL to signup endpoint instead of login???
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				fullName: signupName,
				email: signupEmail,
				password: signupPassword
			}),
		})
		.then(response => {
			if (!response.ok) throw new Error('Signup failed');
			return response.json();
		})
		.then(data => {
			// Handle successful signup
			console.log('Signup successful:', data);
			navigate('/login');
		})
		.catch(error => {
			// Handle errors
			console.error('Error signing up:', error);
		});
	};
	
	return (
		<form className="signup-form" onSubmit={handleSignup}>
		<h2>Create your account</h2>
		<div className="form-group">
		<label>Full Name:</label>
		<input
		type="text"
		placeholder="Full name"
		value={signupName}
		onChange={(e) => setSignupName(e.target.value)}
		required
		/>
		</div>
		<div className="form-group">
		<label>Email Address:</label>
		<input
		type="email"
		placeholder="Email address"
		value={signupEmail}
		onChange={(e) => setSignupEmail(e.target.value)}
		required
		/>
		</div>
		<div className="form-group">
		<label>Password:</label>
		<input
		type="password"
		placeholder="Password"
		value={signupPassword}
		onChange={(e) => setSignupPassword(e.target.value)}
		required
		/>
		</div>
		<div className="form-group">
		<label>Confirm Password:</label>
		<input
		type="password"
		placeholder="Confirm password"
		value={signupConfirmPassword}
		onChange={(e) => setSignupConfirmPassword(e.target.value)}
		required
		/>
		</div>
		<div className="form-actions">
		<button type="submit">Sign up</button>
		<button
		type="button"
		className="switch-btn"
		onClick={() => navigate('/login')}
		>
		Login
		</button>
		</div>
		</form>
	);
};

export default SignUpForm;