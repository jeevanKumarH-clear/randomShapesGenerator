import React from 'react';
import ShapeManager from '../../services/ShapeManager';
import Shape from '../Shape';

const ShapeSelectorBox = (context) => {
	const { config: { sizes },
		state: { currentShape },
		data: { id, size }} = context;

	const isActive = id === currentShape.id;

	return (
		<div
			style={ { width: sizes[size], marginTop: '5%' } }
			{
				...{
					className: isActive && 'histories',
					onClick: () => ShapeManager
						.toggleShape({ ...context, isActive }),
				} }
		>
			<Shape { ...context }/>
		</div>);
};

export default ShapeSelectorBox;
