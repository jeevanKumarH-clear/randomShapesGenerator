import React from 'react';
import Options from './Options/Options';

const SizeSelector = (context) => {
	const { state, setState, config: { sizes }} = context;
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
		><Options { ...{ ...context, data: sizes } }/>
		</select>
	);
};

export default SizeSelector;
