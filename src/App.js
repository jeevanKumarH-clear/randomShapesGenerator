/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */
import { React, useState } from 'react';
import './App.scss';
import Box from './components/Box/index';
import Menu from './components/Menu/index';
import Display from './components/Display/index';
import Container from './components/Container/index';
import getRandomShape from './services/getCurrentShape';
import Filters from './components/Filters/';

const timeInterval = 1000;

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
	const { once } = context;

	once(() => setInterval(() => setState((prevState) => (
		{
			...prevState,
			histories: prevState.histories.length < 5
				? [...prevState.histories, getRandomShape(context)]
				: prevState.histories,
		})), timeInterval));

	return (
		<div>
			<Menu { ...extendedContext }/>
			<Filters { ...extendedContext }/>
			<Display { ...extendedContext }/>
			<Container { ...extendedContext }/>
			<Box { ...extendedContext }/>
		</div>
	);
};

export default App;
