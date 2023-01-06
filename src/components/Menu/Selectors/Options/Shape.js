import { keys } from '@laufire/utils/lib';
import React from 'react';
import shapeComponents from '../../../../data/shapeComponents';

const Shape = () =>
	keys(shapeComponents).map((shape, key) =>
		<option key={ key } value={ shape }> { shape} </option>);

export default Shape;
