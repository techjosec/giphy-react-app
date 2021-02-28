import React, { useState } from 'react';
import { useLocation } from 'wouter';

import './styles.css';

import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = {
	input: { color: `#FFF` },
};

const Home = ( ) =>
{
	const [keyword, setKeyword] = useState( `` );
	const [_path, pushLocation] = useLocation();

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

		</div>
	);
};

export default Home;
