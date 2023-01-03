
const updateShape = (context) => {
	const { state: { histories, currentShape }} = context;

	return histories.map((history) =>
		(history.id === currentShape.id ? currentShape : history));
};

export default updateShape;
