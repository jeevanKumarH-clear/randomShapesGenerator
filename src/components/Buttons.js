import { React } from 'react';
import Button from './Button';

const Buttons = (context) => {
	const { config, state } = context;

	return (
		<div>
			<div>{state.color}</div>
			{config.colors.map((color, key) =>
				<Button
					key={ key }
					{ ...{ ...context, color } }
				/>)}
		</div>
	);
};

export default Buttons;
