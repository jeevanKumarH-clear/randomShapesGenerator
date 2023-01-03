import React from 'react';

const isCurrentShape = (context) => {
	const { state: { currentShape }, data: shape } = context;

	return currentShape.shape === shape ;
};

const ShapeButton = (context) => {
	const { setState, state, data: shape } = context;
	const { currentShape } = state;

	return (
		<button {
			...{ className: isCurrentShape(context) && 'highlight',
				onClick: () => setState({
					...state,
					currentShape: { ...currentShape, shape },
				}) } }
		>
			{ shape }
		</button>
	);
};

export default ShapeButton;
