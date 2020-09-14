import React from 'react';

import { Country } from './Country';

const Countries = ({ countries }) => {
	let output = countries.filter((country) => country.region.toLowerCase().includes(e.target.value.toLowerCase()));
	return output;
};

export default Countries;
