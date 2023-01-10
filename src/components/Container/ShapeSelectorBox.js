import React from 'react';
import SelectedShape from '../../services/SelectedShape';
import UnselectedShape from '../../services/UnSelectedShape';
import Shape from '../Shape';

const isActive = (context) => {
	const { state:
		{ currentShape: { id: currentShape }}, data: { id }} = context;

	return id === currentShape;
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
						? UnselectedShape(context)
						: SelectedShape(context)),
				} }

		>
			<Shape { ...{ ...context, data: history } }/>
		</div>);
};

export default ShapeSelectorBox;
