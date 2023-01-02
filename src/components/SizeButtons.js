import { keys } from '@laufire/utils/lib';
import React from 'react';
import SizeButton from './SizeButton';

const SizeButtons = (context) => {
	const { config: { sizes }} = context;

	return keys(sizes).map((size, key) =>
		<SizeButton
			key={ key }
			{ ...{ ...context, data: size } }
		/>);
};

export default SizeButtons;
