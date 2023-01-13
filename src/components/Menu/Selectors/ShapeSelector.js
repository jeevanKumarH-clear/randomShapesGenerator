import React from 'react';
import Shape from './Options/Shape';

const ShapeSelector = (context) => {
	const { setState, state } = context;
	const { currentShape } = state;

	return (
		<select {
			...{
				onChange: (event) => setState({
					...state, currentShape: {
						...currentShape,
						shape: event.target.value,
					},
				}),
			} }
		><Shape { ...context }/>
		</select>
	);
};

export default ShapeSelector;
