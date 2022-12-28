import React from 'react';

const Display = (context) => {
	const { state:
		{ currentState: { color, shape, size }, selectedId }} = context;

	return (
		<div>
			<span> {size} </span>
			<span> {color} </span>
			<span> {shape} </span>
			<div> {selectedId}</div>
		</div>
	);
};

export default Display;
