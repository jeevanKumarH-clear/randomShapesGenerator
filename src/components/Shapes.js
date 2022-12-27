/* eslint-disable no-console */
import React from 'react';
import Shape from './Shape';

const remove = (context) => {
	const { state: { histories }, data } = context;
	const temp = histories.filter((shape) => shape.id !== data.id);

	return temp;
};

const Shapes = (context) => {
	const { state, setState } = context;
	const { state: { histories }} = context;

	return histories.map((history, key) =>
		<div
			key={ key }
			onClick={ () => setState({
				...state,
				histories: remove({ ...context, data: history }),
			}) }
		>
			<Shape
				key={ key }
				{ ...{ ...context, data: history } }
			/>
		</div>);
};

export default Shapes;
