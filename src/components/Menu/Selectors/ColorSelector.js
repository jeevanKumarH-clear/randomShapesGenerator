import React from 'react';
import Color from './Options/Color';

const ColorSelector = (context) => {
	const { setState, state } = context;
	const { currentShape } = state;

	return (
		<select {
			...{
				onChange: (event) => setState({
					...state, currentShape: {
						...currentShape,
						color: event.target.value,
					},
				}),
			} }
		><Color { ...context }/>
		</select>);
};

export default ColorSelector;
