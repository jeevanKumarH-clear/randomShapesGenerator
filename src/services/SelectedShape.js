const SelectedShape = (context) => {
	const { state, setState } = context;
	const { data: { color, size, shape, id }} = context;

	return setState({
		...state,
		currentShape: {
			color, size, shape, id,
		},
	});
};

export default SelectedShape;
