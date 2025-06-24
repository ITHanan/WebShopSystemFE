import "../components/Footer.css"
function Footer(){
	return(
		<div className="footer">
		<div>
		<div className="footer-title">	
		<img src="/src/images/ring.png" />
		<p className="title">Quick Links</p>
		</div>
		<p>Home</p>
		<p>Courses</p>
		<p>Blogs</p>
		<p>About us</p>
		<p>Contact</p>
		
		</div>
		<div>
		<div className="footer-title">	
		<img src="/src/images/support.png" />
		<p className="title">Support</p>
		</div>
		<p>Contact Us</p>
		<p>FAQS</p>
		<p>Help Center</p>
		</div>
		<div><div className="footer-title">	
		<img src="/src/images/about.png" />
		<p className="title">About</p>
		</div>
		<p>About Us</p>
		<p>Privacy Policy</p>
		</div>
		<div><div className="footer-title">	
		<img src="/src/images/social.png" />
		<p className="title">Social Media</p>
		</div>
		<p>LinkedIn</p>
		<p>YouTube</p>
		</div>
		</div>
	)
}
export default Footer