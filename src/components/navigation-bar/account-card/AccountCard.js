/** @format */

import React from 'react';
import './AccountCard.css';

const AccountCard = ({ data }) => {
	return <div className='account-card'>{data.id}</div>;
};

export default AccountCard;
