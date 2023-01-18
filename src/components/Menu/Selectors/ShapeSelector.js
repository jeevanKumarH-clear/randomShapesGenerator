import React from 'react';
import Options from './Options/Options';

const ShapeSelector = (context) => {
	const { setState, state, config: { shapes }} = context;
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
		><Options { ...{ ...context, data: shapes } }/>
		</select>
	);
};

export default ShapeSelector;
