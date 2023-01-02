import React from 'react';
import getCurrentState from '../services/getCurrentState';

const NewButton = (context) => {
	const { state, setState } = context;

	return (
		<button
			onClick={ () => setState({
				...state,
				currentState: getCurrentState(context),
			}) }
		>
			New
		</button>);
};

export default NewButton;
