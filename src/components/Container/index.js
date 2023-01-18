import React from 'react';
import ShapeManager from '../../services/ShapeManager';
import AlertMsg from './AlertMsg';
import FilteredShapes from './FilteredShapes';

const Container = (context) => {
	const filteredShapes = ShapeManager.getFilteredShapes(context);

	return (
		<div className="container">
			{ ShapeManager.hasShapes(context)
				? <AlertMsg/>
				: <FilteredShapes { ...{ ...context, data: filteredShapes } }/>}
		</div>);
};

export default Container;
