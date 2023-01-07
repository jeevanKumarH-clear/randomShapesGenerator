import { React, useState } from 'react';
import './App.scss';
import Box from './components/Box/index';
import Menu from './components/Menu/index';
import Display from './components/Display/index';
import Container from './components/Container/index';
import getRandomShape from './services/getCurrentShape';
import Filters from './components/Filters/';

const initialState = (context) => ({
	currentShape: getRandomShape(context),
	histories: [],
	filter: {
		color: 'any',
		shape: 'any',
		size: 'any',
	},
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
			<Filters { ...extendedContext }/>
		</div>
	);
};

export default App;
