import React from 'react';

const Color = (context) => {
	const { config: { colors }} = context;

	return colors.map((color, key) =>
		<option key={ key } value={ color }> { color} </option>);
};

export default Color;
