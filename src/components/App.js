/** @format */

import React, { useState, useEffect } from 'react';

import VideoDetail from './video-detail/VideoDetail';
import VideoList from './video-list/VideoList';
import './App.css';
import NavigationBar from './navigation-bar/NavigationBar';
import useVideos from '../hooks/useVideos';

function App() {
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [videos, searchVideos] = useVideos('Books');

	useEffect(() => {
		setSelectedVideo(videos[0]);
		return () => {
			// cleanup
		};
	}, [videos]);

	return (
		<div className='video-app ui'>
			<NavigationBar onSearch={searchVideos} />
			<div className='grid-container'>
				<VideoDetail className='video-details' video={selectedVideo} />
				<VideoList
					className='video-list'
					videos={videos}
					videoItemClickListener={setSelectedVideo}
				/>
			</div>
		</div>
	);
}

export default App;
