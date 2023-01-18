import { React } from 'react';

const Rectangle = (context) => {
	const { config: { sizeValues, widthMultiplier },
		data: { color, size }} = context;

	return (
		<div style={ {
			height: `${ sizeValues[size] }px`,
			width: `${ sizeValues[size] * widthMultiplier }px`,
			backgroundColor: color,
		} }
		/>);
};

export default Rectangle;
