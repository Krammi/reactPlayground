import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {Header} from '../../src/components/header/Header';
import {expect} from 'chai';
import {List, Map, fromJS} from 'immutable';
import {gameInitialState} from '../../src/store';

const {renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
	findRenderedDOMComponentWithClass,
    Simulate} = TestUtils;

function setup(initalState = gameInitialState) {
	const props = fromJS(initalState);

    let output = renderIntoDocument(<Header
        spaceShip={props.get('spaceShip') }
		error={props.get('errorMsg') }
        />
    )
    return {
        props,
        output
    }
}

describe('Header', () => {
    it('displayes the header', () => {
        const {output} = setup();

        const foundSection = scryRenderedDOMComponentsWithTag(output, 'section');
        expect(foundSection).to.exist;

		const foundTotalIron = findRenderedDOMComponentWithClass(output, 'totalIron');
		expect(foundTotalIron.textContent).to.contain('Iron: 100');

    });
it('displayes a errorMsg', () => {
		const errorMessage = 'This is a error';

		const initialState = fromJS(gameInitialState).set('errorMsg', errorMessage);

        const {output} = setup(initialState);

        const foundSection = scryRenderedDOMComponentsWithTag(output, 'section');
        expect(foundSection).to.exist;

		const foundErrorMsg = findRenderedDOMComponentWithClass(output, 'errorMsg');
		expect(foundErrorMsg.textContent).to.contain(errorMessage);

    });

});
