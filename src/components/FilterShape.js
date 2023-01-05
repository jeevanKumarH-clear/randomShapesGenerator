import React from 'react';
import Shape from './Shape';

const FilterShape = (context) => {
	const { state: { filteredShape }} = context;

	return (
		<div className="filterShape">
			<Shape { ...{ ...context, data: filteredShape } }/>
		</div>);
};

export default FilterShape;
