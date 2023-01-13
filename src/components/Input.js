import React from 'react';

const Input = (context) => {
	const { state, setState } = context;

	return <div className="input">
		<label>limit:</label>
		<input
			type="text"
			onChange={ (event) => setState({
				...state,
				shapeLength: event.target.value,
			}) }
		/>
	</div>;
};

export default Input;
