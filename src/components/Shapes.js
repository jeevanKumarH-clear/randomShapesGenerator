import React from 'react';
import Shape from './Shape';

const Shapes = (context) => {
	const { state, setState } = context;
	const { state: { histories }} = context;

	return histories.map((history, key) =>
		<div
			key={ key }
			onClick={ () => setState({
				...state,
				selectedId: history.id,
				selectedShape: history,
			}) }
		>
			<Shape
				key={ key }
				{ ...{ ...context, data: history } }
			/>
		</div>);
};

export default Shapes;
