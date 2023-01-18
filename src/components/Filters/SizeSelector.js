import React from 'react';
import Options from '../Menu/Selectors/Options/Options';

const SizeSelector = (context) => {
	const { state, setState, config: { sizes }} = context;
	const { filter } = state;

	return (
		<select onChange={ (event) => setState({
			...state,
			filter: {
				...filter,
				size: event.target.value,
			},
		}) }
		><Options { ...{ ...context, data: ['any', ...sizes] } }/>
		</select>
	);
};

export default SizeSelector;
