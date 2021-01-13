/** @format */

import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const onSubmitHandler = (e) => {
		e.preventDefault();

		onSearch(searchTerm);
	};

	return (
		<div className='search-bar'>
			<div className='ui'>
				<form onSubmit={onSubmitHandler} className='ui form' action=''>
					<div className='field'>
						<input
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							id='search'
							type='text'
							placeholder='Search'
							className='prompt'
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SearchBar;
