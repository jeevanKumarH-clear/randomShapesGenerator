import React from 'react';

const SizeButtons = ({ config: { filters: { sizes }}}) =>
	sizes.map((size, key) =>
		<option key={ key } value={ size }> {size} </option>);

const SizeSelector = (context) => {
	const { state, setState } = context;
	const { filter } = state;

	return (
		<select onChange={ (event) => setState({
			...state,
			filter: {
				...filter,
				size: event.target.value,
			},
		}) }
		>
			<SizeButtons { ...context }/>
		</select>
	);
};

export default SizeSelector;
