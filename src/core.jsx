
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
		const spaceShipUpdated = spaceShip.update('iron', iron => totalIron);
		newState = newState.update('spaceShip', ship => spaceShipUpdated);
		return newState;
	} else {
		const newState = state.update('errorMsg', msg => 'Not enugh iron');
		return newState;
	}
}

/**
 * Handles the tick
 * which means it increases the produced resources
 */
export function tick(state) {
	let spaceShipUpdate = state.get('spaceShip');
	const researchItems = state.get('researchList').forEach(
		researchItem => {
			const productionIncrease = (researchItem.get('productionIncrease') * researchItem.get('level')) + researchItem.get('baseProduction')
			spaceShipUpdate = spaceShipUpdate.update(researchItem.get('name'), iron => iron + productionIncrease);
		}
	);


	const newState = state.update('spaceShip', spaceShip => spaceShipUpdate);
	return newState;
}
