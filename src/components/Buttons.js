import { React } from 'react';
import AddButton from './AddButton';
import ColorButtons from './ColorButtons';
import DeleteButton from './DeleteButton';
import NewButton from './NewButton';
import ShapeButtons from './ShapeButtons';
import SizeButtons from './SizeButtons';
import UpdateButton from './UpdateButton';

const Buttons = (context) =>
	<div>
		<div><ColorButtons { ...context }/></div>
		<div><ShapeButtons { ...context }/></div>
		<div><SizeButtons { ...context }/></div>
		<div><AddButton { ...context }/></div>
		<div><DeleteButton { ...context }/></div>
		<div><NewButton { ...context }/></div>
		<div><UpdateButton { ...context }/></div>
	</div>;

export default Buttons;
