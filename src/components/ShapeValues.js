import React from 'react';
import isItemSelected from '../services/isItemSelected';
import ShapeValue from './ShapeValue';

const ShapeValues = (context) => {
	const { state: { histories }} = context;

	return (
		<div className={ !isItemSelected(context) && 'container' }>
			{ histories.map((history, key) =>
				<ShapeValue
					key={ key }
					{ ...{ ...context, data: history } }
				/>)}
		</div>);
};

export default ShapeValues;
