import {createStore} from 'redux';
import reducer from './reducer';

const game = {
	errorMsg: '',
	spaceShip: {
		live: 1000,
		defence: 0,
		speed: 1,
		iron: 100
	},
	researchList: [
		{
			id: 1,
			name: 'iron',
			level: 0,
			baseProduction: 1,
			productionIncrease: 1.5,
			baseCost: 100,
			costIncrease: 1.5
		},
		{
			id: 2,
			name: 'defence',
			level: 0,
			baseProduction: 1,
			productionIncrease: 0.5,
			baseCost: 300,
			costIncrease: 1.5
		}
	]

}

export default function makeStore() {
	return createStore(reducer, game);
}

export const gameInitialState = game;
