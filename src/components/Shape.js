import React from 'react';
import ShapeComponents from './ShapeComponents';

const Shape = (context) => {
	const { data: { shape }} = context;
	const Component = ShapeComponents[shape];

	return <Component { ...context }/>;
};

export default Shape;
