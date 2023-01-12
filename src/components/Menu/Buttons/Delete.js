import React from 'react';
import ShapeManager from '../../../services/ShapeManager';

const Delete = (context) => {
	const { state, setState } = context;

	return (
		<button
			disabled={ ShapeManager.isItemSelected(context) }
			onClick={ () => setState({
				...state,
				currentShape: ShapeManager.getShape(context),
				histories: ShapeManager.remove(context),
			}) }
		> Delete
		</button>);
};

export default Delete;
