import React from 'react';
import ShapeSelectorBox from './ShapeSelectorBox';

const FilteredShapes = (context) => {
	const { data } = context;

	return data.map((history, key) =>
		<ShapeSelectorBox
			key={ key }
			{ ...{ ...context, data: history } }
		/>);
};

export default FilteredShapes;
