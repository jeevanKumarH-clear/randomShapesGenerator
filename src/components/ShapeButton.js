import { keys } from '@laufire/utils/lib';
import React from 'react';

const ShapeButton = (context) => {
	const { config: { radius }, setState, state } = context;
	const { currentState } = state;

	return keys(radius).map((shape, key) =>
		<button
			key={ key }
			onClick={ () => setState({
				currentState: { ...currentState, shape },
			}) }
		>
			{ shape }
		</button>);
};

export default ShapeButton;
