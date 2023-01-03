import React from 'react';
import isItemSelected from '../services/isItemSelected';
import updateShape from '../services/updateShape';

const UpdateButton = (context) => {
	const { state, setState } = context;

	return (
		<button
			disabled={ isItemSelected(context) }
			onClick={ () => setState({
				...state,
				histories: updateShape(context),
			}) }
		>
			Update
		</button>);
};

export default UpdateButton;
