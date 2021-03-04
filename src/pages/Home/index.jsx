import React, { useState } from 'react';
import { useLocation } from 'wouter';

import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

import useGifs from '../../hooks/gifs/useGifs';
import ListOfGifs from '../../components/gifs/List';

import './styles.css';

const styles = {
	input: { color: `#FFF` },
};

const Home = ( ) =>
{
	const [keyword, setKeyword] = useState( `` );
	const [_path, pushLocation] = useLocation( );
	const { loading, gifs } = useGifs( );

	const handleSubmit = ( e ) =>
	{
		e.preventDefault();
		pushLocation( `/search/${keyword}` );
	};

	const handleChange = ( e ) =>
	{
		setKeyword( e.target.value );
	};

	return (
		<div className="Home">

			<div className="Search">
				<div>
					<form autoComplete="off" onSubmit={handleSubmit}>
						<Input
							style={styles.input}
							color="primary"
							placeholder="Search a Gif"
							inputProps={{
								'aria-label': `search`,
							  }}
							  endAdornment={(
								<InputAdornment position="start">
									  <SearchIcon />
								</InputAdornment>
							)}
							onChange={handleChange}
							value={keyword}
						/>
					</form>
				</div>
			</div>

			<hr />

			{
				!loading && gifs.length > 0 && <ListOfGifs gifs={gifs} />
			}

		</div>
	);
};

export default Home;
