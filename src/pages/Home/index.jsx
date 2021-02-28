import React from 'react';
import './styles.css';

import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = {
	input: { color: `#FFF` },
};

const Home = ( ) =>
{
	const handleSubmit = ( e ) =>
	{
		e.preventDefault();
		console.log( e.target );
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
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Home;
