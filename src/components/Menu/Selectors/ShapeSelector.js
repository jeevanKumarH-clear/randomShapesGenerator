import React from 'react';
import Shape from './Options/Shape';

const isCurrentShape = (context) => {
	const { state: { currentShape }, data: shape } = context;

	return currentShape.shape === shape ;
};

const ShapeSelector = (context) => {
	const { setState, state } = context;
	const { currentShape } = state;

	return (
		<select {
			...{ className: isCurrentShape(context) && 'highlight',
				onChange: (event) => setState({
					...state,
					currentShape: {
						...currentShape,
						shape: event.target.value,
					},
				}) } }
		>
			<Shape { ...context }/>
		</select>
	);
};

export default ShapeSelector;
