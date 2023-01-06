import React from 'react';
import isItemSelected from '../../services/isItemSelected';
import ShapeSelectorBox from './ShapeSelectorBox';

const Container = (context) => {
	const { state: { histories }} = context;

	return (
		<div className={ !isItemSelected(context) && 'container' }>
			{ histories.map((history, key) =>
				<ShapeSelectorBox
					key={ key }
					{ ...{ ...context, data: history } }
				/>)}
		</div>);
};

export default Container;
