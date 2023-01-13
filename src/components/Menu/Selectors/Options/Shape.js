import React from 'react';

const Shape = (context) => {
	const { config: { shapes }} = context;

	return shapes.map((shape, key) =>
		<option key={ key } value={ shape }> { shape} </option>);
};

export default Shape;
