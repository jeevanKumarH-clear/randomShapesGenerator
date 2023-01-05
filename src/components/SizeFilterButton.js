import React from 'react';

const SizeButtons = (context) => {
	const { config: { filterSizes }} = context;

	return filterSizes.map((size, key) =>
		<option key={ key } value={ size }> { size} </option>);
};

const SizeFilterButton = (context) => {
	const { state, setState } = context;
	const { filteredShape } = state;

	return (
		<select {
			...{ onChange: (event) => setState({
				...state,
				filteredShape: {
					...filteredShape,
					size: event.target.value,
				},
			}) } }
		>
			<SizeButtons { ...context }/>
		</select>
	);
};

export default SizeFilterButton;
