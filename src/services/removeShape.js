const remove = (context) => {
	const { state: { histories, currentShape }} = context;
	const temp = histories.filter((history) => history.id !== currentShape.id);

	return temp;
};

export default remove;
