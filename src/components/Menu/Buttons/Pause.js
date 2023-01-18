import React from 'react';

const Pause = (context) => {
	const { state, setState } = context;

	return <div>
		<button onClick={ () => setState({
			...state,
			ispaused: !state.ispaused,
		}) }
		>{!state.ispaused ? 'pause' : 'resume'}</button>
	</div>;
};

export default Pause;
