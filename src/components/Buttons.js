import { React } from 'react';
import ColorButton from './ColorButton';
import ShapeButton from './ShapeButton';
import SizeButton from './SizeButton';

const Buttons = (context) =>
	<div>
		<ColorButton { ...context }/>
		<div>
			<ShapeButton { ...context }/>
		</div>
		<SizeButton { ...context }/>
	</div>;

export default Buttons;
