import { HashRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import LoginForm from "./components/LoginForm"
import SignUpForm from "./components/SignUpForm"
import CourseDescription from './components/CourseDescription'
import React from "react"



function App() {
	
	return (
		<HashRouter>
		<Routes>
		<Route path="/" element={<Home></Home>}></Route>
		<Route path="/login" element={<LoginForm />}></Route>
		<Route path="/signup" element={<SignUpForm />}></Route>
		<Route path="/course" element={<CourseDescription />}></Route> TODO: change this route to accept course id from course list page when click on explore course button
		{/*<Route path="/course/:id" element={<CourseDescription />}></Route>*/}
		
		</Routes>
		</HashRouter>
		
		
		
	)
}

export default App