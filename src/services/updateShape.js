
const updateShape = (context) => {
	const { state: { histories, currentState }} = context;

	return (
		histories.map((history) =>
			(history.id === currentState.id ? currentState : history))
	);
};

export default updateShape;
