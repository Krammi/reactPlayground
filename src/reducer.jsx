import {Map, fromJS} from 'immutable';
import {research, tick} from './core';

export default function (state = Map(), action) {
    state = fromJS(state)

    switch (action.type) {
        case 'TICK':
            return tick(state);
        case 'RESEARCH':
            return research(fromJS(state), action.researchId);
    }
    return state;
}
