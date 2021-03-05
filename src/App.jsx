import React from 'react';
import { Route } from 'wouter';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { GifsContextProvider } from './context/GifsContext';
import './App.css';
import SearchResults from './pages/SearchResults';
import Home from './pages/Home';
import Detail from './pages/Detail';

const theme = createMuiTheme( {
	palette: {
	  primary: {
			main: `#FFF`,
	  },
	},
} );

const App = () => (
	<MuiThemeProvider theme={theme}>
		<div className="App">
			<section className="App-content">
				<h1>Another Gifs APP!</h1>
				<div className="wrapper">
					<GifsContextProvider>
						<Route path="/search/:keyword" component={SearchResults} />
						<Route path="/gif/:id" component={Detail} />
						<Route path="/" component={Home} />
					</GifsContextProvider>
				</div>
			</section>
		</div>
	</MuiThemeProvider>
);

export default App;
