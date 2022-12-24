import { React, useState } from 'react';
import './App.scss';
import Buttons from './components/Buttons';
import Display from './components/Display';

const App = (context) => {
	const [state, setState] = useState({
		color: 'black',
		shape: 'square',
		size: 'small',
	});

	const extendedContext = { ...context, state, setState };

	return (
		<div className="App">
			<Buttons { ...extendedContext }/>
			<Display { ...extendedContext }/>
		</div>
	);
};

export default App;
