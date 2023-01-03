import { rndString } from '@laufire/utils/random';

const getShapeId = ({ state: { currentShape }, config: { idLength }}) =>
	({
		...currentShape,
		id: rndString(idLength),
	});

export default getShapeId;
