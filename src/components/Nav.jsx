import "../components/Nav.css"
import { NavLink } from "react-router-dom"
function Nav(){
	return(
<div className="nav">
	<ul>
		<NavLink><li>
			Home
		</li></NavLink>
        <NavLink to="/courses"><li>Courses</li></NavLink>
		<NavLink><li>Blogs</li></NavLink>
		<NavLink><li>About us</li></NavLink>
		<NavLink><li>Contact</li></NavLink>
	</ul>

</div>
	)
}
export default Nav