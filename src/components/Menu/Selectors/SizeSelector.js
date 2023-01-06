import React from 'react';
import Size from './Options/Size';

const isCurrentSize = (context) => {
	const { state: { currentShape }, data: size } = context;

	return currentShape.size === size ;
};

const SizeSelector = (context) => {
	const { state, setState } = context;
	const { currentShape } = state;

	return (
		<select {
			...{ className: isCurrentSize(context) && 'highlight',
				onChange: (event) => setState({
					...state,
					currentShape: { ...currentShape, size: event.target.value },
				}) } }
		>
			<Size { ...context }/>
		</select>
	);
};

export default SizeSelector;
