import "../components/Nav.css"
import { NavLink } from "react-router-dom";

function Nav(){
	return(
<div className="nav">
	<ul>
		<NavLink to="/">
			<button className="nav-btn">Home</button>
		</NavLink>
		<NavLink to="/components/courses/:courseListId?">
			<button className="nav-btn">Courses</button>
		</NavLink>
		<li>Courses</li>
		<li>Blogs</li>
		<li>About us</li>
		<li>Contact</li>
	</ul>

</div>
	)
}
export default Nav