import React from 'react';
import ShapeManager from '../../services/ShapeManager';
import Shape from '../Shape';

const isActive = (context) => {
	const { state: { currentShape }, data: { id }} = context;

	return id === currentShape.id;
};

const ShapeSelectorBox = (context) => {
	const { data: history, config: { sizes }} = context;

	return (
		<div
			style={ { width: sizes[history.size], marginTop: '5%' } }
			{
				...{
					className: isActive(context) && 'histories',
					onClick: () => (isActive(context)
						? ShapeManager.UnselectedShape(context)
						: ShapeManager.SelectedShape(context)),
				} }
		>
			<Shape { ...{ ...context, data: history } }/>
		</div>);
};

export default ShapeSelectorBox;
