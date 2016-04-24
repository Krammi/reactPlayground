import {fromJS} from 'immutable';
import {research, tick} from './core';
import {gameInitialState} from './store';

export default function (state = gameInitialState, action) {
    // state = fromJS(state)

    switch (action.type) {
        case 'TICK':
            return tick(state);
        case 'RESEARCH':
            return research(fromJS(state), action.researchId);
    }
    return state;
}
