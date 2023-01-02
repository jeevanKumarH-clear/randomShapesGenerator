import React from 'react';
import updateShape from '../services/updateShape';

const UpdateButton = (context) => {
	const { state, setState } = context;

	return (
		<button onClick={ () => setState({
			...state,
			histories: updateShape(context),
		}) }
		>
			Update
		</button>);
};

export default UpdateButton;
