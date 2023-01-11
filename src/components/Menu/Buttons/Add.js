import React from 'react';
import ShapeManager from '../../../services/ShapeManager';

const Add = (context) => {
	const { state, setState } = context;
	const { histories } = state;

	return (
		<button
			onClick={ () => setState({
				...state,
				histories: [...histories, ShapeManager.getShapeId(context)],
			}) }
		> Add
		</button>);
};

export default Add;
