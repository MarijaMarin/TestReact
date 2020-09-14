import React, { useEffect, useState } from 'react';
import { getAllCountries } from './services';

const Header = ({ flag }) => {
	return <img style={{ width: '150px' }} alt="" flag={flag.flag} />;
};

export default Header;
