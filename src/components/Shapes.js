import React from 'react';
import Shape from './Shape';

const Shapes = (context) => {
	const { state: { histories }} = context;

	return histories.map((history, key) =>
		<Shape
			key={ key }
			{ ...{ ...context, data: history } }
		/>);
};

export default Shapes;
