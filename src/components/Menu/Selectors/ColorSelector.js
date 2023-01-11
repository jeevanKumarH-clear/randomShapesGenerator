import React from 'react';
import Color from './Options/Color';

const isCurrentColor = (context) => {
	const { state: { currentShape }, data: color } = context;

	return currentShape.color === color ;
};

const ColorSelector = (context) => {
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
		><Color { ...context }/>
		</select>);
};

export default ColorSelector;
