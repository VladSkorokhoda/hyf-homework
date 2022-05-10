import doless from "./doless";
import Head from "./head";

function a1() {
	return (
		<div>
			<ul>
				{doless.map((doles)=>{
					return (
						<Head description={doles.description}
						sleep={doles.sleep}/>
					)
				})}
			</ul>
		</div>
	)
}
export default a1