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

	componentDidMount() {
		this.onSearch('Books');
	}

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
