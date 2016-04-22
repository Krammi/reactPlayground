
export function research(state, researchId) {
    const spaceShip = state.get('spaceShip');
    let totalIron = spaceShip.get('iron');

    const researchObjIndex = state.get('researchList').findIndex(
        (research) => research.get('id') === researchId
    );
    var researchedItem = state.get('researchList').get(researchObjIndex);

    const costOfResearch = researchedItem.get('baseCost') + (researchedItem.get('baseCost') * researchedItem.get('costIncrease') * researchedItem.get('level'));
    if (totalIron >= costOfResearch) {
        researchedItem = researchedItem.update('level', level => level + 1);
        totalIron -= costOfResearch;
        var newState = state.update('researchList', researchList => researchList.set(researchObjIndex, researchedItem));
        var spaceShipUpdated = spaceShip.update('iron', iron => totalIron);
        newState = newState.update('spaceShip', ship => spaceShipUpdated);
        return newState;
    } else {
        var newState = state.update('errorMsg', msg => 'Not enugh iron');
        return newState;
    }
}

export function tick(state) {
    var spaceShipUpdate = state.get('spaceShip');
    const researchItems = state.get('researchList').forEach(
        researchItem => {
            var productionIncrease = (researchItem.get('productionIncrease') * researchItem.get('level')) + researchItem.get('baseProduction')
            spaceShipUpdate = spaceShipUpdate.update(researchItem.get('name'), iron => iron + productionIncrease);
        }
    );


    var newState = state.update('spaceShip', spaceShip => spaceShipUpdate);
    return newState;
}