import React from 'react';

const SizeButton = (context) => {
	const { state, setState, data: size } = context;
	const { currentState } = state;

	return (
		<button
			onClick={ () => setState({
				...state,
				currentState: { ...currentState, size },
			}) }
		>
			{size}
		</button>
	);
};

export default SizeButton;
