import React from 'react';
import ShapeManager from '../../../services/ShapeManager';

const Pause = (context) => {
	const { state, setState, state: { pauseButton }} = context;

	return <div>
		<button onClick={ () => setState({
			...state,
			pauseButton: ShapeManager.toggleButton(context),
		}) }
		>{pauseButton}</button>
	</div>;
};

export default Pause;
