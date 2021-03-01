import React from 'react';
import { Link } from 'wouter';
import CircularProgress from '@material-ui/core/CircularProgress';
import ListOfGifs from '../../components/gifs/List';
import useGifs from '../../hooks/gifs/useGifs';

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
				<Link className="go-back" href="/">Go back!</Link>
			</>
		);
	}

	return (
		<ListOfGifs gifs={gifs} />
	);
}

export default SearchResults;
