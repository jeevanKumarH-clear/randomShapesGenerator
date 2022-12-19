import { React, useState } from 'react';
import './App.scss';
import Buttons from './components/Buttons';

const App = (context) => {
	const [state, setState] = useState({ color: 'black' });

	return (
		<div className="App">
			<Buttons { ...{ ...context, state, setState } }/>
		</div>
	);
};

export default App;
