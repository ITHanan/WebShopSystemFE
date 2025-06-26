import "../components/Footer.css"
function Footer(){
	return(
		<div className="footer">
		<div>
		<div className="footer-title">	
		<img src="/src/images/ring.png" />
		<p className="title">Quick Links</p>
		</div>
		<p className="link">Home</p>
		<p className="link">Courses</p>
		<p className="link">Blogs</p>
		<p className="link">About us</p>
		<p className="link">Contact</p>
		
		</div>
		<div>
		<div className="footer-title">	
		<img src="/src/images/support.png" />
		<p className="title">Support</p>
		</div>
		<p className="link">Contact Us</p>
		<p className="link">FAQS</p>
		<p className="link">Help Center</p>
		</div>
		<div><div className="footer-title">	
		<img src="/src/images/about.png" />
		<p className="title">About</p>
		</div>
		<p className="link">About Us</p>
		<p className="link">Privacy Policy</p>
		</div>
		<div><div className="footer-title">	
		<img src="/src/images/social.png" />
		<p className="title">Social Media</p>
		</div>
		<p className="link">LinkedIn</p>
		<p className="link">YouTube</p>
		</div>
		</div>
	)
}
export default Footer