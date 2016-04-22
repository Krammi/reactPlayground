import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {ResearchList} from '../../src/components/ResearchList';
import {expect} from 'chai';
import {List, Map, fromJS} from 'immutable';
const {renderIntoDocument,
    scryRenderedDOMComponentsWithClass} = TestUtils;


function setup() {
    let props = fromJS({
        researchList: [
            {
                id: 1,
                name: 'iron',
                level: 0,
                baseProduction: 1,
                productionIncrease: 1
            }
        ]
    });
    let output = renderIntoDocument(<ResearchList researchList={props.get('researchList')}/>)
    return {
        props,
        output
    }
}

describe('ResearchList', () => {

    it('renders a list with all available researches', () => {
        const { output } = setup();
        const items = scryRenderedDOMComponentsWithClass(output, 'researchItem');
        expect(items.length).to.equal(1);
        expect(items[0].textContent).to.contain('iron');
    });
});