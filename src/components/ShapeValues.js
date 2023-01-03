import React from 'react';
import ShapeValue from './ShapeValue';

const ShapeValues = (context) => {
	const { state: { histories }} = context;

	return (
		<div className="container">
			{ histories.map((history, key) =>
				<ShapeValue
					key={ key }
					{ ...{ ...context, data: history } }
				/>)}
		</div>);
};

export default ShapeValues;
