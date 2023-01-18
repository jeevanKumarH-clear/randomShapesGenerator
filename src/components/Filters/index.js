import React from 'react';
import ShapeManager from '../../services/ShapeManager';
import ColorSelector from './ColorSelector';
import ShapeSelector from './ShapeSelector';
import SizeSelector from './SizeSelector';

const Filters = (context) => {
	const { state: { histories }} = context;

	return <div>
		<label>Color:<ColorSelector { ...context }/></label>
		<label>Shape:<ShapeSelector { ...context }/></label>
		<label>Size:<SizeSelector { ...context }/></label>
		<label>shapeCount:{histories.length	}</label>
		<div>{ShapeManager.displayText(context)}</div>
	</div>;
};

export default Filters;
