import React from 'react';

const Options = (context) => {
	const { data } = context;

	return data.map((datum, key) =>
		<option key={ key } value={ datum }> { datum} </option>);
};

export default Options;
