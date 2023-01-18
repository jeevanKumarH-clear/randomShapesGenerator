import React from 'react';
import Options from '../Menu/Selectors/Options/Options';

const ShapeSelector = (context) => {
	const { setState, state, config: { shapes }} = context;
	const { filter } = state;

	return (
		<select onChange={ (event) => setState({
			...state,
			filter: {
				...filter,
				shape: event.target.value,
			},
		}) }
		><Options { ...{ ...context, data: ['any', ...shapes] } }/>
		</select>
	);
};

export default ShapeSelector;
