import { React } from 'react';
import Buttons from './Buttons/Buttons';
import Selectors from './Selectors/Selectors';

const Menu = (context) =>
	<div>
		<Selectors { ...context }/>
		<Buttons { ...context }/>
	</div>;

export default Menu;
