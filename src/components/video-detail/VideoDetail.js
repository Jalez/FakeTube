/** @format */

import React from 'react';
import Chat from './chat/Chat';
import './VideoDetail.css';

const VideoDetail = ({ video }) => {
	function getSrc() {
		return 'https://www.youtube.com/embed/' + video.id.videoId;
	}
	if (!video) {
		return <></>;
	}

	return (
		<div className='video-detail'>
			<div className='ui embed'>
				<iframe
					title={video.snippet.title}
					width='560'
					height='315'
					src={getSrc()}
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen></iframe>
			</div>
			<div className='ui segment'>
				<h4 className='ui header'>{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
			<Chat />
		</div>
	);
};

export default VideoDetail;
