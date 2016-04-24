import {createStore, combineReducers} from 'redux';
import reducer from './reducer';
import { routerReducer } from 'react-router-redux'
import {Map, List} from 'immutable';

const game = Map(
	{

		errorMsg: '',
		spaceShip: Map({
			live: 1000,
			defence: 0,
			speed: 1,
			iron: 100
		}),
		researchList: List([
			Map({
				id: 1,
				name: 'iron',
				level: 0,
				baseProduction: 1,
				productionIncrease: 1.5,
				baseCost: 100,
				costIncrease: 1.5
			}),
			Map({
				id: 2,
				name: 'defence',
				level: 0,
				baseProduction: 1,
				productionIncrease: 0.5,
				baseCost: 300,
				costIncrease: 1.5
			})
		])

	}
)

export default function makeStore() {
	const store = createStore(
		combineReducers({
			game: reducer,
			routing: routerReducer
		})
	)
	return store;
}

export const gameInitialState = game;
