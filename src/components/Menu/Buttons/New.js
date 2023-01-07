import React from 'react';
import getRandomShape from '../../../services/getCurrentShape';

const New = (context) => {
	const { state, setState } = context;

	return (
		<button
			onClick={ () => setState({
				...state,
				currentShape: getRandomShape(context),
			}) }
		>
			New
		</button>);
};

export default New;
