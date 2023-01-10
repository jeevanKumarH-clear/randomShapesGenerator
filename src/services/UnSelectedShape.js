const UnselectedShape = (context) => {
	const { state, setState } = context;
	const { data: { color, size, shape }} = context;

	return setState({
		...state,
		currentShape: {
			color, size, shape,
		},
	});
};

export default UnselectedShape;
