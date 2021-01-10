/** @format */

import React, { Component } from 'react';
import Comments from './comments/Comments';
import ReplyForm from './replyform/ReplyForm';
import userTestComments from './testData/comments';
import './Chat.css';

export default class Chat extends Component {
	state = {
		comments: userTestComments,
	};

	newMessageHandler = () => {
		this.setState({ comments: userTestComments });
	};

	finishDrag = () => {
		document.onmouseup = null;
		document.onmousemove = null;
	};

	dragScaler = (event) => {
		console.log('Moving!');
	};

	mouseDownHandler = (event) => {
		console.log(event);
		document.onmousemove = this.dragScaler;
		document.onmouseup = this.finishDrag;
	};

	render() {
		return (
			<div className='chat'>
				<ReplyForm newMessageHandler={this.newMessageHandler} />
				<Comments comments={this.state.comments} />
				<div onMouseDown={this.mouseDownHandler}>Enlarge</div>
			</div>
		);
	}
}
