import { HashRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import LoginForm from "./components/LoginForm"
import SignUpForm from "./components/SignUpForm"
import React from "react"



function App() {
	
	return (
		<HashRouter>
		<Routes>
		<Route path="/" element={<Home></Home>}></Route>
		<Route path="/login" element={<LoginForm />}></Route>
		<Route path="/signup" element={<SignUpForm />}></Route>
		</Routes>
		</HashRouter>
		
		
		
	)
}

export default App