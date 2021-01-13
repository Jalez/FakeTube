/** @format */

import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
	const [videos, setVideos] = useState([]);

	//On launch of app:
	useEffect(() => {
		searchVideos(defaultSearchTerm);
		return () => {
			// cleanup;
		};
	}, [defaultSearchTerm]);

	const searchVideos = async (term) => {
		const { data } = await youtube.get('/search', {
			params: {
				q: term,
			},
		});

		setVideos(data.items);
	};
	return [videos, searchVideos];
};

export default useVideos;
