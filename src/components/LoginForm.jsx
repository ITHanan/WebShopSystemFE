import React, { useState } from 'react';
import '../styles/LoginForm.css'; 

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	const handleSubmit = (e) => {
		e.preventDefault();
		//todo: Implement login logic here
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
