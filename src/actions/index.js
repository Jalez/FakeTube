/** @format */

import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchComments = () => async (dispatch) => {
	const response = jsonPlaceholder.get(`/posts/1/comments`);

	dispatch({ type: 'FETCH-COMMENTS', payload: response.data });
};
