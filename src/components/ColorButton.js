import React from 'react';
import ColorButtons from './ColorButtons';

const isCurrentColor = (context) => {
	const { state: { currentShape }, data: color } = context;

	return currentShape.color === color ;
};

const ColorButton = (context) => {
	const { setState, state } = context;
	const { currentShape } = state;

	return (
		<select {
			...{ className: isCurrentColor(context) && 'highlight',
				onChange: (event) => setState({
					...state,
					currentShape: {
						...currentShape,
						color: event.target.value,

					},
				}) } }
		><ColorButtons { ...context }/>
		</select>);
};

export default ColorButton;
