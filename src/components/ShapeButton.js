import React from 'react';

const ShapeButton = (context) => {
	const { config: { shapes }, setState, state } = context;

	return shapes.map((shape, key) =>
		<button
			key={ key }
			onClick={ () => setState({ ...state, shape }) }
		>
			{ shape }
		</button>);
};

export default ShapeButton;
