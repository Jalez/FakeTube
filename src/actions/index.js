/** @format */

import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchComments = (vidNum) => async (dispatch) => {
	const response = jsonPlaceholder.get(`/posts/${vidNum}/comments`);

	dispatch({ type: 'FETCH-COMMENTS', payload: response.data });
};
