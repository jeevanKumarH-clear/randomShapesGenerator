import { rndString } from '@laufire/utils/random';

const getShapeId = ({ state: { currentState }, config: { idLength }}) =>
	({
		...currentState,
		id: rndString(idLength),
	});

export default getShapeId;
