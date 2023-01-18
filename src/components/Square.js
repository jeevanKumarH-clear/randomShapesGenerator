import { React } from 'react';

const Square = (context) => {
	const { config: { sizeValues },
		data: { color, size }} = context;

	return (
		<div style={ {
			height: `${ sizeValues[size] }px`,
			width: `${ sizeValues[size] }px`,
			backgroundColor: color,
		} }
		/>);
};

export default Square;
