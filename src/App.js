import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Home from './pages/Home';
import Results from './pages/results';
import MovieDatil from "./pages/MovieDetail";

const App = ({ store }) => (
	// <section>
	// 	<Home></Home>
	// 	<Results></Results>
	// </section>
	<Provider store={store}>
		 <Router>
			<div>
				{/* <Route exact path="/"><Home history={history}/></Route> */}
				<Route exact path="/" component={Home}/>
				<Route path="/results" component={Results} />
				<Route path="/movie/:id" component={MovieDatil} />
			</div>
		</Router> 
	</Provider>
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
