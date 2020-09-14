import React, { useState } from 'react';

const Select = ({ region, handSelect }) => {
	let regionArr = [];

	const optFill = () => {
		region.forEach((e) => {
			regionArr.push(e);
		});
	};

	return (
		<select onChange={handSelect}>
			{optFill()}
			<option>Regioni...</option>
			{regionArr().map((option) => <option key={option}>{option}</option>)}
		</select>
	);
};

export default Select;
