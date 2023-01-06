import React from 'react';
import Shape from '../Shape';

const isActive = (context) => {
	const { state:
		{ currentShape: { id: currentShape }}, data: { id }} = context;

	return id === currentShape;
};
const ShapeSelectorBox = (context) => {
	const { state, setState, data: history, config: { sizes }} = context;

	return (
		<div
			style={ {
				width: sizes[history.size],
				marginTop: '5%',
			} }
			{
				...{ className: isActive(context)
				&& 'histories',
				onClick: () => setState({
					...state,
					selectedId: history.id,
					currentShape: history,
				}) } }
		>
			<Shape { ...{ ...context, data: history } }/>
		</div>);
};

export default ShapeSelectorBox;
