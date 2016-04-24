import React from 'react';
import ReactDOM from 'react-dom';
import {SpaceAppContainer} from './components/SpaceApp';
import makeStore from './store';
import {Provider} from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'

export const store = makeStore();
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
	<Provider {...{ store }}>
		<Router history={history}>
			<Route path="/" component={SpaceAppContainer}>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
