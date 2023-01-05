import React from 'react';
import ColorFilterButton from './ColorFilterButton';
import ShapeFilterButton from './ShapeFilterButton';
import SizeFilterButton from './SizeFilterButton';

const FilterButtons = (context) =>
	<div className="filterButtons">
		<ShapeFilterButton { ...context }/>
		<SizeFilterButton { ...context }/>
		<ColorFilterButton { ...context }/>
	</div>;

export default FilterButtons;
