import React from 'react';

const ShapeButtons = (context) => {
	const { config: { filters: { shapes }}} = context;

	return shapes.map((shape, key) =>
		<option key={ key } value={ shape }> { shape} </option>);
};

const ShapeSelector = (context) => {
	const { setState, state } = context;
	const { filter } = state;

	return (
		<select onChange={ (event) => setState({
			...state,
			filter: {
				...filter,
				shape: event.target.value,
			},
		}) }
		><ShapeButtons { ...context }/>
		</select>
	);
};

export default ShapeSelector;
