/** @format */

import React, { useState } from 'react';
import './ReplyForm.css';
import userComments from '../testData/comments';

function ReplyForm(props) {
	const [message, setMessage] = useState('');

	const formOnSubmit = (e) => {
		e.preventDefault();

		const newComment = {
			userId: 'Eliott',
			comment: message,
			date: new Date(Date.now()),
		};
		userComments.unshift(newComment);
		// console.log(userComments);
		props.newMessageHandler();

		setMessage('');
	};

	return (
		<form onSubmit={formOnSubmit} className='ui reply-form form'>
			<div className='field'>
				<input
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					id='replyField'
					placeholder='Thoughts?'
				/>
			</div>
			<button onClick={formOnSubmit} className='ui labeled submit icon button'>
				<i className='icon edit'></i> Add Reply
			</button>
		</form>
	);
}

export default ReplyForm;
