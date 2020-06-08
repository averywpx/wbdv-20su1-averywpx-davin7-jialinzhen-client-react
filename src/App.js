import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./Home";


class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<Route exact path="/" component={Home} />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;

//export default GoogleApiWrapper({
 // apiKey: 'AIzaSyCsDs_-xGs70hKQtNS-gdAVNZxekGqyTkU'
//})(MapContainer);