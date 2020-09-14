import React from 'react';

export const Country = ({ country }) => {
	return <p>{country.name + ' ' + country.capital}</p>;
};
export default Country;
