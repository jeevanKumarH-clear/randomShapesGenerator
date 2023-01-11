import React from 'react';
import ShapeSelectorBox from './ShapeSelectorBox';
import ShapeManager from '../../services/ShapeManager';

const Container = (context) => {
	const filteredShapes = ShapeManager.getFilteredShapes(context);

	return (
		<div
			className="container"
		>
			{
				filteredShapes.map((history, key) =>
					<ShapeSelectorBox
						key={ key }
						{ ...{ ...context, data: history } }
					/>)
			}
		</div>);
};

export default Container;
