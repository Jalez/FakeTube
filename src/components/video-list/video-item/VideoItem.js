/** @format */

import React, { Component } from 'react';
import './VideoItem.css';

export default class VideoItem extends Component {
	constructor(props) {
		super(props);

		this.thumbnails = this.props.video.snippet.thumbnails;
		this.description = this.props.video.snippet.description;
		this.channelTitle = this.props.video.snippet.channelTitle;
		this.title = this.props.video.snippet.title;
		this.publishTime = this.props.video.snippet.publishTime.split('T')[0];

		this.state = {
			dimThumbnail: false,
		};
	}

	toggleDimmerOn = () => {
		this.setState({ dimThumbnail: true });
	};

	toggleDimmerOff = () => {
		this.setState({ dimThumbnail: false });
	};

	thumbnailClickHandler = () => {
		this.props.clickHandler(this.props.video);
	};

	render() {
		return (
			<div
				onClick={this.thumbnailClickHandler}
				onMouseEnter={this.toggleDimmerOn}
				onMouseLeave={this.toggleDimmerOff}
				className='video-item item'>
				<div className='blurring dimmable'>
					<div
						className={
							this.state.dimThumbnail ? 'ui dimmer active' : 'ui dimmer'
						}>
						<div className='content'>
							<div className='center'>
								<button
									onClick={this.thumbnailClickHandler}
									className='ui button'>
									<i className='play icon'></i>
								</button>
							</div>
						</div>
					</div>
					<img
						src={this.thumbnails.medium.url}
						alt='video thumbnail'
						srcSet=''
					/>
				</div>
				<div className='content'>
					<div className='header'>{this.title}</div>
					<div className='meta'>
						<span className='date'>Created in {this.publishTime}</span>
					</div>
				</div>
			</div>
		);
	}
}
