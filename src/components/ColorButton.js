import React from 'react';

const isCurrentColor = (context) => {
	const { state: { currentShape }, data: color } = context;

	return currentShape.color === color ;
};

const ColorButton = (context) => {
	const { setState, state, data: color } = context;
	const { currentShape } = state;

	return (
		<button {
			...{ className: isCurrentColor(context) ? 'highlight' : 'normal',
				onClick: () => setState({
					...state,
					currentShape: { ...currentShape, color },
				}) } }
		>{color}
		</button>);
};

export default ColorButton;
