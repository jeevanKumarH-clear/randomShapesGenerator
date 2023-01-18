import React from 'react';
import ShapeManager from '../../services/ShapeManager';
import Shape from '../Shape';

const ShapeSelectorBox = (context) => {
	const { config: { sizeValues },
		state: { currentShape },
		data: { id, size }} = context;

	const isActive = id === currentShape.id;

	return (
		<div
			{ ...{
				className: isActive && 'histories',
				style: { width: sizeValues[size], marginTop: '5%' },
				onClick: () => ShapeManager
					.toggleShape({ ...context, isActive }),
			} }
		><Shape { ...context }/>
		</div>);
};

export default ShapeSelectorBox;
