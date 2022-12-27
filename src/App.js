import { React, useState } from 'react';
import './App.scss';
import Buttons from './components/Buttons';
import Display from './components/Display';
import ShapeComponents from './components/ShapeComponents';
import Shapes from './components/Shapes';

const initialState = {
	currentState:
	{
		color: 'black',
		shape: 'square',
		size: 'small',
	},
	histories: [],
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...context, state, setState };
	const Shape = ShapeComponents[state.currentState.shape];

	return (
		<div className="App">
			<Buttons { ...extendedContext }/>
			<Display { ...extendedContext }/>
			<div className="currentState">
				<Shape { ...{ ...extendedContext, data: state.currentState } }/>
			</div>
			<Shapes { ...extendedContext }/>
		</div>
	);
};

export default App;
