import React from 'react';

const FilterShapes = ({ state: { histories, filteredShape }}) =>
	histories.filter((history) => Object.keys(filteredShape)
		.every((shapeProp) =>
			filteredShape[shapeProp] === 'any'
			|| history[shapeProp] === filteredShape[shapeProp]));

const FilterButton = (context) => {
	const { state, setState } = context;

	return (
		<button onClick={ () => setState({
			...state,
			filterShapes: FilterShapes(context),
		}) }
		>
			Filter
		</button>
	);
};

export default FilterButton;
