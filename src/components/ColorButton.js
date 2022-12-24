import React from 'react';

const ColorButton = (context) => {
	const { config: { colors }, setState, state } = context;
	const { currentState } = state;

	return colors.map((color, key) =>
		<button
			key={ key }
			onClick={ () => setState({
				...state, currentState: { ...currentState, color },
			}) }
		>{color}
		</button>);
};

export default ColorButton;
