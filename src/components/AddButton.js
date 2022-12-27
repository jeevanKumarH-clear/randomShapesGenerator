import React from 'react';
import getShape from '../services/getShape';

const AddButton = (context) => {
	const { state, setState } = context;
	const { histories } = state;

	return (
		<button
			onClick={ () => setState({ ...state,
				histories: [...histories, getShape(context)] }) }
		>
			Add
		</button>);
};

export default AddButton;
