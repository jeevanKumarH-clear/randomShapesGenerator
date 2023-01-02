import { keys } from '@laufire/utils/lib';
import React from 'react';
import ShapeButton from './ShapeButton';
import shapeComponents from '../data/shapeComponents';

const ShapeButtons = (context) =>
	keys(shapeComponents).map((shape, key) =>
		<ShapeButton
			key={ key }
			{ ...{ ...context, data: shape } }
		/>);

export default ShapeButtons;
