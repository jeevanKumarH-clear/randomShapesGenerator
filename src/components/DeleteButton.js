import React from 'react';
import isItemSelected from '../services/isItemSelected';
import remove from '../services/removeShape';

const DeleteButton = (context) => {
	const { state, setState } = context;

	return (
		<button
			disabled={ isItemSelected(context) }
			onClick={ () => setState({ ...state,
				histories: remove(context) }) }
		>
			Delete
		</button>);
};

export default DeleteButton;
