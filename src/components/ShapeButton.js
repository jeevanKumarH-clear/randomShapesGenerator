import { keys } from '@laufire/utils/lib';
import React from 'react';
import ShapeComponents from './ShapeComponents';

const ShapeButton = (context) => {
	const { setState, state } = context;
	const { currentState } = state;

	return keys(ShapeComponents).map((shape, key) =>
		<button
			key={ key }
			onClick={ () => setState({
				...state,	currentState: { ...currentState, shape },
			}) }
		>
			{ shape }
		</button>);
};

export default ShapeButton;
