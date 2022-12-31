const remove = (context) => {
	const { state: { histories, currentState }} = context;
	const temp = histories.filter((history) => history.id !== currentState.id);

	return temp;
};

export default remove;
