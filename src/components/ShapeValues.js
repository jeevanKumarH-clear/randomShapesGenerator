import React from 'react';
import ShapeValue from './ShapeValue';

const ShapeValues = (context) => {
	const { state: { histories }} = context;

	return histories.map((history, key) =>
		<ShapeValue key={ key } { ...{ ...context, data: history } }/>);
};

export default ShapeValues;
