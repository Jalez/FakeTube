/**
 * /* eslint-disable import/no-anonymous-default-export
 *
 * @format
 */

/* eslint-disable default-case */
export default (state, action) => {
	switch (action.type) {
		case 'FETCH_COMMENTS':
			return action.payload;
	}
};
