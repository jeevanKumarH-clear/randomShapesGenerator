import React from 'react';

const isCurrentColor = (context) => {
	const { state: { currentState }, data: color } = context;

	return currentState.color === color ;
};

const ColorButton = (context) => {
	const { setState, state, data: color } = context;
	const { currentState } = state;

	return (
		<button {
			...{ className: isCurrentColor(context) ? 'highlight' : 'normal',
				onClick: () => setState({
					...state,
					currentState: { ...currentState, color },
				}) } }
		>{color}
		</button>);
};

export default ColorButton;
