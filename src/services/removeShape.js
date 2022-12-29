const remove = (context) => {
	const { state: { histories, selectedShape }} = context;
	const temp = histories.filter((history) => history.id !== selectedShape.id);

	return temp;
};

export default remove;
