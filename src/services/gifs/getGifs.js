const apiKey = `ggn8mntOjyXtEOLUXsbZjwfbjJ9ZLAOb`;
const apiBaseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}`;

const setRandomOffset = ( ) =>
{
	const min = 0;
	const max = 500;
	const random = Math.floor( Math.random() * ( max - min + 1 ) + min );
	return random;
};

const getGifs = ( _keyword, limit = 10, offset = setRandomOffset() ) =>
{
	const query = `&q=${_keyword}&limit=${limit}&offset=${offset}&rating=g&lang=en`;
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
