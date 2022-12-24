import { React } from 'react';

const Square = (context) => {
	const { config: { sizes },
		data: { color, size }} = context;

	return (
		<div style={ {
			height: `${ sizes[size] }px`,
			width: `${ sizes[size] }px`,
			backgroundColor: color,
		} }
		/>);
};

export default Square;
