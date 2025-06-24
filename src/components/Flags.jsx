import "../components/Flags.css"
function Flugs({flag}){
	return(
<div className="div-flags">
	<div className="flag">
			<img src={flag.src} alt={flag.name} />
	<p>{flag.name}</p>

	</div>
</div>
	)
}
export default Flugs