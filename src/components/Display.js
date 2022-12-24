import React from 'react';

const Display = (context) => {
	const { state: { currentState: { color, shape, size }}} = context;

	return (
		<div>
			<span> {size} </span>
			<span> {color} </span>
			<span> {shape} </span>
		</div>
	);
};

export default Display;
