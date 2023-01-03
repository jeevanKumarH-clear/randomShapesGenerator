import React from 'react';
import getCurrentShape from '../services/getCurrentShape';

const NewButton = (context) => {
	const { state, setState } = context;

	return (
		<button
			onClick={ () => setState({
				...state,
				currentShape: getCurrentShape(context),
			}) }
		>
			New
		</button>);
};

export default NewButton;
