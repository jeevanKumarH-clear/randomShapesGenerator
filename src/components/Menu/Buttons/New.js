import React from 'react';
import ShapeManager from '../../../services/ShapeManager';

const New = (context) => {
	const { state, setState } = context;

	return (
		<button
			onClick={ () => setState({
				...state,
				currentShape: ShapeManager.getShape(context),
			}) }
		> New
		</button>);
};

export default New;
