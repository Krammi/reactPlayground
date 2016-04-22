import React from 'react';
import ReactDOM from 'react-dom';
import {SpaceAppContainer} from './components/SpaceApp';
import makeStore from './store';
import {Provider} from 'react-redux';

export const store = makeStore();

ReactDOM.render(
    <Provider store={store}>
        <SpaceAppContainer />
    </Provider>,
    document.getElementById('app')
);