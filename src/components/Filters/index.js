import React from 'react';
import ColorSelector from './ColorSelector';

const Filters = (context) =>
	<div>
		<ColorSelector { ...context }/>
	</div>;

export default Filters;
