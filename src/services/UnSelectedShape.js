const UnselectedShape = (context) => {
	const { state, setState, data } = context;

	return setState({
		...state,
		currentShape: {
			...data,
			id: null,
		},
	});
};

export default UnselectedShape;
