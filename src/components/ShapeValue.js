import React from 'react';
import Shape from './Shape';

const isActive = (context) => {
	const { state:
		{ currentState: { id: currentShape }}, data: { id }} = context;

	return id === currentShape;
};
const ShapeValue = (context) => {
	const { state, setState, data: history } = context;

	return (
		<div
			{
				...{ className: isActive(context)
				&& 'shapeHighlight',
				onClick: () => setState({
					...state,
					selectedId: history.id,
					currentState: history,
				}) } }
		>
			<Shape { ...{ ...context, data: history } }/>
		</div>);
};

export default ShapeValue;
