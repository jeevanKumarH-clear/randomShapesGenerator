import React from 'react';
import ShapeManager from '../../../services/ShapeManager';

const Update = (context) => {
	const { state, setState } = context;

	return (
		<button
			disabled={ ShapeManager.isItemSelected(context) }
			onClick={ () => setState({
				...state,
				histories: ShapeManager.updateShape(context),
			}) }
		> Update
		</button>);
};

export default Update;
