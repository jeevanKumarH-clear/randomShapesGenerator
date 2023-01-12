import { React, useState } from 'react';
import './App.scss';
import Box from './components/Box/index';
import Menu from './components/Menu/index';
import Display from './components/Display/index';
import Container from './components/Container/index';
import Filters from './components/Filters/';
import ShapeManager from './services/ShapeManager';
import Input from './components/Input';

const initialState = (context) => {
	const { config: maxLength } = context;

	return {
		currentShape: ShapeManager.getShape(context),
		histories: [],
		filter: {
			color: 'any',
			shape: 'any',
			size: 'any',
		},
		shapeLength: maxLength,
	};
};

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...context, state, setState };
	const { once } = context;

	once(() => ShapeManager.autoShapeGenerator(extendedContext));

	return <div>
		<Menu { ...extendedContext }/>
		<Filters { ...extendedContext }/>
		<Display { ...extendedContext }/>
		<Container { ...extendedContext }/>
		<Box { ...extendedContext }/>
		<Input { ...extendedContext }/>
	</div>;
};

export default App;
