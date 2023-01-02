import React from 'react';

const isCurrentShape = (context) => {
	const { state: { currentState }, data: shape } = context;

	return currentState.shape === shape ;
};

const ShapeButton = (context) => {
	const { setState, state, data: shape } = context;
	const { currentState } = state;

	return (
		<button {
			...{ className: isCurrentShape(context) ? 'highlight' : 'normal',
				onClick: () => setState({
					...state,
					currentState: { ...currentState, shape },
				}) } }
		>
			{ shape }
		</button>
	);
};

export default ShapeButton;
