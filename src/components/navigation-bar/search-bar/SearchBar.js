/** @format */

import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
	state = {
		searchTerm: '',
	};

	onInputChange = (e) => {
		this.setState({ searchTerm: e.target.value });
	};

	onSubmitHandler = (e) => {
		e.preventDefault();

		this.props.onSearch(this.state.searchTerm);
	};
	render() {
		return (
			<div className='search-bar'>
				<div className='ui'>
					<form onSubmit={this.onSubmitHandler} className='ui form' action=''>
						<div className='field'>
							<input
								value={this.state.searchTerm}
								onChange={this.onInputChange}
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
	}
}
