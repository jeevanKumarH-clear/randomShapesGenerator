import { React, useState } from 'react';
import './App.scss';
import Box from './components/Box';
import Buttons from './components/Buttons';
import Display from './components/Display';
import SelectedShape from './components/SelectedShape';
import Shapes from './components/Shapes';
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
			<Shapes { ...extendedContext }/>
			<SelectedShape { ...extendedContext }/>
			<Box { ...extendedContext }/>
		</div>
	);
};

export default App;
