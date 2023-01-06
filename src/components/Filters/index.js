import React from 'react';
import ColorSelector from './ColorSelector';
import ShapeSelector from './ShapeSelector';
import SizeSelector from './SizeSelector';

const Filters = (context) =>
	<div>
		<label>Color:<ColorSelector { ...context }/></label>
		<label>Shape:<ShapeSelector { ...context }/></label>
		<label>Size:<SizeSelector { ...context }/></label>
	</div>;

export default Filters;
