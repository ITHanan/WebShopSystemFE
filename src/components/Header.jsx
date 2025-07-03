import vector from "../images/vector.png"
import heart from "../images/heart.png"
import basket from "../images/basket.png"
import "../components/Header.css"
import { NavLink } from "react-router-dom"
function Header(){
	return(
		<div className="header">
			<div className="title-header"><span className="color-orange big-font">I</span><span className="color-orange margin">N</span>
			<span className="color-orange big-font f-font">F</span><span className="color-orange margin">I</span><span className="color-orange big-font">N</span><span className="color-orange">E</span><span className="color-orange margin">T</span>ACADEMY</div>
			<div className="border">Discover your abilities and start with us</div>
			<div className="icon">
				<NavLink to="/login"><img src={vector} /></NavLink>
		
			</div>

		</div>

	)
}
export default Header