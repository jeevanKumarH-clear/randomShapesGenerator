import React from 'react';
import getCurrentShape from '../../../services/getCurrentShape';

const New = (context) => {
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

export default New;
