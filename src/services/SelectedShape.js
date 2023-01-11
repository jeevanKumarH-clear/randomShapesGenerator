const SelectedShape = (context) => {
	const { state, setState, data } = context;

	return setState({
		...state,
		currentShape: {
			...data,
		},
	});
};

export default SelectedShape;
