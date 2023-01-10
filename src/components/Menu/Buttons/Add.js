import React from 'react';
import getShapeId from '../../../services/getShapeId';

const Add = (context) => {
	const { state, setState } = context;
	const { histories } = state;

	return (
		<button
			onClick={ () => setState({
				...state,
				histories: [...histories, getShapeId(context)],
			}) }
		>
			Add
		</button>);
};

export default Add;
