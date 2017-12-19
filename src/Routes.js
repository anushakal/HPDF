import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import App from './App';
import Aadhaarpage from './Aadhaarpage';

class Routesearch extends React.Component{
	render(){
		return(
	<div>
	<BrowserRouter>
	<div>
		<Route path="/" exact component={App} />
		<Route path="/search" exact component={Aadhaarpage} />
	</div>
	</BrowserRouter>
	</div>
	);
	}
}
	export default Routesearch;
