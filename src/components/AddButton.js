import React from 'react';
import getShapeId from '../services/getShape';

const AddButton = (context) => {
	const { state, setState } = context;
	const { histories } = state;

	return (
		<button
			onClick={ () => setState({ ...state,
				histories: [...histories, getShapeId(context)] }) }
		>
			Add
		</button>);
};

export default AddButton;
