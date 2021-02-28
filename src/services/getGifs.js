const apiKey = `ggn8mntOjyXtEOLUXsbZjwfbjJ9ZLAOb`;
const apiBaseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}`;

const getGifs = ( _keyword = `ramdom` ) =>
{
	const query = `&q=${_keyword}&limit=10&offset=0&rating=g&lang=en`;
	const queryUrl = apiBaseUrl + query;

	return fetch( queryUrl )
		.then( ( response ) => response.json() )
		.then( ( result ) =>
		{
			const { data = [] } = result;
			if ( Array.isArray( data ) )
			{
				const gifs = data.map( ( image ) =>
				{
					const { id, title, images } = image;
					const { url } = images.downsized_medium;
					return { id, url, title };
				} );
				return gifs;
			}

			return [];
		} ).catch( ( error ) =>
		{
			throw new Error( error.message );
		} );
};
export default getGifs;
