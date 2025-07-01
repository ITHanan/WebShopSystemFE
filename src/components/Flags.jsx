import { NavLink } from "react-router-dom"
import "../components/Flags.css"
function Flugs({flag}){
	return(
<div className="div-flags">
	<NavLink className="flag">
			<img src={flag.src} alt={flag.name} />
	<p>{flag.name}</p>

	</NavLink>
</div>
	)
}
export default Flugs