/** @format */

import React, { Component } from 'react';
import Comment from './comment/Comment';
import './Comments.css';

//temporary testData for comments
// import userComments from '../../testData/comments';

export default class Comments extends Component {
	getCommentEls() {
		return this.props.comments.map((commentData, index) => {
			return (
				<Comment
					key={index}
					comment={commentData.comment}
					date={commentData.date}
					userId={commentData.userId}
				/>
			);
		});
	}

	render() {
		return <div className='comments'>{this.getCommentEls()}</div>;
	}
}
