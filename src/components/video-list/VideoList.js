/** @format */

import React from 'react';
import VideoItem from './video-item/VideoItem';
import './VideoList.css';

const VideoList = ({ videos, videoItemClickListener }) => {
	return (
		<div className='video-list ui relaxed divided list'>
			{videos.map((video) => {
				return (
					<VideoItem
						key={video.id.videoId}
						video={video}
						clickHandler={videoItemClickListener}
					/>
				);
			})}
		</div>
	);
};

export default VideoList;
