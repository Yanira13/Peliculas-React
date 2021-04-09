import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Home from './pages/Home';
import Results from './pages/results';

const App = ({ store }) => (
	<Provider store={store}>
		 <Router>
			 <Route path="/" component={Home} /> 
		</Router> 
	</Provider>
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
