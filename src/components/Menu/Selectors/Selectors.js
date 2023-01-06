import { React } from 'react';
import ColorSelector from './ColorSelector';
import ShapeSelector from './ShapeSelector';
import SizeSelector from './SizeSelector';

const Selectors = (context) =>
	<div>
		<div><ColorSelector { ...context }/></div>
		<div><ShapeSelector { ...context }/></div>
		<div><SizeSelector { ...context }/></div>
	</div>;

export default Selectors;
