import { React } from 'react';

const Circle = (context) => {
	const { config: { sizes },
		state: { color, size }} = context;

	return (
		<div
			className="circle"
			style={ {
				height: `${ sizes[size] }px`,
				width: `${ sizes[size] }px`,
				backgroundColor: color,
			} }
		/>);
};

export default Circle;
