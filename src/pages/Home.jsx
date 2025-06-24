import "../pages/Home.css"
import Header from "../components/Header";
import "../pages/Home.css"
import Nav from "../components/Nav";
import Flugs from "../components/Flags";
function Home(){
	const flags=[
		
		{id:1,
			src:"/src/images/image 12.png",
			name:"Japanese"
		},
		{id:2,
			src:"/src/images/image 10.png",
			name:"Hindi"
		},
		{id:3,
			src:"/src/images/image 1.png",
			name:"German"
		},
		{id:4,
			src:"/src/images/image 3.png",
			name:"Spanish"
		},
		{id:5,
			src:"/src/images/image 11.png",
			name:"Italian"
		},
		{id:6,
			src:"/src/images/image 14.png",
			name:"Swedish"
		},
		{id:7,
			src:"/src/images/Group 46.png",
			name:"Switzerland"
		},
		{id:8,
			src:"/src/images/image 5.png",
			name:"English"
		},
		{id:9,
			src:"/src/images/image 6.png",
			name:"Brazilian"
		},
		{id:10,
			src:"/src/images/image 15.png",
			name:"Turkish"
		},
		{id:11,
			src:"/src/images/image 4.png",
			name:"French"
		},
		{id:12,
			src:"/src/images/image 16.png",
			name:"Russian"
		},
		
	]
	return(
		<div className="container">
		<Header></Header>
		<Nav></Nav>
		<div className="main">
		<div className="circle">
		<p className="background-none">Everything</p>
		<p className="background-none"> You Need 
		</p>
		<p className="background-none">to Practice
		</p>
		
		</div>
		<div className="main-text">
		<p>More than 10 languages</p>
		<p>Over 2000 words</p>
		<p>Thousands of phrases</p>
		<p>Over 1 Million voice</p>
		<p>Over 1 Million Sentences</p>
		<p>Learn languages easily with us</p>
		</div>
		</div>

		<div className="flag-container">
			{flags.map(flag=>(
			<Flugs key={flag.id} flag={flag}></Flugs>
		))}
		</div>
		
		
		</div>
	)
}
export default Home;