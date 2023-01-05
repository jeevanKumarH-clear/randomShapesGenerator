import React from 'react';

const ShapeButtons = (context) => {
	const { config: { filterShapes }} = context;

	return filterShapes.map((shape, key) =>
		<option key={ key } value={ shape }> { shape} </option>);
};

const ShapeFilterButton = (context) => {
	const { setState, state } = context;
	const { filteredShape } = state;

	return (
		<select {
			...{ onChange: (event) => setState({
				...state,
				filteredShape: {
					...filteredShape,
					shape: event.target.value,
				},
			}) } }
		>
			<ShapeButtons { ...context }/>
		</select>
	);
};

export default ShapeFilterButton;
