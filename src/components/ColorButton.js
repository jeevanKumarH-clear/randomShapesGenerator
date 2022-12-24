import React from 'react';

const ColorButton = (context) => {
	const { config: { colors }, setState, state } = context;

	return colors.map((color, key) =>
		<button
			key={ key }
			onClick={ () => setState({ ...state, color }) }
		>{color}
		</button>);
};

export default ColorButton;
