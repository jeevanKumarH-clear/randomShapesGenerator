import React from 'react';

const AddButton = (context) => {
	const { state, setState } = context;
	const { currentState, histories } = state;

	return (
		<button
			onClick={ () => setState({ ...state,
				histories: [...histories, currentState] }) }
		>
			Add
		</button>);
};

export default AddButton;
