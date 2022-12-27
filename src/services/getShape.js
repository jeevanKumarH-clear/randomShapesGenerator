import { rndString } from '@laufire/utils/random';

const getShape = ({ state: { currentState }, config: { idLength }}) =>
	({
		...currentState,
		id: rndString(idLength),
	});

export default getShape;
