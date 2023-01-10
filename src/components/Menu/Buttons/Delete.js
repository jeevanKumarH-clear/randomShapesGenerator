import React from 'react';
import getRandomShape from '../../../services/getCurrentShape';
import isItemSelected from '../../../services/isItemSelected';
import remove from '../../../services/removeShape';

const Delete = (context) => {
	const { state, setState } = context;

	return (
		<button
			disabled={ isItemSelected(context) }
			onClick={ () => setState({
				...state,
				currentShape: getRandomShape(context),
				histories: remove(context),
			}) }
		>
			Delete
		</button>);
};

export default Delete;
