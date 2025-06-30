import { HashRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import LoginForm from "./components/LoginForm"
import Registration from "./components/Registration.jsx"
import CourseList from "./components/CourseList.jsx"

function App() {

  return (
	<div className="wrapper">
		{/* <Registration /> */}
		<CourseList />
	</div>
	// <HashRouter>
	// 	<Routes>
	// 		<Route path="/" element={<Home></Home>}></Route>
	// 		<Route path="/login" element={<LoginForm />}></Route>
	// 	</Routes>
	// </HashRouter>
	


  )
}

export default App