import React from 'react';
import ShapeSelectorBox from './ShapeSelectorBox';
import getFilteredShapes from '../../services/getFilteredShapes';

const Container = (context) => {
	const filteredShapes = getFilteredShapes(context);

	return (
		<div className="container">
			{ filteredShapes.map((history, key) =>
				<ShapeSelectorBox
					key={ key }
					{ ...{ ...context, data: history } }
				/>)}
		</div>);
};

export default Container;
