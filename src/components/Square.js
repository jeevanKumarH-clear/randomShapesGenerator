import { React } from 'react';

const Square = (context) => {
	const { config: { sizes },
		state: { currentState: { color, size }}} = context;

	return (
		<div style={ {
			height: `${ sizes[size] }px`,
			width: `${ sizes[size] }px`,
			backgroundColor: color,
		} }
		/>);
};

export default Square;
