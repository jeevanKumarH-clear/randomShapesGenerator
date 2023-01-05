import React from 'react';

const ColorButtons = (context) => {
	const { config: { filterColors }} = context;

	return filterColors.map((color, key) =>
		<option key={ key } value={ color }> { color} </option>);
};

const ColorFilterButton = (context) => {
	const { setState, state } = context;
	const { filteredShape } = state;

	return (
		<select {
			...{ 	onChange: (event) => setState({
				...state,
				filteredShape: {
					...filteredShape,
					color: event.target.value,
				},
			}) } }
		><ColorButtons { ...context }/>
		</select>);
};

export default ColorFilterButton;
