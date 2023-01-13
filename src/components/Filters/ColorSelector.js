import React from 'react';

const Colors = (context) => {
	const { config: { filters: { colors }}} = context;

	return colors.map((color, key) =>
		<option key={ key } value={ color }> {color} </option>);
};

const ColorSelector = (context) => {
	const { setState, state } = context;
	const { filter } = state;

	return (
		<select onChange={ (event) => setState({
			...state,
			filter: {
				...filter,
				color: event.target.value,
			},
		}) }
		><Colors { ...context }/>
		</select>
	);
};

export default ColorSelector;
