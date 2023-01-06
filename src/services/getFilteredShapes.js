
const getFilteredShapes = ({ state: { histories, filter }}) =>
	histories.filter((history) => Object.keys(filter)
		.every((shapeProp) =>
			filter[shapeProp] === 'any'
		|| history[shapeProp] === filter[shapeProp]));

export default getFilteredShapes;
