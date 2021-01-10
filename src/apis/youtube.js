/** @format */

import axios from 'axios';

const KEY = 'AIzaSyCVq0kap_fdJNgx-EwPe7iIepbiO9EnfIY';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResult: 5,
		type: 'video',
		key: KEY,
	},
});
