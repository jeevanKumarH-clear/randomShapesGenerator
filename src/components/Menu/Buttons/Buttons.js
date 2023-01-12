import { React } from 'react';
import Add from './Add';
import Delete from './Delete';
import New from './New';
import Random from './Random';
import Update from './Update';

const Buttons = (context) =>
	<div className="buttons">
		<Add { ...context }/>
		<Delete { ...context }/>
		<New { ...context }/>
		<Update { ...context }/>
		<Random { ...context }/>
	</div>;

export default Buttons;
