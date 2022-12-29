import React from 'react';
import remove from '../services/removeShape';

const DeleteButton = (context) => {
	const { state, setState } = context;

	return (
		<button
			onClick={ () => setState({ ...state,
				histories: remove(context) }) }
		>
			Delete
		</button>);
};

export default DeleteButton;
