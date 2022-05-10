 function head(props) {
	return (
		<li >
			<span>{props.description}</span>, <span>{props.sleep}</span>
		</li>
	);
}

export default head;