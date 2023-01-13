import React from 'react';
import Size from './Options/Size';

const SizeSelector = (context) => {
	const { state, setState } = context;
	const { currentShape } = state;

	return (
		<select {
			...{
				onChange: (event) => setState({
					...state, currentShape: {
						...currentShape,
						size: event.target.value,
					},
				}),
			} }
		><Size { ...context }/>
		</select>
	);
};

export default SizeSelector;
