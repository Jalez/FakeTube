/** @format */

import React, { Component } from 'react';
import VideoDetail from './video-detail/VideoDetail';
import VideoList from './video-list/VideoList';
import './App.css';
import youtube from '../apis/youtube';
import NavigationBar from './navigation-bar/NavigationBar';

export default class App extends Component {
	state = {
		videos: [],
		selectedVideo: null,
	};

	//Life cycle method, replacing this with use effect in a functional component.
	componentDidMount() {
		this.onSearch('Books');
	}

	//this will be replaced with a method that uses the useState-method of a functional component.
	onSearch = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
			},
		});

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};

	//This will be replaced by a simple setState
	videoItemClickListener = (item) => {
		this.setState({ selectedVideo: item });
	};

	render() {
		return (
			<div className='video-app ui'>
				<NavigationBar onSearch={this.onSearch} />
				<div className='grid-container'>
					<VideoDetail
						className='video-details'
						video={this.state.selectedVideo}
					/>
					<VideoList
						className='video-list'
						videos={this.state.videos}
						videoItemClickListener={this.videoItemClickListener}
					/>
				</div>
			</div>
		);
	}
}
