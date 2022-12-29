import { React, useState } from 'react';
import './App.scss';
import Buttons from './components/Buttons';
import Display from './components/Display';
import SelectedShape from './components/SelectedShape';
import ShapeComponents from './components/ShapeComponents';
import Shapes from './components/Shapes';
import getCurrentState from './services/getCurrentState';

const initialState = (context) => ({
	currentState: getCurrentState(context),
	histories: [],
});

const App = (context) => {
	const [state, setState] = useState(initialState(context));
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
			<SelectedShape { ...extendedContext }/>
		</div>
	);
};

export default App;
