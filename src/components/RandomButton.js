import { rndValue } from '@laufire/utils/random';
import React from 'react';

const RandomButton = (context) => {
	const { state, setState } = context;
	const { histories } = state;

	return (
		<button onClick={ () => setState({
			...state,
			currentShape: rndValue(histories),
		}) }
		>
			Random
		</button>);
};

export default RandomButton;
