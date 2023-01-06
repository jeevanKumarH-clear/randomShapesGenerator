import { React, useState } from 'react';
import './App.scss';
import Box from './components/Box/';
import Menu from './components/Menu';
import Display from './components/Display/';
import Container from './components/Container';
import getCurrentShape from './services/getCurrentShape';

const initialState = (context) => ({
	currentShape: getCurrentShape(context),
	histories: [],
	filteredShape: getCurrentShape(context),
});

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...context, state, setState };

	return (
		<div>
			<Menu { ...extendedContext }/>
			<Display { ...extendedContext }/>
			<Container { ... extendedContext }/>
			<Box { ...extendedContext }/>
		</div>
	);
};

export default App;
