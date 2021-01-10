/** @format */

import React, { Component } from 'react';
import AccountCard from './account-card/AccountCard';
import SearchBar from './search-bar/SearchBar';
import './NavigationBar.css';

export default class NavigationBar extends Component {
	render() {
		return (
			<div className='navigation-bar navbar-grid ui'>
				<AccountCard className='account-card' data={{ id: 'J.R.' }} />
				<SearchBar className='search-bar' onSearch={this.props.onSearch} />
			</div>
		);
	}
}
