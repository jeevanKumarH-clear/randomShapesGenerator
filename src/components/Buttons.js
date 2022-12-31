import { React } from 'react';
import AddButton from './AddButton';
import ColorButton from './ColorButton';
import DeleteButton from './DeleteButton';
import NewButton from './NewButton';
import ShapeButton from './ShapeButton';
import SizeButton from './SizeButton';

const Buttons = (context) =>
	<div>
		<div><ColorButton { ...context }/></div>
		<div><ShapeButton { ...context }/></div>
		<div><SizeButton { ...context }/></div>
		<div><AddButton { ...context }/></div>
		<div><DeleteButton { ...context }/></div>
		<div><NewButton { ...context }/></div>
	</div>;

export default Buttons;
