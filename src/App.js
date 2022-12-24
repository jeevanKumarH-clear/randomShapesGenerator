import { React, useState } from 'react';
import './App.scss';
import Buttons from './components/Buttons';
import Display from './components/Display';
import Shape from './components/Shape';

const App = (context) => {
	const [state, setState] = useState({
		currentState: {
			color: 'black',
			shape: 'square',
			size: 'small',
		},
	});

	const extendedContext = { ...context, state, setState };
	const Shapes = Shape[state.currentState.shape];

	return (
		<div className="App">
			<Buttons { ...extendedContext }/>
			<Display { ...extendedContext }/>
			<Shapes { ...extendedContext }/>
		</div>
	);
};

export default App;
