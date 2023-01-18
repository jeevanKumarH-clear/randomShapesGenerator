import React from 'react';
import ShapeManager from '../../services/ShapeManager';
import Shape from '../Shape';

const ShapeSelectorBox = (context) => {
	const { config: { sizeValues, widthMultiplier },
		state: { currentShape },
		data: { id, size, shape }} = context;

	const isActive = id === currentShape.id;

	return (
		<div
			{ ...{ className: isActive && 'histories',
				style: {
					width: shape === 'rectangle'
						? sizeValues[size] * widthMultiplier
						: sizeValues[size],
					marginTop: '5%',
				},
				onClick: () => ShapeManager
					.toggleShape({ ...context, isActive }) } }
		><Shape { ...context }/>
		</div>);
};

export default ShapeSelectorBox;
