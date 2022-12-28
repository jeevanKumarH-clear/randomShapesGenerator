import React from 'react';
import Shape from './Shape';

const SelectedShape = (context) => {
	const { state: { selectedShape }} = context;

	return <div className="selectedShape">{
		selectedShape
		&& <Shape { ...{ ...context, data: selectedShape } }/>
	}
	</div>;
};

export default SelectedShape;
