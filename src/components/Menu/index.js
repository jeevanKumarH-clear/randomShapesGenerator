import { React } from 'react';
import Buttons from './Buttons/Buttons';
import Selectors from './Selectors/Selectors';

const Menu = (context) =>
	<div className="buttons">
		<Buttons { ...context }/>
		<Selectors { ...context }/>
	</div>;

export default Menu;
