import React from 'react';

const isCurrentSize = (context) => {
	const { state: { currentState }, data: size } = context;

	return currentState.size === size ;
};

const SizeButton = (context) => {
	const { state, setState, data: size } = context;
	const { currentState } = state;

	return (
		<button {
			...{ className: isCurrentSize(context) ? 'highlight' : 'normal',
				onClick: () => setState({
					...state,
					currentState: { ...currentState, size },
				}) } }
		>
			{size}
		</button>
	);
};

export default SizeButton;
