import { peek } from '@laufire/utils/debug';
import React from 'react';
import getShape from '../services/getShape';

const AddButton = (context) => {
	const { state, setState } = context;
	const { histories } = state;

	return (
		<button
			onClick={ () => setState({ ...state,
				histories: [...histories, peek(getShape(context))] }) }
		>
			Add
		</button>);
};

export default AddButton;
