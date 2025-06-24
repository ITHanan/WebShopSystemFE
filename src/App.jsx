import { HashRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import LoginForm from "./components/LoginForm"
import Registration from "./components/Registration.jsx"

function App() {

  return (
	<div className="wrapper">
		<Registration />
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