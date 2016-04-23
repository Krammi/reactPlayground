import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {ResearchList} from '../../src/components/researchList/ResearchList';
import {expect} from 'chai';
import {fromJS} from 'immutable';
const {renderIntoDocument,
    scryRenderedDOMComponentsWithTag} = TestUtils;
import {gameInitialState} from '../../src/store';


function setup() {
    let props = fromJS(gameInitialState);
    let output = renderIntoDocument(<ResearchList researchList={props.get('researchList')}/>)
    return {
        props,
        output
    }
}

describe('ResearchList', () => {

    it('renders a list with all available researches', () => {
        const { output, props } = setup();

		const totalResearches = props.get('researchList').size;

        const items = scryRenderedDOMComponentsWithTag(output, 'button');

		expect(items.length).to.equal(totalResearches);
        expect(items[0].textContent).to.contain('iron');
    });
});
