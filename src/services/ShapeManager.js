import { keys } from '@laufire/utils/collection';
import { rndString, rndValue } from '@laufire/utils/random';
/* eslint-disable no-magic-numbers */

const autoShapeGenerator = (context) => {
	const { setState } = context;
	const timeInterval = 1000;

	return setInterval(() => setState((prevState) => (
		{
			...prevState,
			histories: prevState.histories.length < 5
				? [...prevState.histories, getRandomShape(context)]
				: prevState.histories,
		})), timeInterval);
};

const getFilteredShapes = ({ state: { histories, filter }}) =>
	histories.filter((history) => Object.keys(filter).every((shapeProp) =>
		filter[shapeProp] === 'any'
		|| history[shapeProp] === filter[shapeProp]));

const getRandomShape = ({ config: { colors, shapes, sizes, idLength }}) => ({
	color: rndValue(colors),
	shape: rndValue(shapes),
	size: rndValue(keys(sizes)),
	id: rndString(idLength),
});

const getShape = ({ config: { colors, shapes, sizes }}) => ({
	color: rndValue(colors),
	shape: rndValue(shapes),
	size: rndValue(keys(sizes)),
});

const getShapeId = ({ state: { currentShape }, config: { idLength }}) =>
	({
		...currentShape,
		id: rndString(idLength),
	});

const isItemSelected = ({ state: { currentShape: { id }}}) => !id;

const remove = ({ state: { histories, currentShape }}) =>
	histories.filter((history) => history.id !== currentShape.id);

const SelectedShape = ({ state, setState, data }) => setState({
	...state,
	currentShape: data,
});

const UnselectedShape = ({ state, setState, data }) => setState({
	...state,
	currentShape: {
		...data,
		id: null,
	},
});

const updateShape = ({ state: { histories, currentShape }}) =>
	histories.map((history) =>
		(history.id === currentShape.id ? currentShape : history));

const ShapeManager = {
	autoShapeGenerator,
	getFilteredShapes,
	getRandomShape,
	getShape,
	getShapeId,
	isItemSelected,
	UnselectedShape,
	updateShape,
	remove,
	SelectedShape,
};

export default ShapeManager;
