import React from 'react';

const ColorButton = (context) => {
	const { setState, state, data: color } = context;
	const { currentState } = state;

	return (
		<button
			onClick={ () => setState({
				...state,
				currentState: { ...currentState, color },
			}) }
		>{color}
		</button>);
};

export default ColorButton;
