import React from 'react';

const SizeButton = (context) => {
	const { config: { sizeRange }, setState, state } = context;

	return sizeRange.map((size, key) =>
		<button
			key={ key }
			onClick={ () => setState({ ...state, size }) }
		>{size}
		</button>);
};

export default SizeButton;
