import React from 'react';

const Button = (context) => {
	const { setState, color } = context;

	return (
		<div>
			<button
				onClick={ () => setState({ color }) }
			>
				{color}Button
			</button>
		</div>
	);
};

export default Button;
