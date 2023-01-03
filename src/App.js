import { React, useState } from 'react';
import './App.scss';
import Box from './components/Box';
import Buttons from './components/Buttons';
import Display from './components/Display';
import ShapeValues from './components/ShapeValues';
import getCurrentState from './services/getCurrentState';

const initialState = (context) => ({
	currentState: getCurrentState(context),
	histories: [],
});

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...context, state, setState };

	return (
		<div className="App">
			<Buttons { ...extendedContext }/>
			<Display { ...extendedContext }/>
			<ShapeValues { ... extendedContext }/>
			<Box { ...extendedContext }/>
		</div>
	);
};

export default App;
