import React, { useEffect, useState } from 'react';
import { getAllCountries, getAllRegions } from './services';
import './App.css';
import Header from './Header';
import Select from './Select';
import Country from './Country';

function App() {
	const [ flag, setFlag ] = useState([]);
	const [ region, setRegion ] = useState([]);
	const [ select, setSelect ] = useState('');
	const [ country, setCountry ] = useState('');

	const handSelect = (e) => {
		setSelect(e.target.value);
	};

	useEffect(() => {
		getAllCountries().then((res) => setFlag(res.data.flag));
	}, []);
	useEffect(() => {
		getAllRegions().then((res) => setRegion(res.data.region));
	}, []);
	useEffect(() => {
		getAllCountries().then((res) => setCountry(res.data.flag));
	}, []);

	return (
		<div className="App">
			<Header flag={flag} />
			<Country country={country} />
			<Select handSelect={handSelect} region={region} />
		</div>
	);
}

export default App;
