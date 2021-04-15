import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import './index.css'

import Home from './pages/Home';
import Results from './pages/Results';
import MovieDatil from './pages/MovieDetail';
import MovieYear from './pages/MovieYear';

function App ({ store }) {

	return(
		<Provider store={store} >
		 	<Router>
				 <Route path="/" component={Home} /> 
				 <Route path="/results" component={Results} /> 
				 <Route path="/movie/:id"  component={MovieDatil} /> 
				 <Route path="/year/:year"  component={MovieYear} /> 
			</Router> 
		</Provider>
	)
};
App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
