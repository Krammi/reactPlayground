
/**
 *
 */
export function research(state, researchId) {
	let spaceShip = state.get('spaceShip');
	let totalIron = spaceShip.get('iron');

	const researchObjIndex = state.get('researchList').findIndex(
		(research) => research.get('id') === researchId
	);
	let researchedItem = state.get('researchList').get(researchObjIndex);

	const costOfResearch = researchedItem.get('baseCost') + (researchedItem.get('baseCost') * researchedItem.get('costIncrease') * researchedItem.get('level'));
	if (totalIron >= costOfResearch) {
		researchedItem = researchedItem.update('level', level => level + 1);
		totalIron -= costOfResearch;
		let newState = state.update('researchList', researchList => researchList.set(researchObjIndex, researchedItem));
		const spaceShipUpdated = spaceShip.set('iron', totalIron);
		newState = newState.set('spaceShip', spaceShipUpdated);
		return newState;
	} else {
		const newState = state.set('errorMsg', 'Not enugh iron');
		return newState;
	}
}

/**
 * Handles the tick
 * which means it increases the produced resources
 */
export function tick(state) {
	let spaceShipUpdate = state.get('spaceShip');
	state.get('researchList').forEach(
		researchItem => {
			const productionIncrease = (researchItem.get('productionIncrease') * researchItem.get('level')) + researchItem.get('baseProduction')
			spaceShipUpdate = spaceShipUpdate.update(researchItem.get('name'), iron => iron + productionIncrease);
		}
	);

	const newState = state.set('spaceShip', spaceShipUpdate);
	return newState;
}
