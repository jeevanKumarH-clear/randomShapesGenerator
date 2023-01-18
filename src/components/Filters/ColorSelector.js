import React from 'react';
import Options from '../Menu/Selectors/Options/Options';

const ColorSelector = (context) => {
	const { setState, state, config: { colors }} = context;
	const { filter } = state;

	return (
		<select onChange={ (event) => setState({
			...state,
			filter: {
				...filter,
				color: event.target.value,
			},
		}) }
		><Options { ...{ ...context, data: ['any', ...colors] } }/>
		</select>
	);
};

export default ColorSelector;
