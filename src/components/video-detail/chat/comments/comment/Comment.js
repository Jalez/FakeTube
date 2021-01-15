/** @format */
import React, { useState } from 'react';
import users from '../../testData/users';
import './Comment.css';

function getAvatar(userId) {
	let returnValue = '';
	users.forEach((user) => {
		if (user.id === userId) {
			returnValue = user.Avatar;
		}
	});
	return returnValue;
}

function getDateInfo(date) {
	const today = new Date();
	let theDay;
	if (date.getFullYear() === today.getFullYear()) {
		if (today.getMonth() === date.getMonth()) {
			if (today.getDate() === date.getDate()) {
				theDay = 'Today';
			} else if (today.getDate() - 1 === date.getDate()) {
				theDay = 'Yesterday';
			}
		}
	}
	if (!theDay) {
		theDay =
			date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
	}

	// let hoursAndMinutes =
	// 	date.getHours() +
	// 	':' +
	// 	(date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes());
	// return theDay + ' at ' + hoursAndMinutes;

	return theDay + ' at ' + date.toLocaleTimeString();
}

function Comment({ comment, date, userId }) {
	const [Avatar] = useState(getAvatar(userId));

	return (
		<div className='comment grid'>
			<div className='avatar'>
				<img alt='avatar' src={Avatar} />
			</div>
			<div className='content grid'>
				<div className='metadata grid'>
					<div className='author'>{userId}</div>
					<span className='date'>Posted {getDateInfo(date)}</span>
				</div>
				<div className='text'>{comment}</div>
				<div className='actions grid'>
					<div className='reply'>Reply</div>
					<button className='like'>Like</button>
				</div>
			</div>
			<hr />
		</div>
	);
}

// <div className='ui container comments'>

// </div>

export default Comment;
