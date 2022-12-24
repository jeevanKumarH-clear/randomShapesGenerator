import { keys } from '@laufire/utils/lib';
import React from 'react';

const SizeButton = (context) => {
	const { config: { sizes }, setState, state } = context;
	const { currentState } = state;

	return keys(sizes).map((size, key) =>
		<button
			key={ key }
			onClick={ () => setState({
				...state,	currentState: { ...currentState, size },
			}) }
		>{size}
		</button>);
};

export default SizeButton;
