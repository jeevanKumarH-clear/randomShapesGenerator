import React from 'react';

const ShapeButton = (context) => {
	const { setState, state, data: shape } = context;
	const { currentState } = state;

	return (
		<button
			onClick={ () => setState({
				...state,
				currentState: { ...currentState, shape },
			}) }
		>
			{ shape }
		</button>
	);
};

export default ShapeButton;
