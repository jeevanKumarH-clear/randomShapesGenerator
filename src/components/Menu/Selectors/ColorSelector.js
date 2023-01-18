import React from 'react';
import Options from './Options/Options';

const ColorSelector = (context) => {
	const { setState, state, config: { colors }} = context;
	const { currentShape } = state;

	return (
		<select {
			...{
				onChange: (event) => setState({
					...state, currentShape: {
						...currentShape,
						color: event.target.value,
					},
				}),
			} }
		><Options { ...{ ...context, data: colors } }/>
		</select>);
};

export default ColorSelector;
