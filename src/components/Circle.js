import { React } from 'react';

const Circle = (context) => {
	const { config: { sizeValues },
		data: { color, size }} = context;

	return (
		<div
			className="circle"
			style={ {
				height: `${ sizeValues[size] }px`,
				width: `${ sizeValues[size] }px`,
				backgroundColor: color,
			} }
		/>);
};

export default Circle;
