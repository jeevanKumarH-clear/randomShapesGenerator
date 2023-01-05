import { React, useState } from 'react';
import './App.scss';
import Box from './components/Box';
import Buttons from './components/Buttons';
import Display from './components/Display';
import FilterButtons from './components/FilterButtons';
import FilterShape from './components/FilterShape';
import ShapeValues from './components/ShapeValues';
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
			<Buttons { ...extendedContext }/>
			<Display { ...extendedContext }/>
			<ShapeValues { ... extendedContext }/>
			<Box { ...extendedContext }/>
			<FilterButtons { ...extendedContext }/>
			<FilterShape { ...extendedContext }/>
		</div>
	);
};

export default App;
