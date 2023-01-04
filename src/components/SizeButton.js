import React from 'react';
import SizeButtons from './SizeButtons';

const isCurrentSize = (context) => {
	const { state: { currentShape }, data: size } = context;

	return currentShape.size === size ;
};

const SizeButton = (context) => {
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
			<SizeButtons { ...context }/>
		</select>
	);
};

export default SizeButton;
