import { rndString, rndValue } from '@laufire/utils/random';

const autoShapeGenerator = (context) => {
	const { setState, config: { timeInterval }} = context;

	return setInterval(() => setState((newState) => (
		{
			...newState,
			histories: newState.histories.length < newState.shapeLength
			&& !newState.ispaused === true
				? [...newState.histories, getRandomShape(context)]
				: newState.histories,
		})), timeInterval);
};

const getFilteredShapes = ({ state: { histories, filter }}) =>
	histories.filter((history) => Object.keys(filter).every((shapeProp) =>
		filter[shapeProp] === 'any'
		|| history[shapeProp] === filter[shapeProp]));

const getRandomShape = (context) => ({
	...getShape(context),
	id: rndString(context.config.idLength),
});

const getShape = ({ config: { colors, shapes, sizes }}) => ({
	color: rndValue(colors),
	shape: rndValue(shapes),
	size: rndValue(sizes),
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

const toggleShape = (context) => {
	const { isActive } = context;

	return isActive
		? ShapeManager.UnselectedShape(context)
		: ShapeManager.SelectedShape(context);
};

const hasShapes = ({ state: { histories }}) =>
	histories.length === 0 ;

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
	toggleShape,
	hasShapes,
};

export default ShapeManager;
