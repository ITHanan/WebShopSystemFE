import { NavLink } from "react-router-dom"
import "../components/Footer.css"
function Footer(){
	return(
		<div className="footer">
		<div>
		<div className="footer-title">	
		<img src="/src/images/ring.png" />
		<p className="title">Quick Links</p>
		</div>
		<div className="column">
		<NavLink className="link">Home</NavLink>
		<NavLink className="link">Courses</NavLink>
		<NavLink className="link">Blogs</NavLink>
		<NavLink className="link">About us</NavLink>
		<NavLink className="link">Contact</NavLink>
		</div>
		</div>
		<div>
		<div className="footer-title">	
		<img src="/src/images/support.png" />
		<p className="title">Support</p>
		</div>
		<div className="column">
		<NavLink className="link">Contact Us</NavLink>
		<NavLink className="link">FAQS</NavLink>
		<NavLink className="link">Help Center</NavLink></div>
		</div>
		<div><div className="footer-title">	
		<img src="/src/images/about.png" />
		<p className="title">About</p>
		</div>
		<div className="column">
		<NavLink className="link">About Us</NavLink>
		<NavLink className="link">Privacy Policy</NavLink></div>
		</div>
		<div><div className="footer-title">	
		<img src="/src/images/social.png" />
		<p className="title">Social Media</p>
		</div>
		<div className="column">
		<NavLink className="link">LinkedIn</NavLink>
		<NavLink className="link">YouTube</NavLink></div>
		</div>
		</div>
	)
}
export default Footer