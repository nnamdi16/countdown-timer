import React from 'react';
import { describeArc } from './util.js';
import './svg.css';

const SVGCircle = ({ radius }) => (
	<svg className="countdown-svg">
		<path fill="none" stroke="#333" stroke-width="4" d={describeArc(50, 50, 48, 0, radius)} />
	</svg>
);

export default SVGCircle;
