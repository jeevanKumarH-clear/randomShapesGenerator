import React from 'react';
import ShapeButtons from './ShapeButtons';

const isCurrentShape = (context) => {
	const { state: { currentShape }, data: shape } = context;

	return currentShape.shape === shape ;
};

const ShapeButton = (context) => {
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
			<ShapeButtons { ...context }/>
		</select>
	);
};

export default ShapeButton;
