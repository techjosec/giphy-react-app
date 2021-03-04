import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import useGifs from '../../hooks/gifs/useGifs';
import ListOfGifs from '../../components/gifs/List';
import ButtonLink from '../../components/common/ButtonLink';

function SearchResults( { params } )
{
	const { keyword, limit, offset } = params;
	const { loading, gifs } = useGifs( keyword, limit, offset );

	if ( loading ) return <CircularProgress />;

	if ( gifs.length === 0 && !loading )
	{
		return (
			<>
				<h4>
					{` `}
					{ `No results found for ${keyword}`}
					{` `}
				</h4>
				<ButtonLink to="/" title="Home" />
			</>
		);
	}

	return (
		<ListOfGifs gifs={gifs} />
	);
}

export default SearchResults;
