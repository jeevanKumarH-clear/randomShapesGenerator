import React from 'react';

const remove = (context) => {
	const { state: { histories, selectedShape }} = context;
	const temp = histories.filter((history) => history.id !== selectedShape.id);

	return temp;
};

const DeleteButton = (context) => {
	const { state, setState } = context;

	return (
		<button
			onClick={ () => setState({ ...state,
				histories: remove(context) }) }
		>
			Delete
		</button>);
};

export default DeleteButton;
