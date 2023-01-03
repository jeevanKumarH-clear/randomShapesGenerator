import React from 'react';

const isCurrentSize = (context) => {
	const { state: { currentShape }, data: size } = context;

	return currentShape.size === size ;
};

const SizeButton = (context) => {
	const { state, setState, data: size } = context;
	const { currentShape } = state;

	return (
		<button {
			...{ className: isCurrentSize(context) && 'highlight',
				onClick: () => setState({
					...state,
					currentShape: { ...currentShape, size },
				}) } }
		>
			{size}
		</button>
	);
};

export default SizeButton;
