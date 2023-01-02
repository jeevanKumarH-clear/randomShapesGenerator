import React from 'react';
import shapeComponents from '../data/shapeComponents';

const Shape = (context) => {
	const { data: { shape }} = context;
	const Component = shapeComponents[shape];

	return <Component { ...context }/>;
};

export default Shape;
