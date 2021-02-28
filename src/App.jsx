import React from 'react';
import { Route } from 'wouter';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './App.css';
import ListOfGifs from './components/gifs/List';
import Home from './pages/Home';

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
				<Route path="/search/:keyword" component={ListOfGifs} />
				<Route path="/gif/:id" component={ListOfGifs} />
				<Route path="/" component={Home} />
			</section>
		</div>
	</MuiThemeProvider>
);

export default App;
