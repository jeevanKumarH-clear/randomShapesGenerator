import { keys } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';

const getRandomShape = ({ config: { colors, shapes, sizes }}) => ({
	color: rndValue(colors),
	shape: rndValue(shapes),
	size: rndValue(keys(sizes)),
});

export default getRandomShape;
