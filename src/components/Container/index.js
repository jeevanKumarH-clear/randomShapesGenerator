import React from 'react';
import isItemSelected from '../../services/isItemSelected';
import ShapeSelectorBox from './ShapeSelectorBox';
import getFilteredShapes from '../../services/getFilteredShapes';

const Container = (context) => {
	const filteredShapes = getFilteredShapes(context);

	return (
		<div className={ !isItemSelected(context) && 'container' }>
			{ filteredShapes.map((history, key) =>
				<ShapeSelectorBox
					key={ key }
					{ ...{ ...context, data: history } }
				/>)}
		</div>);
};

export default Container;
